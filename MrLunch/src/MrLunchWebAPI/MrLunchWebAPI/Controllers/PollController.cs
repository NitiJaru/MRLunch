﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MrLunchWebAPI.Models;

namespace MrLunchWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PollController : Controller
    {
        private const string ConnectionString = @"mongodb://earn:e09545321@ds141872.mlab.com:41872/mrlunch";
        private const string DatabaseName = @"mrlunch";
        private const string CollectionRestaurant = @"restaurants";
        private const string CollectionRestaurantPoll = @"restaurantpoll";

        private IMongoDatabase _database;
        private IMongoCollection<Restaurant> _collectionRestaurants;
        private IMongoCollection<RestaurantPoll> _collectionRestaurantpolls;

        public PollController()
        {
            var client = new MongoClient(ConnectionString);
            _database = client.GetDatabase(DatabaseName);
            _collectionRestaurants = _database.GetCollection<Restaurant>(CollectionRestaurant);
            _collectionRestaurantpolls = _database.GetCollection<RestaurantPoll>(CollectionRestaurantPoll);
        }

        [HttpGet]
        public IEnumerable<RestaurantPoll> GetRestaurantPolls()
        {
            return _collectionRestaurantpolls.Find(it => true).ToList();
        }

        [HttpGet("{id}")]
        public IEnumerable<RestaurantPoll> GetRestaurantPoll(string id)
        {
            return _collectionRestaurantpolls.Find(it => it.Id == id).ToList();
        }

        [HttpPost]
        public Response CreatePoll([FromBody]RestaurantPoll model)
        {
            var isValidateData = model != null
                && !string.IsNullOrWhiteSpace(model.RestaurantId)
                && !string.IsNullOrWhiteSpace(model.RestaurantName);
            if (!isValidateData) return new Response { IsSuccess = false, ErrorMessage = "Data can not be empty" };

            var isClosedDateValid = model.ClosedDate > DateTime.Now;
            if (!isClosedDateValid) return new Response { IsSuccess = false, ErrorMessage = "CloseDate must More than the current date" };

            model.Id = Guid.NewGuid().ToString();
            var restaurant = _collectionRestaurants.Find(it => it.Id == model.RestaurantId).FirstOrDefault();
            model.MenuPolls = restaurant.Menus.Select(it => new RestaurantMenuPoll { Id = it.Id, Name = it.Name });
            _collectionRestaurantpolls.InsertOne(model);
            return new Response { IsSuccess = true };
        }
        
        [HttpGet("{id}/{menuid}")]
        public RestaurantPoll VotePoll(string id, string menuid)
        {
            var validateData = !string.IsNullOrWhiteSpace(id) && !string.IsNullOrWhiteSpace(menuid);
            if (!validateData) return new RestaurantPoll();

            var model = _collectionRestaurantpolls.Find(it => it.Id == id).FirstOrDefault();
            if (model == null) return new RestaurantPoll();

            var menu = model.MenuPolls.FirstOrDefault(it => it.Id == menuid);
            if (menu == null) return new RestaurantPoll();

            menu.VoteMenuCount++;
            model.VotedPollCount++;
            var changeMenuCount = model.MenuPolls.ToList();
            changeMenuCount.Remove(menu);
            changeMenuCount.Add(menu);
            model.MenuPolls = changeMenuCount;
            _collectionRestaurantpolls.ReplaceOne(it => it.Id == id, model);
            return model;
        }

    }
}
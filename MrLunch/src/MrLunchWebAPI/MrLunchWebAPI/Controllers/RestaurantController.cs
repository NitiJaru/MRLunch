using System;
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
    public class RestaurantController : Controller
    {
        private const string ConnectionString = @"mongodb://earn:e09545321@ds141872.mlab.com:41872/mrlunch";
        private const string DatabaseName = @"mrlunch";

        private const string CollectionRestaurant = @"restaurants";

        private IMongoDatabase _database;
        private IMongoCollection<Restaurant> _collectionRestaurants;

        public RestaurantController()
        {
            var client = new MongoClient(ConnectionString);
            _database = client.GetDatabase(DatabaseName);
            _collectionRestaurants = _database.GetCollection<Restaurant>(CollectionRestaurant);
        }

        [HttpGet]
        public IEnumerable<Restaurant> GetRestaurants()
        {
            return _collectionRestaurants.Find(it => true).ToList();
        }
        
        [HttpGet]
        public Restaurant GetRestaurant(string id)
        {
            return _collectionRestaurants.Find(it => it.Id == id).FirstOrDefault();
        }

        [HttpPost]
        public Response CreateRestaurant([FromBody]Restaurant model)
        {
            if (model != null)
            {
                model.Id = Guid.NewGuid().ToString();
                _collectionRestaurants.InsertOne(model);
                return new Response { IsSuccess = true };
            }
            return new Response { IsSuccess = false, ErrorMessage = "Data can not be empty" };
        }

    }
}
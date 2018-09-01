using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MrLunchWebAPI.Models
{
    public class RestaurantPollResult : Response
    {
        public RestaurantPoll RestaurantPoll { get; set; }
    }
}

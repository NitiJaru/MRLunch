using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MrLunchWebAPI.Models
{
    public class RestaurantPoll
    {
        public string Id { get; set; }
        public string RestaurantId { get; set; }
        public string RestaurantName { get; set; }
        public DateTime ClosedDate { get; set; }
        public int MinimumVote { get; set; }
        public RestaurantMenu DefaultVote { get; set; }
    }
}

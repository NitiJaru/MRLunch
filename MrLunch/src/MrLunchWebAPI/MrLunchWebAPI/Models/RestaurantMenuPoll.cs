using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MrLunchWebAPI.Models
{
    public class RestaurantMenuPoll: RestaurantMenu
    {
        public int VoteMenuCount { get; set; }

    }
}

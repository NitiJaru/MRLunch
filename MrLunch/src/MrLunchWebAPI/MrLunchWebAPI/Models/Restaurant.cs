using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MrLunchWebAPI.Models
{
    public class Restaurant
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<RestaurantMenu> Menus { get; set; }
    }
}

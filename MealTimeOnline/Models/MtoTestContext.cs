using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using MealTimeOnline.Models.Common;
using MealTimeOnline.Models.Consumer;
using MealTimeOnline.Models.Dealer;

namespace MealTimeOnline.Models
{
    public class MtoTestContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        //public DbSet<Canteen> Canteens { get; set; }

        //public DbSet<Evaluate> Evaluates { get; set; }
        //public DbSet<Image> Images { get; set; }
        
        //public DbSet<FoodList> FoodLists { get; set; }
        
        //public DbSet<Address> Addresses { get; set; }
        //public DbSet<Cart> Carts { get; set; }
        //public DbSet<Favorite> Favorites { get; set; }
        //public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
using System.Data.Entity;
using MealTimeOnline.Models;
using MealTimeOnline.Models.Commodity;
using MealTimeOnline.Models.Common;
using MealTimeOnline.Models.Consumer;
using MealTimeOnline.Models.Dealer;

namespace MealTimeOnline.DataAccessLayer
{
    public class MtoDataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Food> Foods { get; set; }
        public DbSet<FoodCategory> FoodCategories { get; set; }

        public DbSet<Evaluate> Evaluates { get; set; }
        public DbSet<PeopleCategory> PeopleCategories { get; set; }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Favorite> Favorites { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<RedPacket> RedPackets { get; set; }

        public DbSet<Canteen> Canteens { get; set; }
        public DbSet<CanteenCategory> CanteenCategories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
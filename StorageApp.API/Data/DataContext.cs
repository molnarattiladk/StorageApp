using Microsoft.EntityFrameworkCore;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
            
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Item> Items { get; set; }
    }
}
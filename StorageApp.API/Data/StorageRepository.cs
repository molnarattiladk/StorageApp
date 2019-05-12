using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    public class StorageRepository : IStorageRepository
    {
        private readonly DataContext _context;

        public StorageRepository(DataContext context)
        {
            this._context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Deleted<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        // For items
        public async Task<Item> GetItem(int id)
        {
            var item = await _context.Items.FirstOrDefaultAsync(i => i.ID == id);
            return item;
        }

        public async Task<IEnumerable<Item>> GetItems()
        {
            var items = await _context.Items.ToListAsync();
            return items;
        }

        // for users

         public async Task<User> GetUser(int id)
        {
            var item = await _context.Users.FirstOrDefaultAsync(i => i.Id == id);
            return item;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var items = await _context.Users.ToListAsync();
            return items;
        }


        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _context.Users.AnyAsync(x=>x.UserName==username))
                return true;
            return false;
        }
    }
}
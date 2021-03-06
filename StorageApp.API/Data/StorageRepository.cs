using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StorageApp.API.Helpers;
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

        public async Task<PagedList<Item>> GetItems(ItemParams itemParams)
        {
            var items =  _context.Items.AsQueryable();

            //rendezősdi
            if (!string.IsNullOrEmpty(itemParams.OrderBy))
            {
                switch (itemParams.OrderBy)
                {
                    case "lastModify":
                        items = items.OrderByDescending(u => u.LastModify);
                        break;
                    default:
                        items = items.OrderByDescending(u => u.Name);
                        break;
                }
            }

            return await PagedList<Item>.CreateAsync(items, itemParams.PageNumber, itemParams.PageSize);
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

        public async Task<bool> ItemExists(string itemname)
        {
            if ( await _context.Items.AnyAsync(x=>x.Name == itemname))
                return true;
            return false;
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
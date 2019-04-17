using System.Collections.Generic;
using System.Threading.Tasks;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    public interface IItemRepository
    {
        void Add<T>(T entity) where T: class;
        void Deleted<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Item>> GetItems();
        Task<Item> GetItem(int id);
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    ///
    /// GENERAL INTERFACE REPOSITORY
    ///
    public interface IStorageRepository
    {
        void Add<T>(T entity) where T: class;
        void Deleted<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Item>> GetItems();
        Task<Item> GetItem(int id);

        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);

        Task<bool> UserExists(string username);

        
        Task<bool> ItemExists(string username);
    }
}
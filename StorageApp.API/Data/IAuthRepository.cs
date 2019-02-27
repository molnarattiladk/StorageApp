using System.Threading.Tasks;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string user, string password);
        Task<bool> UserExists(string username);
    }
}
using StorageApp.API.Models;

namespace StorageApp.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public Role Role { get; set; }
    }
}
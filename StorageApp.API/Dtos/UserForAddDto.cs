using System.ComponentModel.DataAnnotations;

namespace StorageApp.API.Dtos
{
    public class UserForAddDto
    {
        [Required]
        public string UserName { get; set; }
        
        [Required]
        public string Role { get; set; }

        [Required]
        public int Salary { get; set; }

        [Required]
        public bool onHoliday { get; set; }

        [Required]    
        public string Started { get; set; }

        [Required]
        public string Contact { get; set; }
    }
}
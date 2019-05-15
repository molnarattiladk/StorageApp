using System;
using System.ComponentModel.DataAnnotations;

namespace StorageApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(10, MinimumLength=4,ErrorMessage="Jelszónak 4 és 10 közötti karakternek kell lenni")]
        public string Password { get; set; }

        [Required]
        public string Contact { get; set; }

        public DateTime Started { get; set; }

        public UserForRegisterDto()
        {
            Started = DateTime.Now;
        }
    }
}
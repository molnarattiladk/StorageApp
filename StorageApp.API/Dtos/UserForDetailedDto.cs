using System;
using StorageApp.API.Models;

namespace StorageApp.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public Role Role { get; set; }

        public double Salary { get; set; }

        public bool OnHoliday { get; set; }

        public DateTime Started { get; set; }

        public string Contact { get; set; }
    }
}
using System;

namespace StorageApp.API.Models
{
    public enum Role{ADMIN, BOSS, EMPLOYE}
    public class User
    {
        
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public Role Role { get; set; }

        public double Salary { get; set; }

        public bool OnHoliday { get; set; }

        public DateTime Started { get; set; }

        public string Contact { get; set; }
        
    }
}
using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext context)
        {
            this._context=context;
        }


        public void SeedUsers()
        {
            var userData = System.IO.File.ReadAllText("Data/SimpleUserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach(var user in users)
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password",out passwordHash, out passwordSalt);

                user.PasswordHash=passwordHash;
                user.PasswordSalt=passwordSalt;

                _context.Users.Add(user);
            }

            _context.SaveChanges();
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt=hmac.Key;
                passwordHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }        
        }
    }
}
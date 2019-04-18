using System;
using StorageApp.API.Models;

namespace StorageApp.API.Dtos
{
    public class ItemForListDto
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public int Count { get; set; }

        public double NetPrice { get; set; }

        public DateTime LastModify { get; set; }

        //User-nek a neve
        public string LastModifier { get; set; }
    }
}
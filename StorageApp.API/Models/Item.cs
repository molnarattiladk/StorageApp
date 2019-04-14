using System;

namespace StorageApp.API.Models
{
    public class Item
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Count { get; set; }

        public double GrossPrice { get; set; }

        public double NetPrice { get; set; }

        public DateTime LastModify { get; set; }

        public User LastModifier { get; set; }

    }
}
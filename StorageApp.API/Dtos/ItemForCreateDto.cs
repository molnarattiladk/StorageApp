using System;
using System.ComponentModel.DataAnnotations;
using StorageApp.API.Models;

namespace StorageApp.API.Dtos
{
    public class ItemForCreateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int Count { get; set; }

        [Required]
        public double GrossPrice { get; set; }

        [Required]
        public double NetPrice { get; set; }

        [Required]
        public DateTime LastModify { get; set; }

        public User LastModifier { get; set; }
    }
}
﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StorageApp.API.Data;

namespace StorageApp.API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity("StorageApp.API.Models.Item", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Count");

                    b.Property<string>("Description");

                    b.Property<double>("GrossPrice");

                    b.Property<int?>("LastModifierId");

                    b.Property<DateTime>("LastModify");

                    b.Property<string>("Name");

                    b.Property<double>("NetPrice");

                    b.HasKey("ID");

                    b.HasIndex("LastModifierId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("StorageApp.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("StorageApp.API.Models.Item", b =>
                {
                    b.HasOne("StorageApp.API.Models.User", "LastModifier")
                        .WithMany()
                        .HasForeignKey("LastModifierId");
                });
#pragma warning restore 612, 618
        }
    }
}

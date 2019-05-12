using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StorageApp.API.Data;
using StorageApp.API.Dtos;
using StorageApp.API.Models;

namespace StorageApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IStorageRepository _repo;
        private readonly IMapper _mapper;

        public ItemController(IStorageRepository repo, IMapper mapper)
        {
            this._repo = repo;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _repo.GetItems();
            var itemsToReturn = _mapper.Map<IEnumerable<ItemForListDto>>(items);
            return Ok(itemsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _repo.GetItem(id);

            var itemToReturn = _mapper.Map<ItemForDetailedDto>(item);   //Célt kell megadno, simazárójelben meg a forrást


            return Ok(itemToReturn);
        }

        [HttpPut("{id}/{itemid}")]
        public async Task<IActionResult> UpdateItem(int id, int itemid, ItemForUpdateDto itemForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();



            var userFromRepo = await _repo.GetUser(itemid);

            _mapper.Map(itemForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();
            
            throw new Exception($"Nem jó az azlábbi {id}");
        }

        [HttpPost("{userid}")]
        public async Task<IActionResult> CreateItem(int userid, ItemForCreateDto itemForCreateDto)
        {
            if (userid != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();


             
            var userFromRepo = await _repo.GetUser(userid); //userem
            
            itemForCreateDto.LastModifier = userFromRepo;
            itemForCreateDto.Name=itemForCreateDto.Name.ToLower();

            if (await _repo.ItemExists(itemForCreateDto.Name))
                return BadRequest("Item already exists");
        
            var itemToCreate = _mapper.Map<Item>(itemForCreateDto);

            _repo.Add(itemToCreate);

            if ( await _repo.SaveAll())
                return StatusCode(201);

            throw new Exception("Nem sikerült a hozzáadás");
        }
        
    }
}
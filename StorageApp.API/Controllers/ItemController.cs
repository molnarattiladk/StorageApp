using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StorageApp.API.Data;
using StorageApp.API.Dtos;

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

        
    }
}
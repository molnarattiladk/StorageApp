using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StorageApp.API.Data;

namespace StorageApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        private readonly IConfiguration _config;

        public ItemController(IItemRepository repo, IConfiguration config)
        {
            this._config = config;
            this._repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _repo.GetItems();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _repo.GetItem(id);

            //var userToReturn = _mapper.Map<UserForDetailedDto>(user);   //Célt kell megadno, simazárójelben meg a forrást


            return Ok(item);
        }

        
    }
}
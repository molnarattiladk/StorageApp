using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StorageApp.API.Data;
using StorageApp.API.Dtos;
using StorageApp.API.Models;

namespace StorageApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IStorageRepository _repo;
        private readonly IMapper _mapper;

        public UserController(IStorageRepository repo, IMapper mapper)
        {
            this._repo = repo;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }

        [HttpPut("{id}/{userid}")]
        public async Task<IActionResult> UpdateUser(int id, int userid,UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(userid);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Nem jó ez {id}");
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(UserForAddDto userForAddDto)
        {
            userForAddDto.UserName=userForAddDto.UserName.ToLower();

            // létezik e már
            if (await _repo.UserExists(userForAddDto.UserName))
            {
                return BadRequest("Username already exists");
            }
        

            var userToCreate = _mapper.Map<User>(userForAddDto);
            //mapper kell

            _repo.Add(userToCreate);
            return StatusCode(201);

            // var userToReturn = _mapper.Map<UserForDetailedDto>(createdUser);

            // return CreatedAtRoute("GetUser", new {controller = "Users", id = createdUser.Id}, userToReturn);
        }
    }
}
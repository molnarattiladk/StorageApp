using AutoMapper;
using StorageApp.API.Dtos;
using StorageApp.API.Models;

namespace StorageApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Item,ItemForListDto>()
                .ForMember(dest => dest.LastModifier, opt =>{
                    opt.MapFrom(src => src.LastModifier.UserName.ToString());
                });
            CreateMap<Item, ItemForDetailedDto>()
                .ForMember(dest => dest.LastModifier, opt =>{
                    opt.MapFrom(src => src.LastModifier.UserName.ToString());
                });

            CreateMap<UserForUpdateDto, User>();

            CreateMap<ItemForUpdateDto, Item>();
        }
    }
}
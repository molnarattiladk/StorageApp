namespace StorageApp.API.Dtos
{
    public class UserForUpdateDto
    {
        public string userName { get; set; }

        public string Role { get; set; }

        public int Salary { get; set; }

        public bool onHoliday { get; set; }

        public string Started { get; set; }
        public string Contact { get; set; }
    }
}
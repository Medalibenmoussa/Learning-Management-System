using AppCore.Interface;
using AppCore.Models;
using AppCore.Services.JwtService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly IJwtService _jwtService;
        private readonly IGenericRepository<User> _userRepository;
        public UserService(IGenericRepository<User> userRepository, IJwtService jwtService)
        {
            _userRepository = userRepository;
            _jwtService = jwtService;
        }
        public async Task<User?> GetUser(int id)
        {
            return _userRepository.GetById(id);
        }
        public async Task<User?> Authenticate(string username, string password)
        {
            return _userRepository.GetAllFilterOrder(x => x.Username == username && x.Password == password).FirstOrDefault();
        }
        public async Task<string?> login(string username, string password)
        {
            var user = await Authenticate(username, password);
            if (user == null)
            {
                return null;
            }
            return _jwtService.GenerateToken(user);
        }

    }
}

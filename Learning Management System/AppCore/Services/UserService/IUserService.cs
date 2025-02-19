using AppCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Services.UserService
{
    public interface IUserService
    {
        Task<User?> GetUser(int id);
        Task<User?> Authenticate(string username, string password);
        Task<String?> login(string username, string password);
    }
}

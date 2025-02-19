using AppCore.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Learning_Management_System.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet("login")]
        public IActionResult Login(string username, string password)
        {
            var token = _userService.login(username, password);
            if (token == null)
            {
                return Unauthorized("Invalid username or password");
            }
            return Ok(token.Result);
        }
    }
}

using AppCore.Models;
using AppCore.Services.CorseService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Learning_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseService _courseService;

        public CoursesController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [Authorize(Roles = "admin,student")]
        [HttpGet]
        public async Task<IActionResult> GetCourses()
        {
            var courses = await _courseService.GetAllCoursesAsync();
            return Ok(courses);
        }
        [Authorize(Roles = "admin,trainer")]
        [HttpPost]
        public async Task<IActionResult> CreateCourse([FromBody] Course course)
        {
            if (course == null)
            {
                return BadRequest();
            }

            await _courseService.AddCourseAsync(course);
            return Ok();
        }

        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var existingCourse = await _courseService.GetCourseByIdAsync(id);
            if (existingCourse == null)
            {
                return NotFound();
            }
            await _courseService.DeleteCourseAsync(id);
            return NoContent();
        }
    }
}

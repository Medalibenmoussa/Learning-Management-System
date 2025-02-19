using AppCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Services.CorseService
{
    public interface ICourseService
    {
        Task<IEnumerable<Course>> GetAllCoursesAsync();
        Task<Course> GetCourseByIdAsync(int id);
        Task AddCourseAsync(Course course);
        Task UpdateCourseAsync(Course course);
        Task DeleteCourseAsync(int id);
    }
}

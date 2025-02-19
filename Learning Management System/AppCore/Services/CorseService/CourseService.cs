using AppCore.Interface;
using AppCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Services.CorseService
{
    public class CourseService : ICourseService
    {
        private readonly IGenericRepository<Course> _courseRepository;

        public CourseService(IGenericRepository<Course> courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public async Task<IEnumerable<Course>> GetAllCoursesAsync()
        {
            return _courseRepository.GetAllFilterOrder();
        }

        public async Task<Course> GetCourseByIdAsync(int id)
        {
            return await Task.FromResult(_courseRepository.GetById(id));
        }

        public async Task AddCourseAsync(Course course)
        {
            await _courseRepository.AddAsync(course);
        }

        public async Task UpdateCourseAsync(Course course)
        {
            await _courseRepository.UpdateAsync(course);
        }

        public async Task DeleteCourseAsync(int id)
        {
            await _courseRepository.DeleteAsync(id);
        }
    }
}

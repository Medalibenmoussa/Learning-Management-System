using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AppCore.Interface
{
    public interface IGenericRepository<T> where T : class
    {
        T GetById(int id);
        IQueryable<T> GetAll();

        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(int id);
        IQueryable<T> GetAllFilterOrder(
            Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,

            bool disableTracking = false
        );
    }
}

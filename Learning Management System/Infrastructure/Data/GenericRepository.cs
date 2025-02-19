using AppCore.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly ApplicationDbContext _context;
        protected readonly DbSet<T> _Entities;

        public GenericRepository(ApplicationDbContext context)
        {
            _context = context;
            _Entities = _context.Set<T>();
        }

        public async Task AddAsync(T entity)
        {
            await _Entities.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _Entities.FindAsync(id);
            if (entity != null)
            {
                _Entities.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public T GetById(int id)
        {
            return _Entities.Find(id);
        }

        public async Task UpdateAsync(T entity)
        {
            _Entities.Update(entity);
            await _context.SaveChangesAsync();
        }

        public IQueryable<T> GetAll()
        {
            return _Entities;
        }
        public virtual IQueryable<T> GetAllFilterOrder(
            Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,

            bool disableTracking = false)
        {
            IQueryable<T> query = GetAll();
            if (disableTracking)
            {
                query = query.AsNoTracking();
            }

            if (predicate != null)
            {
                query = query.Where(predicate);
            }
            if (orderBy != null)
            {
                return orderBy(query);
            }
            else
            {
                return query;
            }
        }
    }
}

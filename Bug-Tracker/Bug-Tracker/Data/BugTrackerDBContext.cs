using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bug_Tracker.Models;

namespace Bug_Tracker.Data
{
    public class BugTrackerDBContext : DbContext
    {
        public BugTrackerDBContext(DbContextOptions<BugTrackerDBContext> options ):base(options)
        {

        }
        public DbSet<UserModel>Users { get; set; }

    }
}

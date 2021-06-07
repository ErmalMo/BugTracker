using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugTracker.Models
{
    public class ProjectData
    {
        public int ProjectId { get; set; }

        public string ProjectProblem { get; set; }
        public int ProjectProgres { get; set; }
    }
}

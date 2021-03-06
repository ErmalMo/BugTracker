using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BugTrackerNET.Data;
using BugTrackerNET.Models;

namespace BugTrackerNET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingsGetController : ControllerBase
    {
        private readonly BugTrackerNETContext _context;

        public RatingsGetController(BugTrackerNETContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult PostUserDataLogin(UserDataLogin usl)
        {
            if (usl.Email == null || usl.Password == null)
            {
                return BadRequest();
            }


            var UserDatasLogin = _context.Rating.Where(e => e.Email.Equals(usl.Email));


            if (!UserDatasLogin.Any())
            {
                return NotFound();
            }


            return Ok(UserDatasLogin);
        }
    }
}

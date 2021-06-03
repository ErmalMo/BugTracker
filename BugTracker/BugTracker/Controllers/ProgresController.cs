using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using BugTracker.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace BugTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgresController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public ProgresController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select ProgresId, ProjectProgres from dbo.Progres";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Progres dof)
        {
            string query = @"
                    insert into dbo.Progres 
                    (ProjectProgres)
                    values 
                    (
                    '" + dof.ProjectProgres + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DataUserAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Progres dof)
        {
            string query = @"
                    update dbo.Progres set 
                    ProjectProgres = '" + dof.ProjectProgres + @"'
                    where ProgresId = " + dof.ProgresId + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DataUserAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Progres
                    where ProgresId = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DataUserAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }


        /* [Route("SaveFile")]
         [HttpPost]
         public JsonResult SaveFile()
         {
             try
             {
                 var httpRequest = Request.Form;
                 var postedFile = httpRequest.Files[0];
                 string filename = postedFile.FileName;
                 var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                 using (var stream = new FileStream(physicalPath, FileMode.Create))
                 {
                     postedFile.CopyTo(stream);
                 }

                 return new JsonResult(filename);
             }
             catch (Exception)
             {

                 return new JsonResult("anonymous.png");
             }
         }


         [Route("GetAllDepartmentNames")]
         public JsonResult GetAllDepartmentNames()
         {
             string query = @"
                     select DepartmentName from dbo.Department
                     ";
             DataTable table = new DataTable();
             string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
             SqlDataReader myReader;
             using (SqlConnection myCon = new SqlConnection(sqlDataSource))
             {
                 myCon.Open();
                 using (SqlCommand myCommand = new SqlCommand(query, myCon))
                 {
                     myReader = myCommand.ExecuteReader();
                     table.Load(myReader); ;

                     myReader.Close();
                     myCon.Close();
                 }
             }

             return new JsonResult(table);
         }*/


    }
}
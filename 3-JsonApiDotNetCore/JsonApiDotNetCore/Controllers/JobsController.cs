using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace JsonApiDotNetCore.Controllers
{
    [ApiController]
    //[Route("[controller]/[action]")]
    [Route("[action]")]
    public class JobsController : ControllerBase
    {
        private readonly DbModel model;

        private readonly ILogger<JobsController> _logger;

        public JobsController(ILogger<JobsController> logger)
        {
            _logger = logger;

            var json = System.IO.File.ReadAllText("db.json");
            var jsonModel = JsonSerializer.Deserialize<DbModel>(json);

            model = jsonModel ?? new DbModel();
        }

        [HttpGet(Name = "Jobs")]
        public IEnumerable<Job> Jobs() => model.jobs.ToList();

        [HttpGet(Name = "GetJob")]
        public Job GetJob([FromQuery] int id) => model.jobs.First(x => x.id == id);

        [HttpGet(Name = "degrees")]
        public IEnumerable<Degree> Degrees() => model.degrees.ToList();

        [HttpGet(Name = "GetDegree")]
        public Degree GetDegree([FromQuery] int id) => model.degrees.First(x => x.id == id);

        [HttpGet(Name = "spotlights")]
        public IEnumerable<Spotlight> Spotlights() => model.spotlights.ToList();

        [HttpGet(Name = "GetSpotlight")]
        public Spotlight GetSpotlight([FromQuery] int id) => model.spotlights.First(x => x.id == id);
    }
}
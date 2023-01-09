using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace MauiJobSearchVue.Api
{
    public class ApiClient
    {
        private static readonly HttpClient client = new();

        public ApiClient()
        {
            // Update port # in the following line.
            client.BaseAddress = new Uri("http://localhost:3000/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<IEnumerable<Job>> GetJobsAsync(string path)
        {
            HttpResponseMessage response = await client.GetAsync(path);

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadFromJsonAsync<IEnumerable<Job>>();

            return new List<Job>();
        }

        public async Task<IEnumerable<Degree>> GetDegreesAsync(string path)
        {
            HttpResponseMessage response = await client.GetAsync(path);

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadFromJsonAsync<IEnumerable<Degree>>();

            return new List<Degree>();
        }

        public async Task<IEnumerable<Spotlight>> GetSpotlightsAsync(string path)
        {
            HttpResponseMessage response = await client.GetAsync(path);

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadFromJsonAsync<IEnumerable<Spotlight>>();

            return new List<Spotlight>();
        }
    }
}

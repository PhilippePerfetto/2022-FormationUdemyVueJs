using MauiJobSearchVue.Api;

Console.WriteLine("Hello, World!");

ApiClient client = new();

var jobs = await client.GetJobsAsync("jobs");
Console.WriteLine("Jobs returned = " + jobs.Count());

var degrees = await client.GetDegreesAsync("degrees");
Console.WriteLine("Degrees returned = " + degrees.Count());

var spotlights = await client.GetSpotlightsAsync("spotlights");
Console.WriteLine("spotlights returned = " + spotlights.Count());

namespace JsonApiDotNetCore
{
#pragma warning disable IDE1006 // Styles d'affectation de noms
    public record DbModel(Degree[] degrees, Spotlight[] spotlights, Job[] jobs);

    public record Degree(int id, string degree);

    public record Spotlight(int id, string img, string title, string description);

    public record Job(int id, string title, string organization, string degree, string jobType, string[] locations, string[] minimumQualifications, string[] preferredQualifications, string[] description, string dateAdded);
#pragma warning restore IDE1006 // Styles d'affectation de noms
}

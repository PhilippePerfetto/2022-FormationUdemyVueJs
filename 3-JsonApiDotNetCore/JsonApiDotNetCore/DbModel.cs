
namespace JsonApiDotNetCore
{
#pragma warning disable IDE1006 // Styles d'affectation de noms
#pragma warning disable CS8618 // Un champ non-nullable doit contenir une valeur non-null lors de la fermeture du constructeur. Envisagez de déclarer le champ comme nullable.
    public class DbModel
    {
        public Degree[] degrees { get; set; }
        public Spotlight[] spotlights { get; set; }
        public Job[] jobs { get; set; }
    }

    public class Degree
    {
        public int id { get; set; }
        public string degree { get; set; }
    }

    public class Spotlight
    {
        public int id { get; set; }
        public string img { get; set; }
        public string title { get; set; }
        public string description { get; set; }
    }

    public class Job
    {
        public int id { get; set; }
        public string title { get; set; }
        public string organization { get; set; }
        public string degree { get; set; }
        public string jobType { get; set; }
        public string[] locations { get; set; }
        public string[] minimumQualifications { get; set; }
        public string[] preferredQualifications { get; set; }
        public string[] description { get; set; }
        public string dateAdded { get; set; }
    }
#pragma warning restore CS8618 // Un champ non-nullable doit contenir une valeur non-null lors de la fermeture du constructeur. Envisagez de déclarer le champ comme nullable.
#pragma warning restore IDE1006 // Styles d'affectation de noms
}

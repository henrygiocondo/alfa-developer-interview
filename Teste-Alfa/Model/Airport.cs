public class Airport
{
    public class Rootobject
    {
        public string odatacontext { get; set; }
        public Value[] value { get; set; }
    }

    public class Value
    {
        public string Name { get; set; }
        public string IcaoCode { get; set; }
        public string IataCode { get; set; }
        public Location Location { get; set; }
    }

    public class Location
    {
        public string Address { get; set; }
        public Loc Loc { get; set; }
        public City City { get; set; }
    }

    public class Loc
    {
        public string type { get; set; }
        public float[] coordinates { get; set; }
        public Crs crs { get; set; }
    }

    public class Crs
    {
        public string type { get; set; }
        public Properties properties { get; set; }
    }

    public class Properties
    {
        public string name { get; set; }
    }

    public class City
    {
        public string Name { get; set; }
        public string CountryRegion { get; set; }
        public string Region { get; set; }
    }
}
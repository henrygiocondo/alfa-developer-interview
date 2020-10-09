public class People
{
    public class Rootobject
    {
        public string odatacontext { get; set; }
        public Value[] value { get; set; }
    }

    public class Value
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public object MiddleName { get; set; }
        public string Gender { get; set; }
        public object Age { get; set; }
        public string[] Emails { get; set; }
        public string FavoriteFeature { get; set; }
        public string[] Features { get; set; }
        public Addressinfo[] AddressInfo { get; set; }
        public Homeaddress HomeAddress { get; set; }
        public string odatatype { get; set; }
        public object BossOffice { get; set; }
    }

    public class Homeaddress
    {
        public object Address { get; set; }
        public object City { get; set; }
    }

    public class Addressinfo
    {
        public string Address { get; set; }
        public City City { get; set; }
    }

    public class City
    {
        public string Name { get; set; }
        public string CountryRegion { get; set; }
        public string Region { get; set; }
    }
}
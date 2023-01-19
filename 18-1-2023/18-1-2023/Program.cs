using _18_1_2023;

var p = new Person();
p.Name = "viji";
p.Mark1 = 22;
Console.WriteLine(p.Name);
Console.WriteLine(p.Mark1);


var t = new Teacher();
t.Name = "vini";
t.Age = 22;
t.Birthday = "7-11-2023";
t.City = "Nedumangad";
Console.WriteLine(t.Name);
Console.WriteLine(t.Age);
Console.WriteLine(t.Birthday);
Console.WriteLine(t.City);
//SIMPLE FUNCTION CALL

//void Geet()
//{
//    Console.WriteLine("Hello world");
//}
//Geet();

//PASSING VARIABLE AS PARAMETERS

//void Add(int a,int b)
//{
//    Console.WriteLine(a + b); 
//}
//int x = 2;
//int y = 3;
//Add(x, y);

//RETUN

//int Add(int a,int b)
//{
//    return a + b;
//}
//int result = Add(1, 2);
//Console.WriteLine(result);

//RETURN STRING
//string Add(int a, int b)
//{
//    return (a + b).ToString();
//}
//string result = Add(1, 2);
//Console.WriteLine(result);


//RETURN STRING
//string Add(string a,string b)
//{
//    return a + b;
//}
//string result = Add("vijitha", "p");
//Console.WriteLine(result);

//OPTIONAL PARAMETER

//void ShowData(string name, string email = null)
//{
//    Console.WriteLine(name);
//    Console.WriteLine(email);
//}
//ShowData("jone", "jone@gmail.com");
//ShowData("jone");

//OPTIONAL PARAMETER (default value)
//void ShowData(string name, string email = "vini@gmail.com")
//{
//    Console.WriteLine(name);
//    Console.WriteLine(email);
//}
//ShowData("jone", "jone@gmail.com");
//ShowData("jone");


// OPTIONAL PARAMETERS SHOULD AT THE END
//void ShowData(string name,  string email = "vini@gmail.com", string phone = null)
//{
//    Console.WriteLine(name);
//    Console.WriteLine(email);  
//    Console.WriteLine(phone);

//}
//ShowData("jone", "jone@gmail.com");
//ShowData("jone");
//ShowData(phone: "65675878", name: "vini");


//NAMED PARAMETER

//void ShowData(string name, string email = "vini@gmail.com", string phone = null)
//{
//    Console.WriteLine(name);
//    Console.WriteLine(email);
//    Console.WriteLine(phone);

//}
//ShowData("jone", "jone@gmail.com");
//ShowData("jone");
//ShowData(phone: "65675878", name: "vini");

//PARAMS
//void AddNumber(int x, int y, params int[] value)
//{
//    int sum = x + y;
//    Console.WriteLine(sum);
//}
//AddNumber(1, 2);
//AddNumber(1, 2, 3);
//AddNumber(1, 2, 3, 4);

//ARRAY

//void sum(int x, int y, int[] number)
//{
//    int sum = x + y;
//    foreach(int i in number)
//    {
//        sum+= i;
//    }
//    Console.WriteLine(sum);
//}
//sum(1, 2,new int[] { 3, 4, 5 });

//OOPS
//var s = new student
//{
//    Name = "Vijitha",
//    Mark1 = 50,
//    Mark2 = 40
//};

//Console.WriteLine(s.total());
//class student
//{
//    public string Name;

//    public int Mark1;   

//    public int Mark2;

//    public int total()
//    {   
//        return Mark1 + Mark2;
//    }
//}
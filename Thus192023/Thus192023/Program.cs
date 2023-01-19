//Console.WriteLine("Enter any thing");
//string any = Console.ReadLine();
//int count = 0;
//foreach (var item in any)
//{
//    if (item >= '0' && item <= '9')
//    {
//        count++;
//    }  
//}
//if(count == 0)
//{
//    Console.WriteLine("No numbers founded");
//    Environment.Exit(0);
//}
//var num = new int[count];
//int arrayIndex = 0;
//foreach (var item in any)
//{
//    if (item >= '0' && item <= '9')
//    {
//        num[arrayIndex++] = int.Parse(item.ToString());
//    }
//}
//Console.WriteLine(string.Join(',',num));

//var dt = new DateTime(2000, 11, 07);
//Console.WriteLine(dt.DayOfWeek);

//DateTime date = DateTime.Now;


//DATE|TIME|MINITS DIFFERENTS
//var dt1 = new DateTime(2019, 12, 31, 0, 0, 0);
//var dt2 = new DateTime(2020, 11, 11, 0, 0, 0);

//TimeSpan ts = dt2- dt1;
//Console.WriteLine(ts.TotalDays);
//Console.WriteLine(ts.TotalHours);
//Console.WriteLine(ts.TotalMinutes);
//Console.WriteLine(ts.TotalSeconds);
using Thus192023;

var p = new man();
p.Name = "viji";
p.Email = "viji@gmail.com";
p.DOB = 7- 11-2000;
Console.WriteLine(p.Name);
Console.WriteLine(p.Email);


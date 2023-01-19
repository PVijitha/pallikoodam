//ENDLESS FOR LOOOP
//int i = 0;
//for (; ;)
//{
//    Console.WriteLine(i++); 
//}

//WHILE LOOP
//int i = 0;
//while (i > 5)
//{
//    Console.WriteLine(i++);
//}


//ENDLESS WHILE LOOP
//while (true)
//{
//    Console.WriteLine("Infinite loop");
//}

//NORMAL SWITCH
//string number = "three";
//switch (number)
//{
//    case "ONE":
//    case "one":
//        Console.WriteLine("Number is ONE");
//        break;
//    case "TWO":
//    case "two":
//        Console.WriteLine("Number is TWO");
//        break;
//    case "THREE":
//    case "three":
//        Console.WriteLine("Number is THREE");
//        break;
//    case "FOUR":
//    case "four":
//        Console.WriteLine("Number is FOUR");
//        break;
//    default:
//        Console.WriteLine("Number is another");
//        break;
//}


// SWITCH EXPRESSION 
//int number = 10;
//string result = number switch
//{
//    1 => "Number is 1",
//    2 => "Number is 2",
//    3 => "Number is 3",
//    _ => "Number is not 1, 2, 3"
//};
//Console.WriteLine(result);

// CONTINOUE STATEMENT (PRINT EVEN NUMBERS)
//for(int i = 0; i < 10; i++)
//{
//    if(i % 2 != 0)
//    {
//        continue;
//    }
//    Console.WriteLine(i);
//}


// OBJECT

//object o = "hello";
//Console.WriteLine(o);

//OBJECT ARRAY
//object[] data = { 1, 2, 3.5, true, "four", "hai" };
//foreach(var item in data)
//{
//    Console.WriteLine(item);
//}

// IF WE WANT TO ADD INT VALUES IN THE OBJECT ARRAY

//object[] data = {1 , 2, 3, true, "four", "five"};
//int sum = 0;
//foreach(var item in data)
//{
//    var typeOfItem = item.GetType();
//    if (typeOfItem == typeof(int))
//    {
//        sum += (int)item;
//    }
//}
//Console.WriteLine(sum);


//DAYNAMIC DATATYPE
//dynamic d = "Hello";
//Console.WriteLine(d.ToUpper());

//ANONYMOUS OBJECT

//var obj = new
//{
//    name = "jone Done",
//    email = "jone@gmail.com"

//};
//Console.WriteLine(obj.name);
 
//Console.BackgroundColor = ConsoleColor.White;
//string[] arr = { " ", " ", " ", " ", " ", " " };
//for(int i = 0;i < arr.Length; i++)
//{
//    Console.WriteLine(arr[i]);
//}
//Console.WriteLine("\r");

//for(int i = 0;i < arr.Length; i++)
//{
//    Thread.Sleep(1000);
//    Console.BackgroundColor = ConsoleColor.Green;
//    Console.Write($"{arr[i]}");
//}



string[] arr = { "|", "/", "-", "|", "-", "\\" };
while (true) { 
    for (int i = 0; i < arr.Length; i++)
    {
        Thread.Sleep(100);
        Console.Write($"\r{arr[i]}");
    }
}
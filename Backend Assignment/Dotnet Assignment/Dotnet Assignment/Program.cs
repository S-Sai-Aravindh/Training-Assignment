using Dotnet_Assignment;
using System;
using static Dotnet_Assignment.PhotoBook;

namespace Assignment
{
    internal class Program
    {
        
        private static void Main(string[] args)
        {
            //Console.WriteLine("Photo Book assignment")
            //PhotoBook p = new PhotoBook();
            //p.GetNumberPages();

            //PhotoBook p1 = new PhotoBook(24);
            //p1.GetNumberPages();

            //PhotoBook b = new BigPhotoBook();
            //b.GetNumberPages();


            Console.WriteLine("Inheritance");

            //Inheritance i = new Inheritance();

            ////Console.WriteLine(i.person[0]);
            ////Console.WriteLine(i.person[1]);
            ////Console.WriteLine(i.person[2]);

            //Inheritance.Teacher t = new Inheritance.Teacher(i.person[0]);
            //Inheritance.Student s = new Inheritance.Student(i.person[1]);
            //Inheritance.Student s1 = new Inheritance.Student(i.person[2]);

            Console.Write("Enter the user name : ");
            string name = Console.ReadLine();
            OnlineAttendance o = new OnlineAttendance();
            Banned b = new Banned();

            o.UserBanned += b.OnUserBanned;

            o.getInput(name);


        }
    }
}


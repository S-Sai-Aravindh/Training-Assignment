using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using static Assignment.Program;

namespace Dotnet_Assignment
{
    public delegate void UserEventHandler(string name);
    internal class OnlineAttendance
    {
        public event UserEventHandler UserBanned;

        public void getInput(string name)
        {

            if (name == "Jack" || name == "Steven" || name == "Mathew")
            {
                UserBanned?.Invoke(name);
            }
            else
            {
                Console.WriteLine($"Welcome user :  {name}");
            }
        }
    }


        internal class Banned
        {
            public void OnUserBanned(string name)
            {
                Console.WriteLine($"{name}, you are banned from the organization.");
            }
        }

    
    
}

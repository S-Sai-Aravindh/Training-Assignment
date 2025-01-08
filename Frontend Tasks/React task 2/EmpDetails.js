import React, { Component } from "react";

class EmpDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: [
        { empid: 1, empname: "Sai", emppost: "Developer", empsal: "30000", empcontact: "9876556789", empaddress: "Chennai" },
        { empid: 2, empname: "John", emppost: "Designer", empsal: "25000", empcontact: "9876543210", empaddress: "Mumbai" },
        { empid: 3, empname: "Amit", emppost: "Tester", empsal: "22000", empcontact: "9876541234", empaddress: "Pune" },
        { empid: 4, empname: "Ravi", emppost: "Manager", empsal: "40000", empcontact: "9876554321", empaddress: "Bangalore" },
        { empid: 5, empname: "Anjali", emppost: "HR", empsal: "28000", empcontact: "9876523456", empaddress: "Hyderabad" },
        { empid: 6, empname: "Priya", emppost: "Developer", empsal: "35000", empcontact: "9876535678", empaddress: "Delhi" },
        { empid: 7, empname: "Rahul", emppost: "Support", empsal: "20000", empcontact: "9876545678", empaddress: "Kolkata" },
        { empid: 8, empname: "Sneha", emppost: "Marketing", empsal: "27000", empcontact: "9876567890", empaddress: "Chennai" },
        { empid: 9, empname: "Vikram", emppost: "Sales", empsal: "30000", empcontact: "9876512345", empaddress: "Noida" },
        { empid: 10, empname: "Meena", emppost: "Developer", empsal: "31000", empcontact: "9876561234", empaddress: "Jaipur" },
      ],
    };
  }

  render() {
    const { details } = this.state;

    return (
      <div>
        <h1>Employee Details</h1>
        <table border="1" style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Post</th>
              <th>Salary</th>
              <th>Contact</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {details.map((employee) => (
              <tr key={employee.empid}>
                <td>{employee.empid}</td>
                <td>{employee.empname}</td>
                <td>{employee.emppost}</td>
                <td>&#8377;{employee.empsal}</td>
                <td>{employee.empcontact}</td>
                <td>{employee.empaddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmpDetails;

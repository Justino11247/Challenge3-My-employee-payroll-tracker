// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employees = []; // Indicates that the employees variable will be an array
  let addEmployee = true; 

  while (addEmployee) {
    const firstName = prompt("Enter first name."); // Prompts the user to enter an employees first name
    const lastName = prompt("Enter last name."); // Prompts the user to enter an employees last name
    const salary = prompt("Enter employee salary."); // Prompts the user to enter an employees salary
    addEmployee = confirm("Would you like to add another employee?"); // Confirms if the user would like to enter another employee. if not, add employee = false
    employees.push({ firstName, lastName, salary }); // Pushes the user entered data into the employees array
  }

  return employees; // Stops the execution of this function and returns the values entered by the user
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salarySum = 0; //Sets the variable's value
    for ( let i = 0; i < employeesArray.length; i++) {
      salarySum += parseInt(employeesArray[i].salary);
      //This for loop adds all the salary values input by the user
    }
    const averageSalary = salarySum / employeesArray.length; //Declaring that the average is the salaries' sum devided by the number of salaries in the array
    console.log(averageSalary); //Logs the average salary total into the console
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

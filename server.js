const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'konadu17',
    database: 'employees'
  },
  console.log('Connected to the employees database.')
);

db.connect((error) => {
  if (error) throw error;
  promptUser();
});


// Prompt User for Choices
const promptUser = () => {
  inquirer.prompt([
    {
      name: 'choices',
      type: 'list',
      message: 'Please select an option:',
      choices: [
        'View All Employees',
        'View All Roles',
        'View All Departments',
        'Update Employee Role',
        'Add Employee',
        'Add Role',
        'Add Department',
        'Exit'
      ]
    }
  ])
    .then((answers) => {
      const { choices } = answers;

      if (choices === 'View All Employees') {
        viewAllEmployees();
      }

      if (choices === 'View All Departments') {
        viewAllDepartments();
      }

      if (choices === 'Add Employee') {
        addEmployee();
      }

      if (choices === 'Update Employee Role') {
        updateEmployeeRole();
      }

      if (choices === 'View All Roles') {
        viewAllRoles();
      }

      if (choices === 'Add Role') {
        addRole();
      }

      if (choices === 'Add Department') {
        addDepartment();
      }

      if (choices === 'Exit') {
        db.end();
      }
    });
};

const viewAllEmployees = () => {
  let sql = `SELECT employee.id, 
                  employee.first_name, 
                  employee.last_name, 
                  role.title, 
                  department.department_name AS 'department', 
                  role.salary
                  FROM employee, role, department 
                  WHERE department.id = role.department_id 
                  AND role.id = employee.role_id
                  ORDER BY employee.id ASC`;
  db.promise().query(sql,)
    .then((response) => {
      if (error) throw error;
      console.table(response)
    })
    .catch(console.log(error))
    .then(() => db.end());
  promptUser();
  };

// // View all Roles
// const viewAllRoles = () => {
//   const sql = `SELECT role.id, role.title, department.department_name AS department
//                   FROM role
//                   INNER JOIN department ON role.department_id = department.id`;
//   db.promise().query(sql, (error, response) => {
//     if (error) throw error;
//     response.forEach((role) => { console.log(role.title); });
//     promptUser();
//   });
// };


// // View all Departments
// const viewAllDepartments = () => {
//   const sql = `SELECT department.id AS id, department.department_name AS department FROM department`;
//   db.promise().query(sql, (error, response) => {
//     if (error) throw error;
//     console.table(response);
//     promptUser();
//   });
// };










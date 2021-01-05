const inquirer = require('inquirer');
const express = require('express');
const cTable = require('console.table');
const connection = require('./db/connection');
const util = require('util');

const db = require('./db/viewAll');

  //promisifying the connection for async await
  connection.query = util.promisify(connection.query);


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
  });



  

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'managersOptions',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'update an employees role']
        }
    ]).then(data => {
        switch (data.managerOptions) {
            case "View all departments":
              return viewAllDepartments();
            case "View all roles":
              return viewRoles();
              case "View all employees":
                return viewEmployees();
                case "Add a department":
                  return addDepartment();
                  case "Add a role":
                    return addRole();
                    case "Add an employee":
                      return addEmployee();
                      case "update an employees role":
                        return updateEmployeesRole();
            default:
               break;
          }
        
})
};

async function  viewDepartments() {
  const viewDepts =  await db.viewAllDepartments()
  console.table(viewDepts);
start();
};

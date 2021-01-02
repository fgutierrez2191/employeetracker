const inquirer = require('inquirer');
const express = require('express');

const viewAll = require('./routes/viewAll/viewAll');

function start() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'managersOptions',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'update an employees role']
        }
    ]).then(data => {
        //if statements to call view functions
        if (data.managersOptions === 'View all Departments') {
            viewDepartments();
        } else if (data.managersOptions === 'View all Roles') {
            viewRoles();
        } else if (data.managersOptions === 'View all Employees') {
            viewEmployees();
        }   // ADD FUNCTIONS
        else if (data.managersOptions === 'Add a Department') {
            addDepartment()
        } else if(data.managersOptions === 'Add a Role') {
             addRole();
        } else if (data.managersOptions === 'Add an Employee') {
            addEmployee();
        }    // UPDATE FUNCTIONS 
        else if (data.startOptions === 'Update an Employees Role') {
            updateEmployee();
        }
    });
};

function viewDepartments() {
    const view = new viewAll();
    view.viewAllDepartments();
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'startOver',
            message: 'Would you like to continue?'
        },
    ]).then( data => {
        if (data.startOver) {
            return start()
        } 
    });
}

start();
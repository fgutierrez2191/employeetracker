const inquirer = require('inquirer');

function start() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'firstOptions',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'update an employees role']
        }
    ])
}

start();
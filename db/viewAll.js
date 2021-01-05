const connection = require('./connection');
const cTable = require('console.table');






class db {
    constructor(connection) {
        this.connection = connection;
    } 
    viewAllDepartments() {   
        return this.connection.query(
            'SELECT * FROM department');
    };
}




module.exports = new db(connection);

const cTable = require('console.table');



class viewAll {

    viewAllDepartments() {
        const query = connection.query(
            `SELECT * FROM department`,
            function(err, res) {
                if (err) throw err;
                return console.table(res);
            }
        );
        return query;
    };
}




module.exports = viewAll;

USE employee;

INSERT INTO department (name)
VALUES ("Upper Management");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 30000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwight", "Schrute", 1, 1);
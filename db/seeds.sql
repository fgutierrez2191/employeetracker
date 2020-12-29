INSERT INTO department (id, name)
VALUES
  (1, 'Human Resources'),
  (2, 'Accounting'),
  (3, 'Sales'),
  (4, 'Reception'),
  (5, 'Security'),
  (6, 'Warehouse');


INSERT INTO role (id, role_title, salary, department_id)
VALUES
(1, 'Head of Hr', 31.50, 1),
(2, 'Assistant hr', 21.50, 1),
(3, 'Accounting Manager', 22.50, 2);

INSERT INTO employee (id, first_name, Last_name, manager_id)
VALUES
(1, 'Toby' 'Flenderson'),
(2, 'Holly' 'Flax', 1);
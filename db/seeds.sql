INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Michael', 'Scott', 1, NULL),
  ('Dwight', 'Schrute', 2, 1);
  
INSERT INTO role (title, salary, department_id)
VALUES
    ('Regional Manager', 50.00, 1),
    ('Assistant to The Regional Manager', 25.00, 2);

INSERT INTO department (name)
VALUES
    ('Upper Management');
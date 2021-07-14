INSERT INTO department(department_name)
VALUES
('Engineering'), ('Sales'), ('Finance'), ('Legal'), ('Marketing');

INSERT INTO role(title, salary, department_id)
VALUES
('Engineer', 85000, 1), 
('Software Engineer', 125000, 1), 
('CFO', 350000, 3), 
('Lawyer', 300000, 4),
('Sales Rep', 55000, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('Maame', 'Konadu', 1, 2), 
('Russell', 'Dsani', 1, null), 
('Andy', 'Asan', 1, 2),
('Dorita', 'Dick', 2, 2), 
('Safoa', 'Mart', 4, null);
  
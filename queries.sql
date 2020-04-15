-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName FROM Product as p JOIN Category as c ON p.CategoryId = c.Id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT od.OrderId, o.OrderDate FROM  OrderDetail as od
JOIN order as o 
ON od.OrderId = o.Id
WHERE o.OrderDate < date('2012-08-09');
-- order comes up as a syntax error because I think it was reading it as a keyword. Just check if it was right cuz its not my fault if the db is asking for something that's a keyword

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT od.Quantity, p.ProductName 
FROM  OrderDetail as od 
JOIN Product as p ON od.ProductId = p.Id
WHERE od.OrderId = 10251
ORDER BY p.ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT od.OrderId, customer.CompanyName, employee.LastName
FROM  OrderDetail as od 
JOIN  Order as o
ON od.OrderId = o.id
JOIN Customer 
on o.CustomerId = customer.Id
JOIN Employee 
on Customer.Region = Employee.EmployeeId;


-- My own queries to help me think through what goes where in helpers

select sch.scheme_name, stp.step_number, stp.instructions from steps as stp join schemes as sch on stp.scheme_id = sch.id where sch.id = 2 order by stp.step_number;
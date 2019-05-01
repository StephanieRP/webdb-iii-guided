--Performing multi-table queries using joins.

Select orders.orderId, customers.customerName, customers.city, orders.employeeId, orders.orderDate
From orders
inner join customers on orders.customerID = customers.customerID

--types of join: 
--**Inner join** produces only the set of records that match in both Table A and Table B.	
--Left outer join produces a complete set of records from Table A, with the matching records (where available) in Table B. If there is no match, the right side will contain null. 

select orders.orderId
    , customers.customerName
    , customers.city
    , employees.firstName
    , employees.lastName
    , orders.orderDate 
from orders
inner join customers on orders.customerId = customers.customerId
inner join employees on orders.employeeId = employees.employeeId

--sqlite use || to concatinate columns 
(employees.firstName || '' || employees.lastName) as Employee

select * 
from customers as c  --can change the name to shorten the tables 
inner join orders as c on c.customerID = o.customerID

-- I want to see all customers regardless of whether they have orders or not --196 > 213
-- customers without orders...
select distinct c.customerName
from customers as c
left join orders as o on c.customerId = o.customerId
where o.orderId is null
order by 1

--aggregations, num of items grouped by order, important to group by
SELECT o.orderID, count(od.orderID) as ItemsCount
FROM orders as o
inner join orderdetails as od on o.orderId = od.orderID
group by o.orderId

--revenue total, use round for dec and show only 2 decimals 
SELECT o.orderID, round(sum(od.quantity * p.price),2) as Revenue
FROM orders as o
inner join orderdetails as od on o.orderId = od.orderID
inner join products as p on od.productId = p.productID
group by o.orderId

--offset allows to ignore certain # of records
--pagination
SELECT * from customers 
LIMIT 5 -- per page -take
OFFSET 2 --ignore this many recores --skip
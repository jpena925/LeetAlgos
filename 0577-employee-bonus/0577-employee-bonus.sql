# Write your MySQL query statement below
SELECT e.name, b.bonus
FROM Employee e
LEFT JOIN Bonus b
USING(empId)
Where b.bonus IS NULL OR b.bonus < 1000
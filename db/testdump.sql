CREATE TABLE Students(
       student_id INT PRIMARY KEY AUTO_INCREMENT, 
       student_name VARCHAR(60)
);
INSERT INTO Students(
       student_name) 
VALUES(
       "Data Environment"
);
INSERT INTO Students(
       student_name) 
VALUES(
       "Bill Gates"
);
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;
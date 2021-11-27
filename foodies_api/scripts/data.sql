-- Dummy Data for app logins

INSERT INTO wsufoodies.`users` (email , 'password', firstName, lastName, age, standing)
values ('go4374@wayne.edu', 'password', 'Abdul', 'Mahbub', 81, 'Senior');

INSERT INTO wsufoodies.`users` (email , 'password', firstName, lastName, age, standing)
values ('gz7462@wayne.edu', 'password', 'Nathan', 'Rosenfeld', 72, 'Senior');

INSERT INTO wsufoodies.`users` (email , 'password', firstName, lastName, age, standing)
values ('gt7198@wayne.edu', 'password', 'Nicholas', 'Driver', 34, 'Senior');

INSERT INTO wsufoodies.`users` (email , 'password', firstName, lastName, age, standing)
values ('gm0892@wayne.edu', 'password', 'Christopher', 'George', 45, 'Senior');

/*
CREATE TABLE IF NOT EXISTS wsufoodies.`users` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  'password' varchar(255) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  age int(11),
  standing varchar(255) NOT NULL
) 
*/
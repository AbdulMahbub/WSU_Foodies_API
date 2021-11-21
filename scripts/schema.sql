CREATE DATABASE wsufoodies;
USE wsufoodies;
CREATE TABLE IF NOT EXISTS wsufoodies.`users` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  age int(11),
  standing varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
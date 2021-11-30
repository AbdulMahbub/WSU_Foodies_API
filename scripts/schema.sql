CREATE DATABASE wsufoodies;
USE wsufoodies;

-- Users Table
CREATE TABLE IF NOT EXISTS wsufoodies.`users` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  age int(11),
  standing varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table for our restaurants/businesses
CREATE TABLE IF NOT EXISTS restaurant (
 restaurant_id INT(255) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
 address varchar(255) not null , 
 phonenumber varchar(255) not null ,
 email varchar(255) ,
 restaurant_name varchar(255) not null unique, 
 active int (1) default 1
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table for user reviews that fall under restaurants
CREATE TABLE IF NOT EXISTS reviews(
 stars int(1) not null default 0,
 review text , 
 user_id INT(255) NOT NULL ,
 restaurant_id INT(255) NOT NULL,
 PRIMARY KEY(user_id, restaurant_id), 
 CONSTRAINT FK_REV_USER FOREIGN KEY (user_id) REFERENCES users(id)
  ON DELETE NO ACTION   
 ON UPDATE NO ACTION ,
 CONSTRAINT FK_REV_RES FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id)
 ON DELETE NO ACTION   
 ON UPDATE NO ACTION 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
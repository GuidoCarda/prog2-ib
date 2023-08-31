CREATE DATABASE quimicamente;

CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  user VARCHAR(255),
  password varchar(255)
)

INSERT INTO users (user, password) VALUES ('guido', 'admin')
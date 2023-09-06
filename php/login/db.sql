CREATE DATABASE loginwithphp;

USE loginwithphp;

CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255)
);

INSERT INTO users (username, password) VALUES ('admin', '1234');
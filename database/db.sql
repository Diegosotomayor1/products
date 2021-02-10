CREATE DATABASE productos1; 
use productos1;

CREATE TABLE product(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(11) NOT NULL,
    producto VARCHAR(50) NOT NULL,
    stock VARCHAR(6) NOT NULL,
    compra FLOAT(11) NOT NULL

);

SHOW TABLES;
DESCRIBE product;
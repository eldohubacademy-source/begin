CREATE DATABASE myfarmshop;

USE myfarmshop;

CREATE TABLE Farmers(
    farmerId INT  AUTO_INCREMENT,
    farmer_name VARCHAR(100) NOT NULL,
    yob INT,
    location VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY(farmerId)
);

CREATE TABLE buyers(
    buyer_id INT AUTO_INCREMENT,
    buyer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    PRIMARY KEY(buyer_id)
);

create table products(
    product_id INT auto_increment,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    quantity_in_stock INT,
    farmerId INT,
    PRIMARY KEY(product_id),
    FOREIGN KEY (farmerId) REFERENCES Farmers(farmerId)
);
-- create orders table

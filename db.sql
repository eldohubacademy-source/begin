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
CREATE TABLE orders(
    order_id INT AUTO_INCREMENT,
    buyer_id INT NOT NULL,
    order_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending','paid','shipped','delivered','cancelled') DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    PRIMARY KEY(order_id),
    FOREIGN KEY (buyer_id) REFERENCES buyers(buyer_id)
);

CREATE TABLE order_items(
    order_item_id INT AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(order_item_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

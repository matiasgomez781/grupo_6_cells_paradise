CREATE DATABASE IF NOT EXISTS cellsparadise_db;
USE cellsparadise_db;

CREATE TABLE brands
       (
       id INT NOT NULL AUTO_INCREMENT,
       name VARCHAR(50) NOT NULL,
       PRIMARY KEY
               (
               id
               )
       );



CREATE TABLE roles
       (
       id INT NOT NULL AUTO_INCREMENT,                              
       level TINYINT NOT NULL,                              
       PRIMARY KEY
               (
               id
               )
       );



CREATE TABLE categories
       (
       id INT NOT NULL AUTO_INCREMENT,                
       name VARCHAR(50) NOT NULL,                              
       PRIMARY KEY
               (
               id
               )
       );



CREATE TABLE colors
       (
       id INT NOT NULL AUTO_INCREMENT,               
       name VARCHAR(50) NOT NULL,                              
       PRIMARY KEY
               (
               id
               )
       );



CREATE TABLE postal_codes
       (
       id INT NOT NULL AUTO_INCREMENT,               
       code VARCHAR(50) NOT NULL,                              
       PRIMARY KEY
               (
               id
               )
       );



CREATE TABLE payment_methods
       (
       id INT NOT NULL AUTO_INCREMENT,               
       name VARCHAR(50) NOT NULL,                              
       PRIMARY KEY
               (
               id
               )
       );



CREATE TABLE products
       (
       id INT NOT NULL AUTO_INCREMENT,               
       id_category INT NOT NULL,                              
       id_brand INT NOT NULL,                              
       name VARCHAR(50) NOT NULL,                              
       description TEXT NOT NULL,                              
       price DECIMAL(10,2) NOT NULL,                              
       discount INT NOT NULL,                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_category
               )
          REFERENCES categories
               (
               id
               ),
       FOREIGN KEY
               (
               id_brand
               )
          REFERENCES brands
               (
               id
               )
       );



CREATE TABLE images
       (
       id INT NOT NULL AUTO_INCREMENT,               
       id_product INT NOT NULL,                              
       url VARCHAR(250) NOT NULL,                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_product
               )
          REFERENCES products
               (
               id
               )
       );



CREATE TABLE users
       (
       id INT NOT NULL AUTO_INCREMENT,               
       id_rol INT NOT NULL,                              
       first_name VARCHAR(50) NOT NULL,                              
       last_name VARCHAR(50) NOT NULL,                              
       email VARCHAR(100) NOT NULL UNIQUE,
       password VARCHAR(200) NOT NULL,
       phone VARCHAR(25) NOT NULL,                              
       avatar TEXT NOT NULL,                              
       birth_date DATE NOT NULL,                              
       dni VARCHAR(25),                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_rol
               )
          REFERENCES roles
               (
               id
               )
       );



CREATE TABLE addresses
       (
       id INT NOT NULL AUTO_INCREMENT,               
       id_postal_code INT NOT NULL,                              
       direction VARCHAR(250) NULL,                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_postal_code
               )
          REFERENCES postal_codes
               (
               id
               )
       );



CREATE TABLE carts
       (
       id INT NOT NULL AUTO_INCREMENT,               
       id_user INT NOT NULL,                              
       quantity INT NOT NULL,                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_user
               )
          REFERENCES users
               (
               id
               )
       );



CREATE TABLE sales
       (
       id INT NOT NULL AUTO_INCREMENT,               
       id_payment INT NOT NULL,                              
       date DATETIME NOT NULL,                              
       total_amount DECIMAL(10,2) NOT NULL,                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_payment
               )
          REFERENCES payment_methods
               (
               id
               )
       );



CREATE TABLE stocks
       (
       id INT NOT NULL AUTO_INCREMENT,               
       id_product INT NOT NULL,                              
       units INT NULL,                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_product
               )
          REFERENCES products
               (
               id
               )
       );



CREATE TABLE purchases
       (
       id INT NOT NULL AUTO_INCREMENT,        
       id_user INT NOT NULL,                              
       final_price BIGINT NOT NULL,                              
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_user
               )
          REFERENCES users
               (
               id
               )
       );



CREATE TABLE product_color
       (
       id INT NOT NULL AUTO_INCREMENT,
       id_color INT NOT NULL,                              
       id_product INT NOT NULL,
       createdAt DATETIME DEFAULT NOW(),
       updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_color
               )
          REFERENCES colors
               (
               id
               ),
       FOREIGN KEY
               (
               id_product
               )
          REFERENCES products
               (
               id
               )
       );



CREATE TABLE user_address
       (
       id INT NOT NULL AUTO_INCREMENT,
       id_address INT NOT NULL,                              
       id_user INT NOT NULL,
       createdAt DATETIME DEFAULT NOW(),
       updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_address
               )
          REFERENCES addresses
               (
               id
               ),
       FOREIGN KEY
               (
               id_user
               )
          REFERENCES users
               (
               id
               )
       );



CREATE TABLE product_sale
       (
       id INT NOT NULL AUTO_INCREMENT,
       id_sale INT NOT NULL,                              
       id_product INT NOT NULL,
       createdAt DATETIME DEFAULT NOW(),
       updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_sale
               )
          REFERENCES sales
               (
               id
               ),
       FOREIGN KEY
               (
               id_product
               )
          REFERENCES products
               (
               id
               )
       );



CREATE TABLE product_cart
       (
       id INT NOT NULL AUTO_INCREMENT,
       id_cart INT NOT NULL,                              
       id_product INT NOT NULL,
       createdAt DATETIME DEFAULT NOW(),
       updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_cart
               )
          REFERENCES carts
               (
               id
               ),
       FOREIGN KEY
               (
               id_product
               )
          REFERENCES products
               (
               id
               )
       );



CREATE TABLE product_purchase
       (
       id INT NOT NULL AUTO_INCREMENT,
       id_purchase INT NOT NULL,                              
       id_product INT NOT NULL,
       createdAt DATETIME DEFAULT NOW(),
       updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
       PRIMARY KEY
               (
               id
               ),
       FOREIGN KEY
               (
               id_purchase
               )
          REFERENCES purchases
               (
               id
               ),
       FOREIGN KEY
               (
               id_product
               )
          REFERENCES products
               (
               id
               )
       );
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
       dni VARCHAR(25) NOT NULL,                              
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
       
/* DATOS DE PRUEBA */

DESCRIBE products;

INSERT INTO categories
(name)
VALUES("celular");

INSERT INTO categories
(name)
VALUES("accesorio");

SELECT * FROM categories;

INSERT INTO brands
(name)
VALUES("Motorola");

INSERT INTO brands
(name)
VALUES("Samsung");

INSERT INTO brands
(name)
VALUES("Apple");

SELECT * FROM brands;

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 1, "MOTOROLA E22", "Celular moderno", 94445.00, 10);

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 2, "SAMSUNG S21", "Celular moderno", 360000.00, 5);

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 1, "MOTO EDGE 30 NEO", "Celular moderno", 222000.00, 30);

SELECT * FROM categories
WHERE id = 1;

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 2, "CARGADOR SAMSUNG", "Reloj inteligente", 11000.00, 0);

UPDATE products
SET description = "Cargador con carga rápida"
WHERE id = 4;

SELECT * FROM products;

INSERT INTO images
(id_product, url)
VALUES(1, "Motorola E22.png");

INSERT INTO images
(id_product, url)
VALUES(1, "SAMSUNG S21.png");

INSERT INTO images
(id_product, url)
VALUES(3, "MOTO EDGE 30 NEO.png");

INSERT INTO images
(id_product, url)
VALUES(4, "Reloj inteligente.png");

UPDATE images
SET url = "CARGADOR SAMSUNG.png"
WHERE id = 4;

SELECT * FROM images;

UPDATE images
SET id_product = 2
WHERE id = 2;

INSERT INTO colors
(name)
VALUES("Negro");

INSERT INTO colors
(name)
VALUES("Blanco");

INSERT INTO colors
(name)
VALUES("Gris");

SELECT * FROM colors;

INSERT INTO product_color
(id_product, id_color)
VALUES(3, 1);

INSERT INTO product_color
(id_product, id_color)
VALUES(2, 2);

INSERT INTO product_color
(id_product, id_color)
VALUES(4, 2);

INSERT INTO product_color
(id_product, id_color)
VALUES(1, 3);

SELECT * FROM product_color;

/*Datos de prueba para usuarios*/

INSERT into roles VALUES (1, 0);
INSERT into roles VALUES (2, 1);
select * from roles;

INSERT INTO users (id_rol, first_name, last_name, email, password, phone, avatar, birth_date, dni)
VALUES
    (1, 'Admin', 'CellsParadise', 'admin@cellsparadise.com', '$2a$10$hqGZU/qKno/sIpWRDDkD6O.f7n8XJaqgUzIr8C0Xjj4an75cGHyLe', '3855800721', 'logo_cellsparadise.png', '1990-05-15', '12345678A'),
    (2, 'Invitado', 'CellsParadise', 'invitado@cellsparadise.com', '$2a$10$hqGZU/qKno/sIpWRDDkD6O.f7n8XJaqgUzIr8C0Xjj4an75cGHyLe', '3856970155', 'logo_cellsparadise.png', '1992-08-20', '87654321B');

select * from users;


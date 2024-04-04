USE cellsparadise_db;

/* DATOS DE PRUEBA DE PRODUCTOS */

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
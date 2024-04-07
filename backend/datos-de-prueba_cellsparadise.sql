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
VALUES(1, 1, "MOTOROLA E22", "
Motorola Moto E22
El Motorola Moto E22 es la propuesta más económica de Motorola. Se trata de un smartphone Android con pantalla IPS de 6.5 pulgadas a resolución HD+ y tasa de refresco de 90Hz. Por dentro, encontramos un procesador MediaTek Helio G37 acompañado de 4GB de RAM y 64GB de almacenamiento interno expandible. Una cámara dual de 16MP + 2MP se ubica en su posterior, mientras que la cámara selfie al frente es de 5MP. Alimentado por una batería de 4020 mAh, el Moto e22 completa sus características con parlantes stereo, lector de huellas lateral, diseño repelente al agua y Android 12.", 94445.00, 10);

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 2, "SAMSUNG S21", "El Samsung Galaxy S21 marca la llegada de la nueva generación de flagships de Samsung para el 2021. El Galaxy S21 cuenta con una pantalla Dynamic AMOLED de 6.2 pulgadas a resolución Full HD+, con tasa de refresco de 120 Hz y protegida por Gorilla Glass Victus. Por dentro, encontramos un procesador Exynos 2100 - en su versión internacional - o Snapdragon 888 para la versión USA, China y Corea. En ambos casos, la memoria RAM es de 8GB con 128GB o 256GB de almacenamiento interno pero sin posibilidad de expansión. En el posterior del Galaxy S21 observamos una cámara triple con lente wide de 12MP, lente telefoto de 64MP y lente ultrawide de 12MP y al frente la cámara es de 10MP, capaz de capturar video 4K. El resto de las características del Galaxy S21 incluyen parlantes stereo con sonido de alta fidelidad de AKG, batería de 4000 mAh de carga rápida, soportando también carga inalámbrica y reversible, lector de huellas integrado en la pantalla, resistencia al polvo y agua y corre Android 11 con la interfaz One UI.", 360000.00, 5);

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 1, "MOTO EDGE 30 NEO", "El Motorola Edge 30 Neo es un smartphone Android con una pantalla P-OLED de 6.28 pulgadas a resolución FHD+ y tasa de refresco de 120Hz. Potenciando por un procesador Snapdragon 695, el Edge 30 Neo cuenta con 6GB o 8GB de RAM con hasta 256GB de almacenamiento interno no expandible. La cámara trasera es dual, con un sensor principal de 64MP con OIS y una cámara ultrawide de 13MP y su cámara selfie es de 32MP. Una batería de 4020 mAh de carga rápida alimenta al Motorola Edge 30 Neo, que completa sus características con un lector de huellas debajo de la pantalla, parlantes stereo, resistencia al salpicaduras y corre Android 12.", 222000.00, 30);

SELECT * FROM categories
WHERE id = 1;

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 2, "CARGADOR SAMSUNG", "Reloj inteligente", 11000.00, 0);

UPDATE products
SET description = "El Samsung Cargador de Pared Fast USB C proporciona una carga rápida para los dispositivos compatibles. Usá el cargador de pared con un cable de carga oficial Samsung de tipo C a tipo C para obtener resultados óptimos.

De hecho, con este cargador vas a poder utilizar todos tus dispositivos tecnológicos como nunca antes."
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
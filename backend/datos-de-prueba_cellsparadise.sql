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

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 3, 'Apple iPhone 15 Pro Max', 'El Apple iPhone 15 Pro Max regresa con un mismo diseño pero con chasis de titanio que le otorga mayor resistencia y menor peso. El iPhone 15 Pro Max tiene una pantalla OLED de 6.7 pulgadas con tasa de refresco de 120Hz y está impulsado por un procesador Apple A17 Pro de seis núcleos. La cámara trasera del iPhone 15 Pro Max está liderada por un sensor de 48MP sumando una cámara ultrawide de 12MP y una cámara telefoto periscópica de 12MP con zoom óptico 5x. El iPhone 15 Pro Max reemplaza el puerto Lightning por un puerto USB-C, tiene parlantes estéreo, Face ID, carga inalámbrica, resistencia al polvo y agua y corre iOS 17.', 1500000.00, 40);

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 3, 'Apple AirPods 3', 'Si hablamos de auriculares, los AirPods son otra historia. Se activan y se conectan solos a tu iPhone, Apple Watch, iPad o Mac en cuanto los sacas del estuche. El audio comienza a sonar cuando te los pones y se detiene cuando te los quitas. Y puedes activar Siri con dos toques para ajustar el volumen, cambiar de canción, obtener indicaciones o hacer una llamada.', 120000.00, 10);

INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 3, 'Apple USB-Power Adapter 20W', 'Adaptador original Apple para iPhone 8 en adelante con carga rápida, no incluye cable USB.', 40000.00, 10);


-- Apple Watch Series 8
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 3, 'Apple Watch Series 8', 'El Apple Watch Series 8 es la última generación de smartwatches de Apple, con nuevas funciones y un diseño mejorado.', 145000.00, 0));

-- iPhone 11 PRO
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 3, 'iPhone 11 PRO', 'El iPhone 11 PRO es un smartphone de gama alta con un potente rendimiento y una excelente calidad de cámara.', 750000.00, 15));

-- Samsung A54
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 2, 'Samsung A54', 'El Samsung A54 es un smartphone de gama media con un diseño elegante y características sólidas.', 425000.00, 25));

-- Samsung Galaxy S23 Ultra 5G
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 2, 'Samsung Galaxy S23 Ultra 5G', 'El Samsung Galaxy S23 Ultra 5G es un smartphone de alta gama con tecnología 5G y características avanzadas.', 1320000.00, 20));

-- Samsung Galaxy S24 Plus 5G 256GB
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 2, 'Samsung Galaxy S24 Plus 5G 256GB', 'El Samsung Galaxy S24 Plus 5G 256GB es un smartphone premium con amplio almacenamiento y conectividad 5G.', 1635000.00, 30));

-- Samsung Galaxy Z Flip5 512GB
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 2, 'Samsung Galaxy Z Flip5 512GB', 'El Samsung Galaxy Z Flip5 512GB es un smartphone plegable con gran capacidad de almacenamiento.', 2350000.00, 45));

-- Motorola Edge 40 Pro 256GB
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(1, 1, 'Motorola Edge 40 Pro 256GB', 'El Motorola Edge 40 Pro 256GB es un smartphone de alta gama con un potente rendimiento y amplio almacenamiento.', 830000.00, 10));

-- Funda Spigen Liquid Crystal Samsung Galaxy Note 8
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 2, 'Funda Spigen Liquid Crystal Samsung Galaxy Note 8', 'La funda Spigen Liquid Crystal proporciona protección y estilo para tu Samsung Galaxy Note 8.', 25000.00, 5));

-- Funda Spigen Ultra Hybrid iPhone 11 Pro Max
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 3, 'Funda Spigen Ultra Hybrid iPhone 11 Pro Max', 'La funda Spigen Ultra Hybrid ofrece protección duradera y transparencia para tu iPhone 11 Pro Max.', 18000.00, 5));

-- Funda Spigen Tough Armor Apple iPhone 7
INSERT INTO products
(id_category, id_brand, name, description, price, discount)
VALUES(2, 3, 'Funda Spigen Tough Armor Apple iPhone 7', 'La funda Spigen Tough Armor proporciona una protección extrema para tu iPhone 7 con un diseño resistente.', 12000.00, 0));



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

INSERT INTO images
(id_product, url)
VALUES(5, "Apple-iPhone-15-Pro-Max-1TB.jpg");

INSERT INTO images
(id_product, url)
VALUES(6, "Apple-AirPods-3-Generacion.jpg");

INSERT INTO images
(id_product, url)
VALUES(7, "Apple-USB-Power-Adapter-20W.jpg");

INSERT INTO images
(id_product, url)
VALUES(8, "Apple Watch Series 8.png");

INSERT INTO images
(id_product, url)
VALUES(9, "iPhone 11 PRO.png");

INSERT INTO images
(id_product, url)
VALUES(10, "Samsung A54.png");

INSERT INTO images
(id_product, url)
VALUES(11, "Samsung A54.png");

INSERT INTO images
(id_product, url)
VALUES(12, "Samsung-Galaxy-S23-Ultra-5G-512GB-12GB.png");

INSERT INTO images
(id_product, url)
VALUES(13, "Samsung-Galaxy-S24-Plus-5G-256GB.png");

INSERT INTO images
(id_product, url)
VALUES(14, "Samsung-Galaxy-Z-Flip5-512GB.png");

INSERT INTO images
(id_product, url)
VALUES(15, "motorola-edge-40-pro-256gb.png");

INSERT INTO images
(id_product, url)
VALUES(16, "funda-spigen-liquid-crystal-samsung-galaxy-note-8.png");

INSERT INTO images
(id_product, url)
VALUES(17, "Funda-Spigen-Ultra-Hybrid-iPhone-11-Pro-Max.png");

INSERT INTO images
(id_product, url)
VALUES(18, "Funda-Spigen-Tough-Armor-Apple-iPhone-7.png");




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
    (2, 'Invitado', 'CellsParadise', 'invitado@cellsparadise.com', '$2a$10$hqGZU/qKno/sIpWRDDkD6O.f7n8XJaqgUzIr8C0Xjj4an75cGHyLe', '3856970155', 'logo_cellsparadise.png', '1992-08-20', '87654321B'),
    (1, 'Matias', 'Gomez', 'matiasgomez@cellsparasdise.com', '$2a$10$wSNMZyfPsM2cXN.pH.VdWON5k4kpjX6RMBlX/8/vTe7BZoJsd9j02', '3855017345', '1712694251662_img_.png', '1992-03-31', '87654321B');

select * from users;
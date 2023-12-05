let nextProductId = 1;
const product = {
    products: [
        {
            id: nextProductId++,
            nombre: 'Smartphone X',
            precio: 599.99,
            descripcion: 'Un teléfono inteligente avanzado con una pantalla de alta resolución y cámara de última generación.',
            imageUrl: 'https://ejemplo.com/smartphone-x.jpg',
            categoria: 'Electrónicos'
          },
          {
            id: nextProductId++,
            nombre: 'Zapatos Deportivos Elite',
            precio: 89.99,
            descripcion: 'Zapatos diseñados para brindar comodidad y rendimiento óptimo durante la actividad física.',
            imageUrl: 'https://ejemplo.com/zapatos-deportivos.jpg',
            categoria: 'Ropa'
          },
          {
            id: nextProductId++,
            nombre: 'Robot Aspiradora Pro',
            precio: 199.99,
            descripcion: 'Un robot inteligente que limpia automáticamente tu hogar, alcanzando incluso los rincones más difíciles.',
            imageUrl: 'https://ejemplo.com/robot-aspiradora.jpg',
            categoria: 'Hogar'
          },
          {
            id: nextProductId++,
            nombre: 'Auriculares Inalámbricos Supreme',
            precio: 129.99,
            descripcion: 'Experimenta la mejor calidad de sonido sin cables. Auriculares cómodos con cancelación de ruido.',
            imageUrl: 'https://ejemplo.com/auriculares-inalambricos.jpg',
            categoria: 'Electrónicos'
          },
          {
            id: nextProductId++,
            nombre: 'Cámara Digital 4K Pro',
            precio: 499.99,
            descripcion: 'Captura momentos inolvidables con esta cámara de alta resolución. Ideal para fotógrafos y videógrafos profesionales.',
            imageUrl: 'https://ejemplo.com/camara-4k.jpg',
            categoria: 'Electrónicos'
          },
          {
            id: nextProductId++,
            nombre: 'Mesa de Centro Elegante',
            precio: 149.99,
            descripcion: 'Una mesa de centro moderna y elegante que complementará perfectamente tu sala de estar.',
            imageUrl: 'https://ejemplo.com/mesa-centro.jpg',
            categoria: 'Hogar'
          },
          {
            id: nextProductId++,
            nombre: 'Mochila Viajera Explorer',
            precio: 79.99,
            descripcion: 'Una mochila resistente y espaciosa diseñada para los aventureros. ¡Prepárate para tu próximo viaje!',
            imageUrl: 'https://ejemplo.com/mochila-explorer.jpg',
            categoria: 'Ropa'
          },
          {
            id: nextProductId++,
            nombre: 'Set de Utensilios de Cocina Premium',
            precio: 129.99,
            descripcion: 'Un conjunto completo de utensilios de cocina de alta calidad para mejorar tu experiencia culinaria.',
            imageUrl: 'https://ejemplo.com/utensilios-cocina.jpg',
            categoria: 'Hogar'
          },
          {
            id: nextProductId++,
            nombre: 'Reloj Inteligente Tech Master',
            precio: 179.99,
            descripcion: 'Un reloj inteligente con funciones avanzadas, monitor de salud y diseño elegante.',
            imageUrl: 'https://ejemplo.com/reloj-inteligente.jpg',
            categoria: 'Electrónicos'
          },
          {
            id: nextProductId++,
            nombre: 'Bufanda de Invierno Acogedora',
            precio: 29.99,
            descripcion: 'Mantente abrigado con esta bufanda suave y acogedora, perfecta para los días fríos de invierno.',
            imageUrl: 'https://ejemplo.com/bufanda-invierno.jpg',
            categoria: 'Ropa'
          },
          {
            id: nextProductId++,
            nombre: 'Silla Ergonómica para Oficina',
            precio: 199.99,
            descripcion: 'Una silla diseñada para brindar comodidad y apoyo durante largas horas de trabajo en la oficina o en casa.',
            imageUrl: 'https://ejemplo.com/silla-ergonomica.jpg',
            categoria: 'Hogar'
          },
          {
            id: nextProductId++,
            nombre: 'Bolso de Cuero Elegante',
            precio: 149.99,
            descripcion: 'Un bolso de cuero de alta calidad que combina estilo y funcionalidad. Ideal para cualquier ocasión.',
            imageUrl: 'https://ejemplo.com/bolso-cuero.jpg',
            categoria: 'Ropa'
          }
        ],

        getAllProducts: function () {
          return this.products;
        },
        getProductById: function (productId) {
          return this.products.find(product => product.id == productId);
        }
}

module.exports = product;
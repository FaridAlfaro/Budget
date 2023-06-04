export const ProductService = {
    getProductsData() {
        return [
              {
                id: 7,
                code: "bib36pfvm",
                name: "Spider-Man Miles Morales",
                description: "Spider-Man Miles Morales es un emocionante videojuego de acción y aventura protagonizado por el joven superhéroe Miles Morales. En este juego, acompañarás a Miles en su lucha contra el crimen en la ciudad de Nueva York, utilizando sus habilidades arácnidas para enfrentar desafíos y enfrentarse a enemigos peligrosos. ¡Sumérgete en la piel de Spider-Man y vive una emocionante historia llena de acción y momentos épicos!",
                image: "https://i.ibb.co/5xXNgvq/spiderman.jpg",
                price: 32,
                category: "Videojuegos",
                stock: 5,
                inventoryStatus: "LOWSTOCK",
                rating: 3,
                year: 2020,
                resolution: "4K",
                dimensions: "13.5 x 1.4 x 17.1 cm"
              },
              {
                id: 8,
                code: "cam58qrs",
                name: "Nikon D3500",
                description: "La cámara DSLR Nikon D3500 es perfecta para los amantes de la fotografía. Con su sensor de imagen de alta resolución y su capacidad para capturar detalles nítidos y colores vibrantes, te permitirá tomar fotos impresionantes en cualquier situación. Además, su diseño compacto y ligero la hace ideal para llevar contigo a todas partes. Descubre el mundo de la fotografía con la Nikon D3500 y captura momentos inolvidables.",
                image: "https://via.placeholder.com/300",
                price: 699,
                category: "Cámaras",
                stock: 10,
                inventoryStatus: "INSTOCK",
                rating: 4,
                year: 2018,
                resolution: "24.2 MP",
                dimensions: "12.4 x 7 x 9.7 cm"
              },
              {
                id: 9,
                code: "dro39klm",
                name: "DJI Mavic Air 2",
                description: "El DJI Mavic Air 2 es un dron de última generación que te permitirá capturar imágenes y videos increíbles desde el cielo. Con su cámara de alta resolución y su estabilización avanzada, podrás obtener tomas profesionales con facilidad. Además, su diseño compacto y plegable lo hace fácil de transportar y utilizar en cualquier lugar. Explora el mundo desde una nueva perspectiva con el DJI Mavic Air 2 y disfruta de la experiencia de volar.",
                image: "https://via.placeholder.com/300",
                price: 999,
                category: "Drones",
                stock: 2,
                inventoryStatus: "LOWSTOCK",
                rating: 4.5,
                year: 2020,
                resolution: "48 MP",
                dimensions: "18 x 9.7 x 8.4 cm"
              },
              {
                id: 10,
                code: "cel72xyz",
                name: "iPhone 13 Pro",
                description: "El iPhone 13 Pro es el último modelo de la icónica línea de smartphones de Apple. Con su potente procesador, su impresionante pantalla Super Retina XDR y su sistema de cámaras avanzado, te brindará una experiencia tecnológica de primer nivel. Además, su diseño elegante y su variedad de funciones innovadoras lo convierten en el compañero perfecto para el día a día. Descubre el poder y la elegancia del iPhone 13 Pro y lleva tu vida digital al siguiente nivel.",
                image: "https://via.placeholder.com/300",
                price: 1299,
                category: "Celulares",
                stock: 8,
                inventoryStatus: "INSTOCK",
                rating: 5,
                year: 2021,
                memory: "128GB",
                ram: "6GB",
                resolution: "2532 x 1170",
                dimensions: "14.7 x 7.1 x 0.7 cm"
              },
              {
                id: 11,
                code: 'cam75stu',
                name: 'Sony A7 III',
                description: 'La cámara Sony A7 III es una cámara de alta calidad con un rendimiento excepcional. Con su sensor de imagen de alta resolución, puedes capturar fotos y videos impresionantes con detalles nítidos y colores vibrantes. Es una cámara versátil que se adapta a diferentes situaciones fotográficas y ofrece una gran calidad de imagen. Descubre el mundo de la fotografía con la Sony A7 III y obtén resultados profesionales.',
                image: 'https://via.placeholder.com/300',
                price: 1499,
                category: 'Cámaras',
                stock: 7,
                inventoryStatus: 'INSTOCK',
                rating: 4.8,
                year: 2018,
                resolution: '24.2 MP',
                dimensions: '12.4 x 7 x 9.7 cm'
              },
              {
                id: 12,
                code: 'dro48vwx',
                name: 'DJI Phantom 4 Pro V2.0',
                description: 'El DJI Phantom 4 Pro V2.0 es un dron de alta gama con características avanzadas. Con su cámara de alta resolución y su sistema de estabilización, te permite capturar imágenes y videos de alta calidad desde el aire. Su diseño robusto y su tecnología de vuelo inteligente lo hacen ideal para fotógrafos y videógrafos profesionales. Descubre el mundo desde una perspectiva única con el DJI Phantom 4 Pro V2.0.',
                image: 'https://via.placeholder.com/300',
                price: 1799,
                category: 'Drones',
                stock: 3,
                inventoryStatus: 'LOWSTOCK',
                rating: 4.7,
                year: 2019,
                resolution: '20 MP',
                dimensions: '28.9 x 28.9 x 18.3 cm'
              },
              {
                id: 13,
                code: 'cel99abc',
                name: 'Samsung Galaxy S21U',
                description: 'El Samsung Galaxy S21 Ultra es un teléfono inteligente de alta gama con características excepcionales. Con su potente procesador y su pantalla de alta resolución, ofrece un rendimiento sobresaliente y una experiencia visual impresionante. Su sistema de cámaras de alta calidad te permite capturar fotos y videos asombrosos. Descubre el poder y la innovación del Samsung Galaxy S21 Ultra y lleva tu experiencia móvil al siguiente nivel.',
                image: 'https://via.placeholder.com/300',
                price: 1199,
                category: 'Celulares',
                stock: 6,
                inventoryStatus: 'INSTOCK',
                rating: 4.9,
                year: 2021,
                memory: '256GB',
                ram: '12GB',
                resolution: '3200 x 1440',
                dimensions: '16.5 x 7.6 x 0.8 cm'
              }
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};


const app = new Vue({
    el: '#app',
    data: {
        plants: [
            {
                id: 1,
                name: 'Light',
                description: 'Succulents love bright, indirect sunlight. Place them near a sunny window where they can receive at least 6 hours of sunlight per day. If you are growing them indoors, rotate the pot occasionally to ensure all sides of the plant receive adequate light.',
                image: 'assets/img/light.jpg'
            },
            {
                id: 2,
                name: 'Watering',
                description: 'Allow the soil to dry out completely between waterings. Depending on the climate and time of year. Always water the soil directly, avoiding getting water on the leaves as this can lead to rot. Reduce watering during the winter months when growth slows down.',
                image: 'assets/img/watering.jpg'
            },
            {
                id: 3,
                name: 'Soil',
                description: 'Allow the soil to dry out completely between waterings. Depending on the climate and time of year. Always water the soil directly, avoiding getting water on the leaves as this can lead to rot. Reduce watering during the winter months when growth slows down.',
                image: 'assets/img/soil.jpg'
            },
            {
                id: 4,
                name: 'Container',
                description: 'Succulents require well-draining soil to prevent water from pooling around the roots, which can cause rot. You can purchase a commercial succulent or cactus mix, or create your own by adding perlite or coarse sand to regular potting soil to improve drainage.',
                image: 'assets/img/container.jpg'
            }
        ],
        isNavbarActive: false
    },
});

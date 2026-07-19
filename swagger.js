const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Cake Shop API",
        description: "API for managing cakes and orders",
        version: "1.0.0"
    },
    host: "cake-shop-api-rzun.onrender.com",
    schemes: ["https"],
    basePath: "/",
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            name: "Cakes",
            description: "Cake management endpoints"
        },
        {
            name: "Orders",
            description: "Order management endpoints"
        }
    ],
    definitions: {
        Cake: {
            cakeName: "Chocolate Fudge",
            category: "Birthday",
            flavor: "Chocolate",
            size: "2kg",
            price: 85000,
            available: true,
            stock: 12
        },
        Order: {
            customerName: "Jesse Tusiime",
            phoneNumber: "0772123456",
            cakeName: "Chocolate Fudge",
            quantity: 2,
            totalPrice: 170000,
            pickupDate: "2026-07-20",
            status: "Pending"
        }
    }
};

const outputFile = "./swagger.json";
const endpointsFiles = [
    "./routes/cakes.js",
    "./routes/orders.js"
];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Swagger documentation generated successfully!");
});
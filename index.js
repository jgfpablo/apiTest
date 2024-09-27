const express = require("express");
const cors = require("cors"); // Importar CORS
const app = express(); // Crear una instancia de Express
const port = process.env.PORT || 8080; // Asignar el puerto

// Habilitar CORS para todas las solicitudes
app.use(cors());

allProducts = [
    {
        id: 1,
        nombre: "pikachu",
        peso: 12.05,
        tiempo: 66,
        descripcion:
            "Un Pokémon de tipo eléctrico conocido por sus ataques de rayos.",
        colores: ["rojo", "verde", "azul"],
        oferta: "si",
        precio: 200,
    },
    {
        id: 2,
        nombre: "bulbasaur",
        peso: 40,
        tiempo: 10,
        descripcion: "Un Pokémon planta/veneno con una semilla en su espalda.",
        colores: ["rojo", "verde", "azul"],
        oferta: "no",
        precio: 0,
    },
    {
        id: 3,
        nombre: "charmander",
        peso: 8.5,
        tiempo: 55,
        descripcion:
            "Un Pokémon de tipo fuego con una llama en la punta de su cola.",
        colores: ["naranja", "rojo", "amarillo"],
        oferta: "no",
        precio: 150,
    },
    {
        id: 4,
        nombre: "squirtle",
        peso: 9.0,
        tiempo: 50,
        descripcion:
            "Un Pokémon de tipo agua con un caparazón que lo protege de los ataques.",
        colores: ["azul", "marrón", "blanco"],
        oferta: "si",
        precio: 180,
    },
    {
        id: 5,
        nombre: "jigglypuff",
        peso: 5.5,
        tiempo: 45,
        descripcion:
            "Un Pokémon de tipo normal conocido por su habilidad de cantar y poner a dormir a los demás.",
        colores: ["rosa", "blanco", "negro"],
        oferta: "si",
        precio: 130,
    },
    {
        id: 6,
        nombre: "meowth",
        peso: 4.2,
        tiempo: 40,
        descripcion:
            "Un Pokémon de tipo normal con habilidades para robar y recolectar monedas.",
        colores: ["beige", "negro", "marrón"],
        oferta: "no",
        precio: 120,
    },
    {
        id: 7,
        nombre: "psyduck",
        peso: 19.6,
        tiempo: 60,
        descripcion:
            "Un Pokémon de tipo agua que sufre de dolores de cabeza, lo que le permite usar poderes psíquicos.",
        colores: ["amarillo", "blanco", "negro"],
        oferta: "si",
        precio: 160,
    },
];

// Ruta para obtener productos sin paginación
app.get("/products", (req, res) => {
    // Obtener los parámetros de consulta (start y limit) de la URL
    const start = parseInt(req.query.start) || 0; // Índice inicial (default 0)
    const limit = parseInt(req.query.limit) || allProducts.length; // Límite de productos (default a todos)

    // Obtener una porción de los productos según los parámetros
    const paginatedProducts = allProducts.slice(start, start + limit);

    res.json({
        message: "Productos paginados",
        status: "success",
        total: allProducts.length, // Número total de productos
        data: paginatedProducts, // Productos paginados
    });
});

//------------------------------------------------
app.get("/", (req, res) => {
    res.json({
        message: "Simplemente Cosas",
        status: "success",
        data: {
            consumoKw: 360,
            costImpr: 500000,
            vidaUtil: 10000,
            costokwH: 30,
            costoTiempoHombre: 0,
            merma: 5,
            riesgo: 0,
            ganan: 300,
            filamento: 17000,
        },
    });
});

app.listen(port, () => {
    // console.log(`Servidor corriendo en http://localhost:${port}`);
});

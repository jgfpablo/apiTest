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
        categoria: "llavero",
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
        categoria: "llavero",
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
        categoria: "llavero",
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
        categoria: "llavero",
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
        categoria: "llavero",
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
        categoria: "iman",
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
        categoria: "iman",
    },
    {
        id: 8,
        nombre: "pidgey",
        peso: 1.8,
        tiempo: 20,
        descripcion: "Un Pokémon de tipo volador conocido por su aguda vista.",
        colores: ["marrón", "beige", "blanco"],
        oferta: "no",
        precio: 100,
        categoria: "iman",
    },
    {
        id: 9,
        nombre: "rattata",
        peso: 3.5,
        tiempo: 15,
        descripcion: "Un Pokémon de tipo normal con grandes colmillos.",
        colores: ["morado", "blanco", "rosa"],
        oferta: "si",
        precio: 90,
        categoria: "iman",
    },
    {
        id: 10,
        nombre: "ekans",
        peso: 6.9,
        tiempo: 30,
        descripcion: "Un Pokémon de tipo veneno en forma de serpiente.",
        colores: ["morado", "amarillo", "negro"],
        oferta: "no",
        precio: 110,
        categoria: "iman",
    },
    {
        id: 11,
        nombre: "pikachu",
        peso: 6.0,
        tiempo: 35,
        descripcion:
            "Un Pokémon de tipo eléctrico que puede generar descargas.",
        colores: ["amarillo", "negro", "rojo"],
        oferta: "si",
        precio: 200,
        categoria: "iman",
    },
    {
        id: 12,
        nombre: "sandshrew",
        peso: 12.0,
        tiempo: 50,
        descripcion:
            "Un Pokémon de tipo tierra que se enrolla en una bola para protegerse.",
        colores: ["amarillo", "marrón", "blanco"],
        oferta: "no",
        precio: 140,
        categoria: "iman",
    },
    {
        id: 13,
        nombre: "vulpix",
        peso: 9.9,
        tiempo: 40,
        descripcion: "Un Pokémon de tipo fuego con múltiples colas.",
        colores: ["naranja", "rojo", "blanco"],
        oferta: "si",
        precio: 160,
        categoria: "iman",
    },
    {
        id: 14,
        nombre: "oddish",
        peso: 5.4,
        tiempo: 25,
        descripcion:
            "Un Pokémon de tipo planta/veneno que absorbe nutrientes del suelo.",
        colores: ["verde", "azul", "blanco"],
        oferta: "no",
        precio: 130,
        categoria: "iman",
    },
    {
        id: 15,
        nombre: "growlithe",
        peso: 19.0,
        tiempo: 45,
        descripcion: "Un Pokémon de tipo fuego leal y valiente.",
        colores: ["naranja", "negro", "blanco"],
        oferta: "si",
        precio: 170,
        categoria: "iman",
    },
    {
        id: 16,
        nombre: "machop",
        peso: 19.5,
        tiempo: 55,
        descripcion: "Un Pokémon de tipo lucha con gran fuerza física.",
        colores: ["gris", "blanco", "negro"],
        oferta: "no",
        precio: 150,
        categoria: "iman",
    },
    {
        id: 17,
        nombre: "gastly",
        peso: 0.1,
        tiempo: 20,
        descripcion:
            "Un Pokémon de tipo fantasma/veneno que puede atravesar objetos sólidos.",
        colores: ["negro", "morado", "blanco"],
        oferta: "si",
        precio: 140,
        categoria: "iman",
    },
    {
        id: 18,
        nombre: "magnemite",
        peso: 6.0,
        tiempo: 25,
        descripcion:
            "Un Pokémon de tipo eléctrico/acero que usa magnetismo para volar.",
        colores: ["gris", "rojo", "azul"],
        oferta: "no",
        precio: 120,
        categoria: "iman",
    },
    {
        id: 19,
        nombre: "doduo",
        peso: 39.2,
        tiempo: 35,
        descripcion: "Un Pokémon de tipo normal/volador con dos cabezas.",
        colores: ["marrón", "blanco", "negro"],
        oferta: "si",
        precio: 150,
        categoria: "iman",
    },
    {
        id: 20,
        nombre: "seel",
        peso: 90.0,
        tiempo: 50,
        descripcion:
            "Un Pokémon de tipo agua que nada con facilidad en aguas heladas.",
        colores: ["blanco", "gris", "azul"],
        oferta: "no",
        precio: 160,
        categoria: "iman",
    },
    {
        id: 21,
        nombre: "onix",
        peso: 210.0,
        tiempo: 70,
        descripcion: "Un Pokémon de tipo roca/tierra que se mueve bajo tierra.",
        colores: ["gris", "blanco", "negro"],
        oferta: "si",
        precio: 200,
        categoria: "iman",
    },
    {
        id: 22,
        nombre: "voltorb",
        peso: 10.4,
        tiempo: 30,
        descripcion: "Un Pokémon de tipo eléctrico que parece una Pokéball.",
        colores: ["rojo", "blanco", "negro"],
        oferta: "no",
        precio: 140,
        categoria: "iman",
    },
    {
        id: 23,
        nombre: "cubone",
        peso: 6.5,
        tiempo: 40,
        descripcion: "Un Pokémon de tipo tierra que usa un cráneo como casco.",
        colores: ["marrón", "blanco", "gris"],
        oferta: "si",
        precio: 150,
        categoria: "iman",
    },
    {
        id: 24,
        nombre: "hitmonlee",
        peso: 49.8,
        tiempo: 55,
        descripcion:
            "Un Pokémon de tipo lucha conocido por sus poderosas patadas.",
        colores: ["marrón", "blanco", "negro"],
        oferta: "no",
        precio: 170,
        categoria: "iman",
    },
    {
        id: 25,
        nombre: "lickitung",
        peso: 65.5,
        tiempo: 45,
        descripcion:
            "Un Pokémon de tipo normal con una lengua extremadamente larga.",
        colores: ["rosa", "blanco", "rojo"],
        oferta: "si",
        precio: 160,
        categoria: "iman",
    },
    {
        id: 26,
        nombre: "koffing",
        peso: 1.0,
        tiempo: 25,
        descripcion: "Un Pokémon de tipo veneno que emite gases tóxicos.",
        colores: ["morado", "amarillo", "blanco"],
        oferta: "no",
        precio: 120,
        categoria: "iman",
    },
    {
        id: 27,
        nombre: "rhyhorn",
        peso: 115.0,
        tiempo: 60,
        descripcion:
            "Un Pokémon de tipo roca/tierra con un cuerpo de roca resistente.",
        colores: ["gris", "blanco", "negro"],
        oferta: "si",
        precio: 180,
        categoria: "iman",
    },
    {
        id: 28,
        nombre: "tangela",
        peso: 35.0,
        tiempo: 35,
        descripcion: "Un Pokémon de tipo planta cubierto de enredaderas.",
        colores: ["verde", "azul", "negro"],
        oferta: "no",
        precio: 150,
        categoria: "iman",
    },
    {
        id: 29,
        nombre: "kangaskhan",
        peso: 80.0,
        tiempo: 55,
        descripcion:
            "Un Pokémon de tipo normal que protege ferozmente a su cría.",
        colores: ["marrón", "blanco", "negro"],
        oferta: "si",
        precio: 190,
        categoria: "iman",
    },
    {
        id: 30,
        nombre: "horsea",
        peso: 8.0,
        tiempo: 30,
        descripcion:
            "Un Pokémon de tipo agua que se impulsa a través del agua lanzando chorros.",
        colores: ["azul", "blanco", "negro"],
        oferta: "no",
        precio: 110,
        categoria: "iman",
    },
    {
        id: 31,
        nombre: "goldeen",
        peso: 15.0,
        tiempo: 35,
        descripcion:
            "Un Pokémon de tipo agua conocido por su belleza y agilidad.",
        colores: ["blanco", "rojo", "amarillo"],
        oferta: "si",
        precio: 130,
        categoria: "iman",
    },
    {
        id: 32,
        nombre: "staryu",
        peso: 34.5,
        tiempo: 40,
        descripcion: "Un Pokémon de tipo agua con forma de estrella.",
        colores: ["marrón", "amarillo", "blanco"],
        oferta: "no",
        precio: 140,
        categoria: "iman",
    },
    {
        id: 33,
        nombre: "jynx",
        peso: 40.6,
        tiempo: 50,
        descripcion:
            "Un Pokémon de tipo hielo/psíquico con una apariencia humana.",
        colores: ["rosa", "amarillo", "blanco"],
        oferta: "si",
        precio: 170,
        categoria: "iman",
    },
    {
        id: 34,
        nombre: "electabuzz",
        peso: 30.0,
        tiempo: 55,
        descripcion:
            "Un Pokémon de tipo eléctrico que emite descargas de alto voltaje.",
        colores: ["amarillo", "negro", "rojo"],
        oferta: "no",
        precio: 180,
        categoria: "iman",
    },
];

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

// Categoria ---------------------------------
app.get("/products/category", (req, res) => {
    // Obtener los parámetros de consulta (start y limit) de la URL
    const start = parseInt(req.query.start) || 0; // Índice inicial (default 0)
    const limit = parseInt(req.query.limit) || allProducts.length; // Límite de productos (default a todos)
    const category = req.query.category;

    // Obtener una porción de los productos según los parámetros

    const allProductCategory = allProducts.filter(
        (product) => product.categoria == category
    );

    const paginatedProducts = allProductCategory.slice(start, start + limit);

    res.json({
        message: "Productos paginados",
        status: "success",
        total: allProductCategory.length, // Número total de productos
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

const express = require("express");
const cors = require("cors"); // Importar CORS
const app = express(); // Crear una instancia de Express
const port = process.env.PORT || 8080; // Asignar el puerto

// Middleware para parsear JSON
app.use(express.json({ limit: "50mb" }));
// app.use(express.json());

// Habilitar CORS para todas las solicitudes
app.use(cors());

categorias = [
    {
        id: 1,
        nombre: "llaveros",
    },
    {
        id: 2,
        nombre: "imanes",
    },
    {
        id: 3,
        nombre: "Adornos para tortas",
    },
    {
        id: 4,
        nombre: "Adornos para cupcakes",
    },
    {
        id: 5,
        nombre: "Porta llaves",
    },
    {
        id: 6,
        nombre: "Adornos Navidad",
    },
    {
        id: 7,
        nombre: "Adornos año nuevo",
    },
];

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
        categoria: "llaveros",
        imagenes: [],
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
        categoria: "imanes",
        imagenes: [],
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
        categoria: "llaveros",
        imagenes: [],
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
        categoria: "llaveros",
        imagenes: [],
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
        categoria: "llaveros",
        imagenes: [],
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
        categoria: "llaveros",
        imagenes: [],
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
        categoria: "llaveros",
        imagenes: [],
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
        categoria: "llaveros",
        imagenes: [],
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
        categoria: "imanes",
        imagenes: [],
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
        categoria: "imanes",
        imagenes: [],
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
        categoria: "imanes",
        imagenes: [],
    },
];

app.get("/product", (req, res) => {
    const id = req.query.id;

    // busqueda por id

    const product = allProducts.find((product) => product.id == id);
    res.json({
        message: "Producto Encontrado",
        status: "success",
        data: product,
    });
});

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
app.get("/category", (req, res) => {
    // Obtener los parámetros de consulta (start y limit) de la URL
    const start = parseInt(req.query.start) || 0; // Índice inicial (default 0)
    const limit = parseInt(req.query.limit) || allProducts.length; // Límite de productos (default a todos)
    const categoryParam = req.query.category;

    // Obtener una porción de los productos según los parámetros

    const allProductCategory = allProducts.filter(
        (product) => product.categoria == categoryParam
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

// Agregar un nuevo producto (POST)
app.post("/products", (req, res) => {
    const newProduct = req.body; // Obtener el nuevo producto del cuerpo de la solicitud
    newProduct.id = allProducts.length + 1; // Asignar un nuevo ID al producto
    allProducts.push(newProduct); // Añadir el nuevo producto al array

    res.json({
        message: "Producto agregado",
        status: "success",
        data: newProduct,
    });
});

app.get("/categorias", (req, res) => {
    res.json({
        message: "Todas las categorias",
        status: "success",
        data: {
            categorias,
        },
    });
});

app.listen(port, () => {
    // console.log(`Servidor corriendo en http://localhost:${port}`);
});

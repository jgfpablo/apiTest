const express = require("express");
const cors = require("cors"); // Importar CORS
const app = express(); // Crear una instancia de Express
const port = process.env.PORT || 8080; // Asignar el puerto

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Ruta básica que devuelve "buenas tardes2"
app.get("/products", (req, res) => {
    res.json({
        message:
            "IANNNN LPM. MANANA CUANDO YO TE DIGA QUE TENGO CURIOSIDAD POR VER COMO HACES UN POWERPOINT DE 500 DIAPOSITIVAS ESPERO QUE LO HAGAS",
        status: "success",
        data: [
            {
                nombre: "pikachu",
                peso: 12.05,
                tiempo: 66,
                descripcion:
                    "Un Pokémon de tipo eléctrico conocido por sus ataques de rayos.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "bulbasaur",
                peso: 40,
                tiempo: 10,
                descripcion:
                    "Un Pokémon planta/veneno con una semilla en su espalda.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "charmander",
                peso: 25,
                tiempo: 20,
                descripcion:
                    "Un Pokémon de tipo fuego con una llama en su cola.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "squirtle",
                peso: 35,
                tiempo: 30,
                descripcion:
                    "Un Pokémon de tipo agua que lleva una concha en la espalda.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "jigglypuff",
                peso: 20,
                tiempo: 40,
                descripcion:
                    "Un Pokémon de tipo normal/hada conocido por sus habilidades para dormir a sus enemigos.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "meowth",
                peso: 28,
                tiempo: 50,
                descripcion:
                    "Un Pokémon de tipo normal con habilidades para encontrar objetos valiosos.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "psyduck",
                peso: 33,
                tiempo: 60,
                descripcion:
                    "Un Pokémon de tipo agua que sufre de constantes dolores de cabeza.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "snorlax",
                peso: 100,
                tiempo: 70,
                descripcion:
                    "Un Pokémon enorme y perezoso conocido por dormir casi todo el día.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "togepi",
                peso: 15,
                tiempo: 80,
                descripcion:
                    "Un Pokémon de tipo hada que trae felicidad a los que lo rodean.",
                colores: ["rojo", "verde", "azul"],
            },
            {
                nombre: "eevee",
                peso: 29,
                tiempo: 90,
                descripcion:
                    "Un Pokémon con múltiples evoluciones posibles según las condiciones.",
                colores: ["rojo", "verde", "azul"],
            },
        ],
    });
});

//------------------------------------------------
app.get("/", (req, res) => {
    res.json({
        message: "Simplemente Cosas",
        status: "success",
        data: [
            {
                consumoKw: 360,
                costImpr: 500000,
                vidaUtil: 10000,
                kwH: 30,
                costoTiempoHombre: 0,
                merma: 5,
                riesgo: 0,
                ganan: 300,
                filamento: 17000,
            },
        ],
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

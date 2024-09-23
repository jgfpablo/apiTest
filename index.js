const express = require("express");
const cors = require("cors"); // Importar CORS
const app = express(); // Crear una instancia de Express
const port = process.env.PORT || 8080; // Asignar el puerto

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Ruta básica que devuelve "buenas tardes2"
app.get("/", (req, res) => {
    res.json({
        message:
            "IANNNN LPM. MANANA CUANDO YO TE DIGA QUE TENGO CURIOSIDAD POR VER COMO HACES UN POWERPOINT DE 500 DIAPOSITIVAS ESPERO QUE LO HAGAS",
        status: "success",
        data: {
            nombre: "Juan",
            edad: 30,
        },
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

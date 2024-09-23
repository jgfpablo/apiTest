const express = require("express"); // Importar Express
const app = express(); // Crear una instancia de Express
const port = process.env.PORT || 8080; // Asignar el puerto

// Ruta básica que devuelve "hola"
app.get("/", (req, res) => {
    res.send("buenas tardes2");
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

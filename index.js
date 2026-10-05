// index.js
require("dotenv").config();
const http = require("http");

// En local viene de .env; en Render, la plataforma asigna el puerto
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log("Bienvenidos al curso");
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bienvenidos al curso. Despliegue exitoso.");
});

server.listen(PORT, () => {
    console.log("Aplicacion corriendo en: " + PORT);
});
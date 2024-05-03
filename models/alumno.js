const pool = require('../data/datacontext');

const list = async function () {
    // El pool se inicializao en data/db.js
    // La conexión se cierra automáticamente cuando el query se resuelve
    const [rows, fields] = await pool.query(
        `SELECT a.id, a.nombre, a.promedio, m.nombre AS materia_nombre
            FROM materia m INNER JOIN alumno a ON m.id = a.id`
    );

    return rows;
}

module.exports = { list }
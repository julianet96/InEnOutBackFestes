const mssql = require('mssql')
// Configuracion de la base de datos / conexion
const dbConfig = {
    user: process.env.dbUser || '******',
    password: process.env.dbPass || '******',
    server: process.env.dbServer || 'j****.database.windows.net',
    database: process.env.db || '******',
    requestTimeout: process.env.dbTimeout || 60000,
}
const sql = new mssql.ConnectionPool(dbConfig).connect()

function getPool() {

    return sql.then(pool => pool)
}

async function execQuery(query) {

    const pool = await getPool();
    
    pool.on('error', function (err) {

        console.log('SQL errors', err)
    })

    try {

        const res = await pool.request().query(query)
        return res
    } catch (e) {

        return e
    }
}

module.exports = {
    getPool,
    execQuery,
}
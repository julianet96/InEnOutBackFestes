const express = require('express')
const app = express()
const mssql = require('mssql')

const dbConfig = {
    user: 'masteruser',
    password: '',
    server: 'juliatest.database.windows.net',
    database: 'JuliaTest',
    requestTimeout: 60000
}

app.get('/', (req, res) => {
    res.send('Hola')
})

app.listen(3000, (err) => {
    console.log(err);

    (async () => {
        try {
            const pool = await mssql.connect(dbConfig);
            const res = await pool.query('select * from sys.tables')
            console.log(res)
        } catch (e) {

            console.log(e)
        }
    })()
})
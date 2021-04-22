const express = require('express')
const app = express()
const mssql = require('mssql')
const db = require('./database')


app.get('/', (req, res) => {
    res.send('Hola')
})

// Obtiene las bebidas que saldran el la pantalla que estan en stock
app.get('/GetBebidaMenu', async (req,res)=>{
    let result = await db.GetBebidasMenu();
    res.send(result);
})

// Obtiene solo los refrescos que estan en stock
app.get('/GetBebidasRefrescos', async (req,res)=>{
    let result = await db.GetBebidasRefrescos();
    res.send(result);
})

// Obtiene solo los alcoholes destilados que estan en stock
app.get('/GetBebidasAlcoholDestilado', async (req,res)=>{
    let result = await db.GetBebidasAlcoholDestilado();
    res.send(result);
})

// Obtiene toda la tabla de bebidas
app.get('/GetTodasBebidas', async (req,res)=>{
    let result = await db.GetBebidasAlcoholDestilado();
    res.send(result);
})

app.listen(3000, (err) => {
    console.log(err);
})
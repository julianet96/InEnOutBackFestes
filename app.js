const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./database')
var cors = require('cors');
const { response } = require('express');

app.use(cors({ origin: '*' , credentials :  true}));
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hola')
})

// Obtiene las bebidas que saldran el la pantalla que estan en stock
app.get('/getBebidaMenu', async (req,res)=>{
    let result = await db.GetBebidasMenu();
    res.send(result);
})

// Obtiene solo los refrescos que estan en stock
app.get('/getBebidasRefrescos', async (req,res)=>{
    let result = await db.GetBebidasRefrescos();
    res.send(result);
})

// Obtiene solo los alcoholes destilados que estan en stock
app.get('/getBebidasAlcoholDestilado', async (req,res)=>{
    let result = await db.GetBebidasAlcoholDestilado();
    res.send(result);
})

// Obtiene toda la tabla de bebidas
app.get('/getTodasBebidas', async (req,res)=>{
    let result = await db.GetBebidasAlcoholDestilado();
    res.send(result);
})

app.get('/getComandaRellenando', async (req,res)=>{
    
    let mesa = req.query.mesa
    let result = await db.GetComandaRellenando(mesa);
    res.send(result)
})

app.post('/createComanda',async (req,res)=>{
    console.log(req.body)
    let result = await db.CreateComanda(req.body)
    res.send(result)
})

app.post('/createLineaComanda',async (req,res)=>{
    console.log("Createline",req.body)
    let result = await db.CreateLienaComanda(req.body)
    res.send(result)
})

app.listen(3000, (err) => {
    console.log(err);
})
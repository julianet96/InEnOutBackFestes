const mssql = require('mssql')
// Configuracion de la base de datos / conexion
const dbConfig = {
    user: 'masteruser',
    password: '',
    server: 'juliatest.database.windows.net',
    database: 'JuliaTest',
    requestTimeout: 60000
}

async function GetBebidasMenu(){
    let result = await execSQLWithinPool("SELECT Id,Nombre,[Type],Precio,Img FROM [dbo].[Bebidas] WHERE Stock = 1 and [Type] <> 'Alcohol-Destilado'")
    return result;
}

async function GetBebidasAlcoholDestilado(){
    let result = await execSQLWithinPool("SELECT Id,Nombre,[Type],Precio,Img FROM [dbo].[Bebidas] WHERE Stock = 1 and [Type] = 'Alcohol-Destilado'")
    return result;
}

async function GetBebidasRefrescos(){
    let result = await execSQLWithinPool("SELECT Id,Nombre,[Type],Precio,Img FROM [dbo].[Bebidas] WHERE Stock = 1 and [Type] = 'Refresco'")
    return result;
}

async function GetTodasBebidas(){
    let result = await execSQLWithinPool("SELECT Id,Nombre,[Type],Precio,Img FROM [dbo].[Bebidas] ")
    return result;
}


// Ejecuta las instrucciones sql que le mandamos
async function execSQLWithinPool(sqlquery) {
    pool = new mssql.ConnectionPool(dbConfig);
    pool.on('error', err => {
        console.log('SQL errors ', err);
    })

    try {
        await pool.connect();
        let result = await pool.request().query(sqlquery);
        return result;
    } catch (err) {
        console.log(err);
        return { err: err };
    } finally {
        pool.close(); //closing connection after request is finished.
    }

}

module.exports = {GetTodasBebidas,GetBebidasRefrescos,GetBebidasAlcoholDestilado,GetBebidasMenu}
const mssql = require('mssql')
// Configuracion de la base de datos / conexion
const dbConfig = {
    user: 'masteruser',
    password: 'Parcou11.',
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
// Esta funcion solo devuelve la comanda que se esta rellenando
async function GetComandaRellenando(mesa){
    // Estados:
    //0 - Rellenando comanda
    //1 - Comanda enviada para procesado
    //2 - Comanda pagada pendiente de servir
    //3 - Comanda servida
    let result = await execSQLWithinPool("  SELECT * FROM Comanda WHERE Estado = 0 and Mesa = "+mesa)
    return result
}

async function CreateComanda(comanda){

    let result = await execSQLWithinPool("INSERT INTO [dbo].[Comanda] ([Mesa],[Estado],[Hora]) OUTPUT INSERTED.Id VALUES ("+ comanda.Mesa +"," + comanda.Estado + ",'" + comanda.Hora + "')")
    
    return result
}

async function CreateLienaComanda(lineaComanda){

    let result = await execSQLWithinPool("INSERT INTO [dbo].[Linea_Comanda] ([Id_Comanda],[Id_Comida],[Id_Bebida],[Comentario],[Cantidad]) OUTPUT INSERTED.Id VALUES ("+ lineaComanda.idComanda +","+ lineaComanda.idComida +","+ lineaComanda.idBebida +",'"+ lineaComanda.Comentario +"',"+ lineaComanda.cantidad +")")

    return result
}


// Ejecuta las instrucciones sql que le mandamos
async function execSQLWithinPool(sqlquery) {
    var pool = new mssql.ConnectionPool(dbConfig);
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

module.exports = {GetTodasBebidas,GetBebidasRefrescos,GetBebidasAlcoholDestilado,GetBebidasMenu,GetComandaRellenando,CreateComanda,CreateLienaComanda}
const { execQuery } = require('./../db/dbManager')

async function getComidasMenu() {

    const res = await execQuery("SELECT Id, Nombre, [Type], Precio, Img from Comida WHERE Stock = 1")

    return res
}
async function getAllComida() {

    const res = await execQuery("SELECT Id ,Nombre ,[Type] ,Precio ,Stock FROM [dbo].[Comida]")

    return res
}

async function updateStock(comida) {

    const res = await execQuery("UPDATE [dbo].[Comida] SET Stock = " + comida.Stock + " WHERE Id = " + comida.Id)

    return res
}


module.exports = {
    getComidasMenu,
    updateStock,
    getAllComida,
}

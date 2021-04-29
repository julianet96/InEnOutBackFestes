const { execQuery } = require('./../db/dbManager')


async function getBebidasMenu() {

    const res = await execQuery("SELECT Id,Nombre,[Type],Precio,Img FROM [dbo].[Bebidas] WHERE Stock = 1 and [Type] <> 'Alcohol-Destilado'")

    return res
}

async function getRefrescos() {
    
    const res = await execQuery("SELECT Id,Nombre,[Type],Precio,Img FROM [dbo].[Bebidas] WHERE Stock = 1 and [Type] = 'Refresco'")

    return res
}

async function getAlcoholDestilado() {

    const res = await execQuery("SELECT Id,Nombre,[Type],Precio,Img FROM [dbo].[Bebidas] WHERE Stock = 1 and [Type] = 'Alcohol-Destilado'")

    return res
}

module.exports = {
    getBebidasMenu,
    getRefrescos,
    getAlcoholDestilado
}
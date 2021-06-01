const { execQuery } = require('./../db/dbManager')

async function getComidasMenu(){

    const res = await execQuery("SELECT Id, Nombre, [Type], Precio, Img from Comida WHERE Stock = 1")

    return res
}


module.exports = {
    getComidasMenu
}

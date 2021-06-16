const { execQuery } = require('./../db/dbManager')

async function getPedidosCocina() {

    const res = await execQuery("SELECT c.Id, c.Mesa, lc.Comentario,cm.Nombre,lc.Cantidad FROM Comanda AS c inner join Linea_Comanda AS lc ON c.Id = lc.Id_Comanda inner join Comida AS cm ON lc.Id_Comida = cm.Id WHERE c.Estado = 2 ORDER BY c.Id")

    return res
}

async function getPedidosBarra() {

    const res = await execQuery("SELECT c.Id, c.Mesa, lc.Comentario,bb.Nombre,lc.Cantidad FROM Comanda AS c inner join Linea_Comanda AS lc ON c.Id = lc.Id_Comanda inner join Bebidas AS bb ON lc.Id_Bebida = bb.Id WHERE c.Estado = 2 ORDER BY c.Id")

    return res

}



module.exports = {
    getPedidosCocina,
    getPedidosBarra,
}
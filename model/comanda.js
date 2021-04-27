const { execQuery } = require('./../db/dbManager')

async function getComandaRellenando(mesa) {

    // Estados:
    // 0 - Rellenando comanda
    // 1 - Comanda enviada para procesado
    // 2 - Comanda pagada pendiente de servir
    // 3 - Comanda servida
    // -1 - cancelado
    // IDEAS!!! (concepto de momento)
    // 21 - Comida lista
    // 22 - Bebida lista

    const res = await execQuery("  SELECT * FROM Comanda WHERE Estado = 0 and Mesa = " + mesa)

    return res
}

async function createLineaComanda(lineaComanda) {

    const res = await execQuery("INSERT INTO [dbo].[Linea_Comanda] ([Id_Comanda],[Id_Comida],[Id_Bebida],[Comentario],[Cantidad]) OUTPUT INSERTED.Id VALUES ("+ lineaComanda.idComanda +","+ lineaComanda.idComida +","+ lineaComanda.idBebida +",'"+ lineaComanda.Comentario +"',"+ lineaComanda.cantidad +")")

    return res
}

async function createComanda(comanda) {

    const res = await execQuery("INSERT INTO [dbo].[Comanda] ([Mesa],[Estado],[Hora]) OUTPUT INSERTED.Id VALUES ("+ comanda.Mesa +"," + comanda.Estado + ",'" + comanda.Hora + "')")

    return res
}

module.exports = {
    getComandaRellenando,
    createLineaComanda,
    createComanda,
}
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

    const res = await execQuery("INSERT INTO [dbo].[Linea_Comanda] ([Id_Comanda],[Id_Comida],[Id_Bebida],[Comentario],[Cantidad],[TotalLinea]) OUTPUT INSERTED.Id VALUES ("+ lineaComanda.idComanda +","+ lineaComanda.idComida +","+ lineaComanda.idBebida +",'"+ lineaComanda.Comentario +"',"+ lineaComanda.cantidad +","+ lineaComanda.totalLinea +")")

    return res
}

async function createComanda(comanda) {

    const res = await execQuery("INSERT INTO [dbo].[Comanda] ([Mesa],[Estado],[Hora]) OUTPUT INSERTED.Id VALUES ("+ comanda.Mesa +"," + comanda.Estado + ",'" + comanda.Hora + "')")

    return res
}

async function updateComanda(comanda) {

    const res = await execQuery("UPDATE [dbo].[Comanda] SET [Total] = " + comanda.Total + ",[Estado] = " + comanda.Estado + " WHERE [Id] = "+ comanda.Id)

    return res
}

async function getLineasComanda (idComanda) {

    const res = await execQuery("SELECT lc.Id,lc.Cantidad,lc.Comentario,lc.TotalLinea,bb.Nombre AS NombreBebida, cm.Nombre AS NombreComida, bb.Img AS bebidaImg, cm.Img AS comidaImg FROM Linea_Comanda AS lc left join Bebidas AS bb ON bb.Id = lc.Id_Bebida left join Comida AS cm ON cm.Id = lc.Id_Comida WHERE lc.Id_Comanda = "+idComanda)

    let arrayResult = []

    if(res == undefined)
    {
        return arrayResult;
    }

    res.recordset.forEach(element => {
        let nombre = element.NombreBebida
        let img = element.bebidaImg
        let coment = element.Comentario
        if(nombre == null){
            nombre = element.NombreComida
            img = element.comidaImg
        }

        if(coment == 'null'){
            coment = ""
        }

        arrayResult.push(
            {
                Id: element.Id,
                Cantidad: element.Cantidad,
                TotalLinea: element.TotalLinea,
                Nombre: nombre,
                Img: img,
                Comentario: coment
            }
        )
    });

    console.log(arrayResult)

    return arrayResult
}

async function deleteLineaComanda (idLineaComanda) {
    
    const res = await execQuery("DELETE FROM [dbo].[Linea_Comanda] WHERE Id = "+idLineaComanda.idLineaComanda)

    return res
}

module.exports = {
    getComandaRellenando,
    createLineaComanda,
    createComanda,
    getLineasComanda,
    deleteLineaComanda,
    updateComanda,
}
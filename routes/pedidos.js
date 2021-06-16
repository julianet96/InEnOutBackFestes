const pedidosFunction = require('./../model/pedidos')

const routes = [
    {
        method: 'get',
        url: '/getPedidosCocina',
        fn: async function (req, res, next) {

            const result = await pedidosFunction.getPedidosCocina()

            let comandaId = 0

            let arraycreated = []

            let concat = []

            let cont = 0;

            let elementOld = {}

            result.recordset.forEach(element => {
                cont++;
                if(cont == 1){
                    concat.push({
                        Comentario: element.Comentario, 
                        Nombre: element.Nombre,
                        Cantidad: element.Cantidad
                    })

                    elementOld = {
                        Id: element.Id, 
                        Mesa: element.Mesa,
                        lineas:concat
                    }
                    comandaId = element.Id
                }
                else{
                    if(element.Id == comandaId){
                        concat.push({
                            Comentario: element.Comentario, 
                            Nombre: element.Nombre,
                            Cantidad: element.Cantidad
                        })
                    }else{
                        comandaId = element.Id
                        arraycreated.push(elementOld)
    
                        concat = []
    
                        concat.push({
                            Comentario: element.Comentario, 
                            Nombre: element.Nombre,
                            Cantidad: element.Cantidad
                        })
    
                        elementOld = {
                            Id: element.Id, 
                            Mesa: element.Mesa,
                            lineas:concat
                        }
                    }
                }
                
                if(cont == result.recordset.length){
                    arraycreated.push(elementOld)
                }
            });

            console.log(arraycreated)

            res.send(arraycreated)
        }
    },
    {
        method: 'get',
        url: '/getPedidosBarra',
        fn: async function (req, res, next) {

            const result = await pedidosFunction.getPedidosBarra()

            let comandaId = 0

            let arraycreated = []

            let concat = []

            let cont = 0;

            let elementOld = {}

            result.recordset.forEach(element => {
                cont++;
                if(cont == 1){
                    concat.push({
                        Comentario: element.Comentario, 
                        Nombre: element.Nombre,
                        Cantidad: element.Cantidad
                    })

                    elementOld = {
                        Id: element.Id, 
                        Mesa: element.Mesa,
                        lineas:concat
                    }
                    comandaId = element.Id
                }
                else{
                    if(element.Id == comandaId){
                        concat.push({
                            Comentario: element.Comentario, 
                            Nombre: element.Nombre,
                            Cantidad: element.Cantidad
                        })
                    }else{
                        comandaId = element.Id
                        arraycreated.push(elementOld)
    
                        concat = []
    
                        concat.push({
                            Comentario: element.Comentario, 
                            Nombre: element.Nombre,
                            Cantidad: element.Cantidad
                        })
    
                        elementOld = {
                            Id: element.Id, 
                            Mesa: element.Mesa,
                            lineas:concat
                        }
                    }
                }
                
                if(cont == result.recordset.length){
                    arraycreated.push(elementOld)
                }
            });

            console.log(arraycreated)

            res.send(arraycreated)
        }
    },
]

module.exports = routes
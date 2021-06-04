const comandaFunctions = require('./../model/comanda')

const routes = [
    {
        method: 'get',
        url: '/getComandaRellenando',
        fn: async function(req, res, next) {

            const mesa = req.query.mesa
            
            res.send(await comandaFunctions.getComandaRellenando(mesa))
        }
    },
    {
        method: 'post',
        url: '/createLineaComanda',
        fn: async function(req, res, next) {

            res.send(await comandaFunctions.createLineaComanda(req.body))
        }
    },
    {
        method: 'post',
        url: '/createComanda',
        fn: async function(req, res, next) {

            res.send(await comandaFunctions.createComanda(req.body))
        }
    },
    {
        method: 'get',
        url: '/getLineasComanda',
        fn: async function(req, res, next) {

            const idComanda = req.query.idComanda

            console.log( req.query)

            res.send(await comandaFunctions.getLineasComanda(idComanda))
        }
    },
    {
        method: 'post',
        url: '/deleteLineaComanda',
        fn: async function(req, res, next) {

            res.send(await comandaFunctions.deleteLineaComanda(req.body))
        }
    },
    {
        method: 'post',
        url: '/UpdateComanda',
        fn: async function(req, res, next) {

            res.send(await comandaFunctions.updateComanda(req.body))
        }
    }
]

module.exports = routes
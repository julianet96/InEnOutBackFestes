const bebidasFunctions = require('./../model/bebidas')

const routes = [
    {
        method: 'get',
        url: '/getBebidaMenu',
        fn: async function (req, res, next) {

            res.send(await bebidasFunctions.getBebidasMenu())
        }
    },
    {
        method: 'get',
        url: '/getBebidasRefrescos',
        fn: async function (req, res, next) {

            res.send(await bebidasFunctions.getRefrescos())
        }
    },
    {
        method: 'get',
        url: '/getBebidasAlcoholDestilado',
        fn: async function (req, res, next) {

            res.send(await bebidasFunctions.getAlcoholDestilado())
        }
    },
    {
        method: 'get',
        url: '/getTodasBebidas',
        fn: async function (req, res, next) {

            res.send(await bebidasFunctions.getAllBebida())
        }
    },
    {
        method: 'post',
        url: '/UpdateStockBebida',
        fn: async function(req, res, next) {

            res.send(await bebidasFunctions.updateStock(req.body))
        }
    }
]

module.exports = routes
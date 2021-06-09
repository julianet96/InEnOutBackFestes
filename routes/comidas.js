const comidasFunctions = require('./../model/comidas')

const routes = [
    {
        method: 'get',
        url: '/getComidaMenu',
        fn: async function (req, res, next) {

            res.send(await comidasFunctions.getComidasMenu())
        }
    },
    {
        method: 'get',
        url: '/getTodoComida',
        fn: async function (req, res, next) {

            res.send(await comidasFunctions.getAllComida())
        }
    },
    {
        method: 'post',
        url: '/UpdateStockComida',
        fn: async function(req, res, next) {

            res.send(await comidasFunctions.updateStock(req.body))
        }
    }

]

module.exports = routes
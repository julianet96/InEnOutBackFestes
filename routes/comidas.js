const comidasFunctions = require('./../model/comidas')

const routes = [
    {
        method: 'get',
        url: '/getComidaMenu',
        fn: async function (req, res, next) {

            res.send(await comidasFunctions.getComidasMenu())
        }
    }

]

module.exports = routes
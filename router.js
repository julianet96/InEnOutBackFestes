const routes = require('./utils/routesGetter')()
const router = require('express').Router()

for (const route of routes) {

    router[route.method](route.url, route.fn);
}

module.exports = router
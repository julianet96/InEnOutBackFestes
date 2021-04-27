const fs = require('fs')
const path = require('path')

function getRoutes() {

    const pathName = path.join(__dirname, '../routes/')
    const routes = fs.readdirSync(pathName).map(_ => pathName + _)
    
    return routes.map(fileRoute => require(fileRoute)).flat()
}

module.exports = getRoutes
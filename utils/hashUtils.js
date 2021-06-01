const bcrypt = require('bcrypt')
const saltRounds = 10

function defaultBcryptFunction(fn) {

    return function (text, saltOrHash, ...rest) {

        return new Promise((resolve, reject) => {

            bcrypt[fn](text, saltOrHash, function (error, result) {

                if (result) resolve(result)

                else reject(error)
            })
        })
    }
}

function genHash(text, rounds = saltRounds) {

    return defaultBcryptFunction('hash')(text, rounds)
}

function checkHash(text, hash) {

    return defaultBcryptFunction('compare')(text, hash)
}

module.exports = {
    genHash,
    checkHash,
}
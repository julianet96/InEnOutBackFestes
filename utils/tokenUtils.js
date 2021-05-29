const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET || '*/3vfq:e0!·'

function getToken(payload) {

    return jwt.sign(payload, secret, { expiresIn: '1d' })
}

function verifyToken(token) {

    try {

        return jwt.verify(token, secret)

    } catch (err) {
        
        return false
    }
}

function refreshToken(token) {

    const payload = verifyToken(token)

    if (payload) {

        delete payload.iat
        delete payload.exp
        delete payload.nbf
        delete payload.jti

        return getToken(payload)
    }

    return false
}

module.exports = {
    getToken,
    verifyToken,
    refreshToken,
}
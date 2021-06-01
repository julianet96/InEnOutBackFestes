const tokensUtilities = require('./../utils/tokenUtils')

const routes = [
    {
        method: 'post',
        url: '/verifyToken',
        fn: async function(req, res, next) {

            const { token } = req.body;

            if (!token) res.status(400).end()

            const verified = await tokensUtilities.verifyToken(token)

            if (!verified) res.status(400).end()

            else res.send(verified)
        }
    },
    
]

module.exports = routes
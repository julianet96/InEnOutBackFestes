const userFunctions = require('./../model/user');

const routes = [
    {
        method: 'post',
        url: '/login',
        fn: async function(req, res, next) {

            const { user, password } = req.body;

            if (!user || !password) res.status(400).end()

            const tokenUser = await userFunctions.loginUser(user, password)

            if (!tokenUser) res.status(400).end()

            else res.send({ token: tokenUser })
        }
    },
    {
        method: 'post',
        url: '/addUser',
        fn: async function(req,res, next){
            console.log(req.body)
        }
    },
    {
        method: 'get',
        url: '/getUsers',
        fn: async function(req,res, next){
            
            const result = await userFunctions.getUsers();
            
            res.send(result)
        }
    },
]

module.exports = routes
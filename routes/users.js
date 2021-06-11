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
            const body = req.body;
            
            const result = await userFunctions.createUser(body.name,body.username,body.password,body.type)

            res.send(result)
        }
    },
    {
        method: 'post',
        url: '/updateUser',
        fn: async function(req,res, next){
            const body = req.body;
            
            const result = await userFunctions.updateUser(body.name,body.username,body.type,body.password,body.id)

            res.send(result)
        }
    },
    {
        method: 'post',
        url: '/deleteUser',
        fn: async function(req,res, next){
            const body = req.body;
            if(body.type != 1){
                const result = await userFunctions.deleteUser(body.id)

                res.send(result)
            }
            else{
                res.send('')
            }

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
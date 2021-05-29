const { execQuery } = require('./../db/dbManager')
const { checkHash, genHash } = require('./../utils/hashUtils')
const { getToken } = require('./../utils/tokenUtils')

async function loginUser(username, password) {

    const result = await execQuery("SELECT Id, Nombre, UserName, Password, Type FROM [dbo].[Users] WHERE UserName = '" + username + "'")
    const user = result && result.recordset && result.recordset[0] || false

    if (!user) return false
    
    try {

        await checkHash(password, user.Password)

        return getToken({
            role: user.Type,
            // Por definir mas payload
        })
    } catch (err) {

        return false
    }
}

async function createUser(name, username, password, type) {

    const hashPassword = await genHash(password)

    const result = await execQuery("INSERT INTO [dbo].[Users] ([Nombre], [UserName], [Password], [Type]) OUTPUT INSERTED.Id VALUES ('" + name + "', '" + username +"', '" + hashPassword + "', '" + type + "')")
    
    return result
}

module.exports = {
    loginUser,
    createUser,
}
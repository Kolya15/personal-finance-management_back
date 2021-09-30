const UserModels = require('../models/User')

class User {
    async getCurrentUser(req, res) {
        try {
            const user = await UserModels.findById(req.user.id)
            return res.json({user})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new User()
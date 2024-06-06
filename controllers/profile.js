const Profile = require('../services/profile.service')

module.exports = {
    
    Create: async (req, res, next) => {
        let profile = new Profile()
        let data = await profile.createProfile(req.body)
       console.log(req.body);
        res.status(data.status).json(data)
        return
    },
    Get: async (req, res, next) => {
        let profile = new Profile()
        let data = await profile.getProfile()
        res.status(data.status).json(data)
        return
    },
    GetById: async (req, res, next) => {
        let profile = new Profile()
        let data = await profile.getById(req.params.id)
        res.status(data.status).json(data)
        return
    },
    Update: async (req, res, next) => {
        let profile = new Profile()
        let data = await profile.update(req.params.id, req.body)
        res.status(data.status).json(data)
        return
    },
    Delete: async (req, res, next) => {
        let profile = new Profile()
        let data = await profile.delete(req.params.id)
        res.status(data.status).json(data)
        return
    }

   

}



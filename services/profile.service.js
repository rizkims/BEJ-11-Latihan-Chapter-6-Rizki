const {  GetById,
    Update, Delete, 
    checkLogin
   // Check
} = require('../infrastructure/user.infrastructure')

const bcrypt = require('bcrypt');
class User {
    
    async createUser(req) {
        let now = new Date()
        let resp = {}
        console.log(req)
        try {
            const salt = await bcrypt.genSalt(10);
            let obj = {
                 user_role_id: parseInt(req.user_role_id),
                user_name: req.user_name,
               // user_password: req.user_password,
               user_password: await bcrypt.hash(req.user_password, salt),
                user_fullname: req.user_fullname,
                user_email: req.user_email,
                user_province_id: req.user_province_id,
                user_hp: req.user_hp,
                user_address: req.user_address,
                createdAt: now
            }
            let data = await Create(obj)
            resp.data = data
            resp.status = 200
            resp.error = null
            resp.message = 'success'
            return resp
        } catch (error) {
            resp.data = null
            resp.status = 500
            resp.error = error
            resp.message = error.message
            return resp
        }
    }

    async getUser(req) {

        let now = new Date()
        let resp = {}
        //console.log('log '+req)
        try {
            let data = await GetAll()
            resp.data = data
            resp.status = 200
            resp.error = null
            resp.message = 'success'
            return resp
        } catch (error) {
            resp.data = null
            resp.status = 500
            resp.error = error
            resp.message = error.message
            return resp
        }
    }

    async update(id, req) {
        let resp = {}
        try {
            let data = await Update(id, req)
            resp.data = data
            resp.status = 200
            resp.error = null
            resp.message = 'success'
            return resp
        } catch (error) {
            resp.data = null
            resp.status = 500
            resp.error = error
            resp.message = error.message
            return resp
        }
    }

    async delete(id) {
        let resp = {}
        try {
            console.log(id)
            let data = await Delete(id)
            resp.data = data
            resp.status = 200
            resp.error = null
            resp.message = 'success'
            return resp

        } catch (error) {

            resp.data = null
            resp.status = 500
            resp.error = error
            resp.message = error.message
            return resp

        }


    }

    async checkLogin(req) {
        let now = new Date()
        let resp = {}
        console.log(req)
        try {
            let uname = req.user_name           
            let data = await checkLogin(uname)
            //console.log(data)
            const password_valid = await bcrypt.compare(req.user_password,data.user_password)

            if(data.status == '0'){
                resp.data = null
                resp.status = 400
                resp.error = 'Username not Found or Deleted'
                resp.message = 'Incorrect Password or Username!!'
                resp.success = 0

            } else {                
                if(password_valid){
                    resp.status = 200
                    resp.error = null
                    resp.message = 'Login Successful !'
                    resp.token = data.user_token
                    resp.success = 1
                } else {
                    resp.data = null
                    resp.status = 400
                    resp.error = 'Password Incorrect'
                    resp.message = 'Incorrect Password or Username!!'
                }
            }
            return resp



        } catch (error) {
            resp.data = null
            resp.status = 500
            resp.error = error
            resp.message = error.message
            return resp
        }
        
    }
    

    async getById(id) {
        let resp = {}
        try {
            let data = await GetById(id)
            resp.data = data
            resp.status = 200
            resp.error = null
            resp.message = 'success'
            return resp
        } catch (error) {
            resp.data = null
            resp.status = 500
            resp.error = error
            resp.message = error.message
            return resp

        }
    }

    

}

module.exports = User
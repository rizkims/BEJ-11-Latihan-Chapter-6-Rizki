const { m_user, m_user_role, m_province } = require('../models/index')
// Create
async function Create(req) {
    try {
        let data = await m_user.create(req)
        return data

    } catch (error) {
        return error
    }
}

// Read / Get
async function GetAll(req) {
    try {
        let data = await m_user.findAll({
            where: {
                user_status:'1'
               },
            include: [{
                model: m_user_role,
                as: 'role',
                required: true
                },
                {
                    model: m_province,
                    as: 'province',
                    required: true
                }
             ],   
            attributes: {
                exclude: [
                    'id',
                    'user_password',
                    'updatedAt',
                    'deletedAt'
                ]
            }
        })
        return data
    } catch (error) {
        return error
    }
}

async function GetById(id) {
    try {
        let data = await m_user.findOne({
            where: {
                id,
                user_status:'1'
            },
            include: [{
                model: m_user_role,
                as: 'role',
                required: true
                },
                {
                    model: m_province,
                    as: 'province',
                    required: true
                }
             ],  
            attributes: {
                exclude: [
                    'user_id',
                    'user_password',
                    'updatedAt',
                    'deletedAt'
                ]
            }

        })
        return data

    } catch (error) {
        return error
    }
}





module.exports = {
 
    GetById
}
const Sequelize = require('sequelize')
const db = require("../database2.js")

module.exports = db.sequelize.define(
    'user',
    {
        idusuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellidos: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        tipousuario: {
            type: Sequelize.STRING
        },
        celular: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)
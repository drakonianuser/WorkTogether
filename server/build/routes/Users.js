const express = require("express")
const users  = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")


const User = require("../models/UsersL")
users.use(cors())

process.env.SECRET_KEY = 'secret'

//Registro
users.post('/register', (req, res) => {
    const userData = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        password:  req.body.password,
        tipousuario:  "usuario",
        celular: req.body.celular
    }

    User.findOne({
        where: {
            correo: req.body.correo
        }
    })
        .then(user=> {
            if(!user){
                User.create(userData)
                .then(user=>{
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 40000
                    })
                    res.json({token: token})
                })
                .catch(err => {
                    res.send('error: '+err)
                })
            }else{
                res.json({ error: 'ya existe el usuario'})
            }
        })
        .catch(err => {
            res.send('error: '+ err)
        })
})


//Login
users.post('/login', (req, res) =>{
    User.findOne({
        where: {
            correo: req.body.correo
        }
    })
    .then(user=>{
        if(user.password == req.body.password){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            res.json({token: token})
        }else{
            res.send('Contraseña incorrecta')
        }
    })
    .catch(err => {
        res.send('No se encontro el usuario')
    })
})

//Perfil
users.get('/profile', (req,res)=> {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        where: {
            //idusuarios: req.body.idusuarios
            idusuarios: decoded.idusuarios
        }
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send('El usuario no existe')
        }
    })
    .catch(err =>{
        res.send('error'+err)
    })
})


module.exports = users;
console.log("llegue")
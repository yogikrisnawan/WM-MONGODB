// CONFIG api
const express = require('express')
const app = express()
const port = 2020

// Agar dapat menerima object saat post 
app.use(express.json())

// cONFIG MONGODB
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const URL= 'mongodb://127.0.0.1:27017'


MongoClient.connect(URL,{userNewUrlParaser : true, useUnifiedTopology:true},(err,client)=>{


    // Jika terdapat error, 'err' akan berisi object errorm dan kemudian memunculkan teks di console

    if(err){
        return console.log ('gagal terkoneksi')
    }

    const database= 'API-MongoDB'


    app.get('/Users',(req,res)=>{
        res.send(
           req.query
        )
    })
    
    app.post('/users',(req,res)=>{
        req.send(
        req.body
        )
    })


})









app.listen(port, () => {console.log(`API running at port ` + port)})
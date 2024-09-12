

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

// const path = require('path');

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'gym'

MongoClient.connect(dbConnectionStr)
.then(client => {
    console.log(`Connected to ${dbName} Database`)
    db = client.db(dbName)
})

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//READ
app.get('/', async (request, response) => {
   db.collection('exercises').find().toArray()
   .then(data => {
        response.render('index.ejs', { items: data})
   })
   .catch(error => console.error(error))
})

//CREATE
// app.post

//UPDATE
// app.put


//DELETE
// app.delete

app.listen(2121, () => {
    console.log('Running bro!')
})
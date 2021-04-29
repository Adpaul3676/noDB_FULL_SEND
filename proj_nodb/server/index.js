const express = require('express')
const app = express ()
app.use(express.json())

let crud = require('./controllers/CRUD.js')
let url = '/api/notes'

app.get (url, crud.getNotes)
app.post (url, crud.newNote)
app.put (`${url}/:id`, crud.updateNote)
app.delete (`${url}/:id`, crud.deleteNote)

let port = 4500

app.listen(port, console.log(`Comin at you live from ${port}`))
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')

const controller = require('./controller')

let app = express()

app.use(bodyParser.json())
app.use(cors())

app.get( '/api/getAnimals', controller.get )
app.delete( '/api/deleteAnimals/:id', controller.delete )
app.post( '/api/postAnimals', controller.post )
app.put( '/api/putAnimals/:id', controller.put )


let port = 3005;
app.listen(port, () => {
    console.log( `listening to port ${port}`)
} )
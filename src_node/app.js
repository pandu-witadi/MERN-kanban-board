//
//
const path = require("path")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")

const CF = require('./conf/conf_app')
const connectMongoDB = require('./db/mongodb-conn')

const app = express()

app.use( helmet() )  // security
app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded() )

if ( CF.server.ENV !== 'production' ) {
    const logger = require('morgan')
    app.use( logger('dev') )
}

// --- mongodb
mongoose.Promise = global.Promise
Promise.resolve(app)
    .then( connectMongoDB() )
    .catch( err => console.error.bind(console, `MongoDB connection error: ${JSON.stringify(err)}`) )


// use: route
app.use('/api/test',    require('./routes/test') )
app.use('/api',  require('./routes/project') )

// serve client
const frontEndPath = path.join(__dirname, '..', CF.frontEnd.path)
console.log(frontEndPath)
app.use( express.static(frontEndPath) )
app.get( ['/*'], function(req, res) {
        res.sendFile('index.html',  { root: frontEndPath } )
    }
)

module.exports = app

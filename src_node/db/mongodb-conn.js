//
//
const mongoose = require('mongoose')
const CF = require('../conf/conf_app')


const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(CF.mongoose.url,  CF.mongoose.options)
        console.log(`| MongoDB ... connected`)
        console.log(`| MongoDB URL: ${CF.mongoose.url}`)
        console.log(`| MongoDB host: ${conn.connection.host}`)
        console.log('|--------------------------------------------')
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectMongoDB

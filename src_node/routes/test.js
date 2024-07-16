//
//
const express = require('express')
const router= express.Router()

const CF = require('../conf/conf_app')
// const testController =require('../controllers/test')

router.get('/', async (req, res) => {
    try {
        curDate = new Date()
        strDate =
            curDate.getFullYear() + "-" +
            ('0' + (curDate.getMonth() + 1)).slice(-2) + "-" +
            ('0' + curDate.getDate()).slice(-2)

        return res.json({
            appName: CF.app.name,
            port: CF.server.port,
            environment: CF.server.ENV,
            appVersion: CF.app.version,
            serverDate: strDate,
            serverTime: curDate.toLocaleTimeString(),
            random: Math.random()
        })
    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports = router

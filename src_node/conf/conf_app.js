//
//
require('dotenv').config()

let CF = {
    app: {
        name: "MERN-project-management-01",
        version: "0.0.1"
    },
    server: {
        port: 9000,
        apiPath: '/api',
        ENV: 'development'
    },
    // mongodb setting
    mongoose: {
        options: {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        },
        // url : 'mongodb+srv://wamoo:wamoo@devconnector.jdg80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        url : 'mongodb://127.0.0.1:27017/project-management-01'
    },
    authentication_token_name: 'accessToken',
    jwt: {
        saltLength: 12,
        secret_str : "this-auth-token",
        token_exp:  60 * 60 * 24 * 7, // 60 minutes * 24 * 14
        refresh_token_exp:  60 * 60 * 24 * 14,
    },
    frontEnd: {
        path: '/client_react/build'
    },
    model : {
        user: {
            register_state: true,
            automated_active: true
        }
    }
}

CF.server.ENV = process.env.NODE_ENV || CF.server.ENV
CF.server.port = process.env.NODE_PORT || CF.server.port
CF.jwt.saltLength =  process.env.saltLength || CF.jwt.saltLength
CF.jwt.secret_str =  process.env.secret_str || CF.jwt.secret_str
CF.jwt.token_exp =  process.env.ACCESS_TOKEN_LIFE || CF.jwt.token_exp
CF.jwt.refresh_token_exp = process.env.REFRESH_TOKEN_LIFE || CF.jwt.refresh_token_exp

module.exports = CF

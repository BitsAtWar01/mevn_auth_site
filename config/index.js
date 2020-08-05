require('dotenv').config()

module.exports = {
    DB: process.env.NODE_ENV === 'production'? process.env.APP_ATLAS_DB : process.env.APP_DB,
    PORT: process.env.NODE_ENV === 'production'? process.env.PORT : process.env.APP_PORT,
    SECRET: process.env.APP_SECRET  
}
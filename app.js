const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000 || process.env.PORT;

//Initialize the app
const app = express();

//Middlewares
//Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
//Json Body Middleware
app.use(bodyParser.json());
//Serving Up Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Listen on Port
app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})
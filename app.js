const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const { connect } = require('mongoose');
const { success, error } = require('consola');

const { DB, PORT } = require('./config/index');

//Initialize the app
const app = express();

//Middlewares
//Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
//Json Body Middleware
app.use(bodyParser.json());
//CORS Middleware
app.use(cors());
//Serving Up Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Use Passport Middleware
app.use(passport.initialize());
require('./middlewares/passport')(passport);

//Bring In User Routes
const userRoutes = require('./routes/api/users');
//add Users Routes 
app.use('/api/users', userRoutes);

//Handling other requests to the SPA
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});



//Connection with the DB
const startApp = async () => {
    try {
        await connect(DB, {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        success({
            message: `Successfully connected to the Database: \n${DB}`,
            badge: true
        });
        //Start listening for the server on port
        app.listen(PORT, () => {
            success({
                message: `Server started on port ${PORT}`,
                badge: true
            });
        });
    } catch (err) {
        error({
            message: `Unable to connect to Database: \n${err}`,
            badge: true
        })
        startApp();
    }
}

startApp();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');


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

//Import Database Config
const db = require('./config/keys').mongoURI;

//Connect Database
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err =>{
    console.log(`Unable to connect to the database ${err}`)
});

//Bring In User Routes
const userRoutes = require('./routes/api/users');
//add Users Routes 
app.use('/api/users', userRoutes);

//Handling other requests to the SPA
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000 ;

//Listen on Port
app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})
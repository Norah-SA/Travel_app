// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
// Start up an instance of app

const app = express()

//port 
const port = 8000
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.listen(port, () =>{
    console.log(`Server running on : http://localhost:${port} `)
})

//get 

app.get('/getData', (req,res) =>{
    res.send(projectData).status(200).end()
})
app.post('/postData',(req,res) =>{
    projectData = {
        date: req.body.date,
        temp: req.body.main.temp,
        content: req.body.content
    }
    
    res.send(projectData).status(200).end()
})
//import packages
const express = require('express')
const morgan = require ('morgan')

//Configure out port
//Check if the port is set in the environment variable (if it exist, use this port), if not, then we default to 3000
const port = process.env.PORT || 3000

//case is important. by convention.

//create an instance of express application
const app = express()

//log all request
app.use(morgan('common'))

//GET?
app.get('/', (req, resp) => {
    //return HTML content
    resp.type('text/html')
    //set the status code
    resp.status (200)
    //send the response
    resp.send(`<h1> The current time is ${new Date()}</h1>`)


})

//Start our web application
app.listen(port, () => {console.info(`Starting application on port ${port} at ${new Date()}`)})
//need backtick instead of single or double quote for string to work in javascript
console.info(`port = ${port}`)     
// console.info(`port = ${process.env.PORT}`)     
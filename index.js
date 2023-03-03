// Import express
const express = require('express')
const app = express();


// Setup the port for the server
const port = 4000;


// When a get request is made to / or the default page
// display a message
app.get('/', (req, res) => 
  res.send(`Your node and express server is running on port: ${port}`)
);


//print a message to the console
app.listen(port, () => {
  console.log("restAPI is running on port: " + port);
});

// Specifies routes for different endpoints
// such as get, post, delete and put
const allRoutes = (app) => {

  // we use books to get a list of all books or post a new book
  app.route('/book')


  // get a request and issue a response for get
  .get((req, res) => 


    // the response is the message that is sent back
    res.send('Successful GET request.')
  )

  .post((req, res) => 
    res.send('Successful POST request.')
  );

  // we pass bookID to delete and update a specific book
  app.route('/book/:bookID')
  .delete((req, res) => 
    res.send('Successful DELETE request.')
  )
  .put((req, res) => 
    res.send('Succesful PUT request.')
  );
}


// export the allRoutes function so index.js can use it
export default allRoutes;
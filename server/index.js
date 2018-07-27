const express = require('express');
 bodyParser = require('body-parser');
 app = express()
 require('dotenv').config();

 const {PORT} = process.env;

 app.listen( PORT, () => {
     console.log(`listening on port: ${PORT}`);
     
 })


const express = require('express');
bodyParser = require('body-parser');
app = express()
require('dotenv').config();
massive = require('massive');
session = require('express-session');
const ct = require('./controller');


const { PORT, CONNECTION, SESSION_SECRET } = process.env;

app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
    
    

    
app.use(bodyParser.json());
app.post('/api/register', ct.register);
app.post('/api/login', ct.login);
app.get('/api/posts', ct.getPosts);
app.get('/api/search', ct.searchPosts);







massive(CONNECTION).then(dbSet => {
    app.set('db', dbSet)
})









app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);

})


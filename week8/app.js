//import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

// import { requestHandler } from './routes.js';
// const server = http.createServer(requestHandler);

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//middleware from the body-parser package - parses data from form into key value pair

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/products" method="POST"><input type="text" name="name"><button type=submit>Add product</button></form>'
    );
    // next();
});


app.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    // next();
});

app.use('/', (req, res, next) => {
    res.send('<h1>You bet!</h1>');
});

app.listen(3000)

// const server = http.createServer(app);
// server.listen(3000);


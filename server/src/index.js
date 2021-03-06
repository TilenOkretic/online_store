const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const error_hanfler = require('./error_handler');


//ROUTES
const products_route = require('../api/product.routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

app.use('/api/v1/products', products_route);


app.use(error_hanfler.notFound);
app.use(error_hanfler.errorHandler);



app.listen(3000, () => {
    console.log('Starting on port 3000!');
});
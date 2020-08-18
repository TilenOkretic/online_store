const express = require('express');
const bodyParser = require('body-parser');

const error_hanfler = require('./error_handler');


const app = express();

app.use(bodyParser.json());



app.get('/', (req,res) => {
    res.json({
        message: "Hello World!"
    })
})


app.use(error_hanfler.errorHandler);
app.use(error_hanfler.notFound);



app.listen(3000, () => {
    console.log('Starting on port 3000!');
});
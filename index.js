const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

//middleware
const logger = (req,res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger);
app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({extended:false}));

const router = require('./router/router');
app.use(router);

//router
app.use('/', router)



app.use(function (req, res, next){
    res.status(404).json({
        status :'failed',
        errors : 'not found'
    });
}

);

app.listen(port,() => console.log(`working at http://localhost:/${port}`))


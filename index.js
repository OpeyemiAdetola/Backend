const express = require('express');
const app = express();
const config = require('./config');
const Food = require('./models/Food');
const Offer = require('./models/Offer');
const Beverage = require('./models/Beverage');
const cors = require('cors');
app.use(cors());


config.authenticate().then(function () {
    console.log('Database is connected');
}).catch(function (err) {
    console.log(err);
});


//FOOD  ROUTE


app.get('/', function(req, res){
    var i = 0;
    var a=0;
    Food.create(req.body).then(function (result) {
        console.log(req.body)});
});
   



app.post('/', function (req, res) {
    Food.create(req.body).then(function (result) {
        console.log(req.body);
        res.redirect('/');
    }).catch(function (err) {
        res.send(err);
    });
});



app.delete('/:food_id', function (req, res) {
    let taskId = req.params.task_id;

    //Find the task by ID
    Food.findByPk(foodId).then(function (result) {

        if (result) {
            //Delete task from database
            result.destroy().then(function () {
                res.redirect('/');
            }).catch(function (err) {
                res.status(500).send(err);
            });
        }
        else {
            res.status(404).send('Task not found');
        }

    }).catch(function (err) {
        res.status(500).send(err);
    });
});


function custom_middleware(req, res, next) {
    console.log('welcome to the home page')
    next();
}

app.listen(5000, function () {
    console.log('Server running on port 5000...');
});
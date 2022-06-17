const express = require('express'); // to import express
const app = express(); // to create an app
const mysql = require('mysql'); // to import mysql
const myModule = require('./myModule');
const sequelize = require('./config');
const cors = require('cors');

app.use(cors());

const Food = require('./Models/food');
const Beverage = require('./Models/beverage');
const Offer = require('./Models/offer');
const Foodtype = require('./Models/foodtype');



app.use(express.urlencoded({ extended: false }));// for res.body to work
app.use(express.json()); // required if data from client is sent in a JSON format

//create a DB connection
let conn = mysql.createConnection({
    host: 'qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'jjg2a9gl405m55zf5',
    password: 'tw6nal2atinb30jp',
    database: 'w47ya69v92bjuqie'
});






//GET Routes
//FOOD
app.get('/', function (req, res) {
    let sql = `SELECT * FROM foods`;
    conn.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }

    });
});







//POST routes
app.post('/', function (req, res) {
    let foodData = req.body;
    let sql = `INSERT INTO foods (id,food_name, description, price, foodtype_id) VALUES ('${foodData.id}','${foodData.food_name}', '${foodData.description}', ${foodData.price},'${foodData.foodtype_id}')`;
    conn.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect('/');
        }

    });
});


//DELETE ROUTES

app.delete('/', function (req, res) {
    let foodData = req.body;
    let sql = `DELETE FROM foods (food_name, description, price, group_id) VALUES ('${foodData.food_name}', '${foodData.description}', ${foodData.price},'${foodData.group_id}')`;
    conn.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect('/');
        }

    });
});





function custom_middleware(req, res, next) {
    console.log('welcome to the home page')
    next();
};




app.listen(4000, function () {
    console.log('Server running on port 4000...');
}); // to create a web server


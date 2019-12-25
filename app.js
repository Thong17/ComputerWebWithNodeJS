const express = require('express');
const path = require('path');
const mysql = require('mysql');
const fs = require('fs');

const app = express();

// Connect to mysql database

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Load View
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Page
app.get('/', function(req, res){
    var navs = ["fa-apple", "fa-mobile", "fa-home", "fa-terminal"];
    res.render('index', {
        navs: navs
    });
});

// Read backgrounds foler
let items = fs.readdirSync('public/img/laptop');
console.log(items);

// Laptop Page
app.get('/laptop', function(req, res){
    var navs = ["fa-apple", "fa-mobile", "fa-home", "fa-terminal", "fa-mobile", "fa-home", "fa-terminal"];
    res.render('laptop', {
        items: items,
        navs: navs
    })
});

app.get('/phone', function(req, res){
    res.render('phone', {

    });
});

app.listen(1000, function(){
    console.log("Server started on port 1000...");
});
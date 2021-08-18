const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());
app.use(express.json());

const mysql = require('mysql');

// connecting to mysql
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'student'
});

db.connect((err) => {
    if (err) throw err;
    console.log('database connected');
})

// creating database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE student';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Database created");
    })
})

// creating table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE std_details(ID int AUTO_INCREMENT, Name varchar(15) NOT NULL, Address varchar(15), CGPA float(3,2), PRIMARY KEY(ID))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table created');
    })
})

// adding students
app.post('/addstudent', (req, res) => {

    const Name = req.body.Name;
    const Address = req.body.Address;
    const CGPA = req.body.CGPA;

    let sql = 'INSERT INTO std_details (Name, Address, CGPA) VALUES (?,?,?)';
    db.query(sql, [Name, Address, CGPA], (err, result) => {
        if (err) throw err;
        console.log('Student info added');
    })
})

// get all students
app.get('/', (req, res) => {
    let sql = 'SELECT * FROM std_details';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.listen(5000, () => {
    console.log(`server running`)
})
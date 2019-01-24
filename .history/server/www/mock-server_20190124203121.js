const express = require('express');
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*Login-Auth User Details */
const Login = {
    username : new Array ("Administrator","Manager","Developer"),
    password : new Array ("password","password","password")
}

app.get('/mock/mock-login-auth',(req,res) => {
    console.log(req);  
    console.log(req.query.username);  
    console.log(req.query.password);
    if(Login.username.includes(req.query.username) && Login.password.includes(req.query.password)){
        res.send(true);  
    }
    else {
        res.send(false); 
    }  
}); 

/* Dashboard Primary Data */
const primary_data = {
    id :  10 
}

app.get('/mock/mock-primary', (req, res) => res.send(primary_data))

/* Dashboard Green Data */
const green_data = {
    id : 15
}

app.get('/mock/mock-green',(req,res) => res.send(green_data))

/* Dashboard Yellow Data */
const yellow_data = {
    id : 20
}
app.get('/mock/mock-yellow',(req,res) => res.send(yellow_data))

/* Dashboard Red Data */
const red_data={
    id : 25
}
app.get('/mock/mock-red',(req,res) => res.send(red_data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
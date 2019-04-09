    const express = require('express');
    const jwt = require('jsonwebtoken');
    const app = express()
    const port = 3000

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        next();
    });

    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    var router = express.Router();
    /*Sql database Connection */

    const mysql = require('mysql');
    const conn = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '123456',
      database : 'db_call-log-mgt'
    });    
    conn.connect(function(err){
        (err)?console.log(err):console.log(/*conn*/)+JSON.stringify(err,undefined,2);
    }); 

/*Service to post data from screen and save in database */
    app.post('/mock/mock-calllogfrm',(req,res) => {
       
        console.log(req.body.timeofcall); 
        console.log(req.body.callpriority);
        console.log(req.body.callseverity);  
        var calllog = {
            uname       : req.body.name,
            phonenumber : req.body.phone_number,
            timeofcall  : new Date(),
            vlan        : req.body.vlan,
            zone        : req.body.zone,
            user_id     : req.body.user_id,
            location    : req.body.location,
            reportedby  : req.body.reported_by,
            callpriority: req.body.call_priority,
            callseverity: req.body.call_severity
        }    
       // console.log(req.body.name);
        conn.query('INSERT INTO tb_calllogfrm SET ?', calllog, function (err, res) {
        
        
           if(!err)
        
          console.log("Success"); 
           else
           console.log(err);
          });
    });
/*Service to get data from database to table(call-log-view) */

    app.get('/mock/mock-calllogview',(req,res)=>{
        conn.query('SELECT * FROM tb_calllogfrm',(err,rows,fields)=>{
            if(!err)
            res.send(rows);
            //console.log("Success");
           else
           console.log(err);
          });

  });

  /* Servive to post data from screen to database of inventory.html 
  app.post('/mock/mock-inventory',(req,res)=>{
   //console.log(req.body.stock_name); 
 
      var inv = {
        stock_name : req.body.stock_name,
        username : req.body.username,
        quantity : req.body.quantity,
        transition_type : req.body.transition_type,
        date : req.body.date,
        discription : req.body.discription
      }
      conn.query('INSERT INTO tb_transition SET ?', inv ,function(err,res){
        if(!err)
        
        console.log("Success"); 
         else
         console.log(err);
        });
      });
      */


/*Login-Auth User Details */ 
const Login = {
    id : new Array(1,2,3),
    usernames : new Array ("Administrator","Manager","Developer"),
    passwords : new Array ("password1","password2","password3")
}

app.get('/mock/mock-login-auth',(req,res) => {

    var valid=false;
    for(var i = 0; i < Login.usernames.length; i++){
    if((req.query.username)==Login.usernames[i] && (req.query.password)==Login.passwords[i]){
        valid=true;
        
         break;
    } 
};
res.send(valid);
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
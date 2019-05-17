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

    const { Client } = require('pg')
    const conn = new Client({
      host     : '127.0.0.1',
      user     : 'postgres',
      password : '123456',
      database : 'postgres'
    });    

    
    conn.connect(function(err){

        (err)?console.log(err):console.log(/*conn*/)+JSON.stringify(err,undefined,2);
    }); 

/*Service to post data from screen and save in database */
    app.post('/mock/mock-calllogfrm',(req,res) => {
       
        let date = new Date();
            date = date.toISOString().slice(0,10);
        
       const query = {
        text: 'INSERT INTO tb_calllogfrm(uname,phonenumber,timeofcall,location,assigned_to,callpriority,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING call_log_id',
        values: [ req.body.name, req.body.phone_number,new Date(),req.body.location,'',null,req.body.user_id],
      }
      conn.query(query, (err, result) => {
           if(!err){
               if(result!=null && result.rows.length > 0 && result.rows[0].call_log_id != null){
                    console.log("Success %o" ,result.rows[0].call_log_id);
                    res.send(JSON.stringify(result.rows[0].call_log_id));
               }else{
                    console.log("Failure");
               }
           } 
           else{
           console.log(err);
           }
          });
    });

/*Service to update call Log Form in database */
app.post('/mock/mock-calllogfrm2',(req,res) => {
       
    console.log(req.body.assigned_to); 
    console.log(req.body.call_priority);
   console.log(req.body.name);
   
   // console.log(req.body.name);
   const query = {
    text: "UPDATE tb_calllogfrm SET uname = $1,phonenumber= $2,timeofcall = $3, location = $4 ,assigned_to = $5,callpriority = $6,user_id = $7 where call_log_id = 106",
    values: [ req.body.name, req.body.phone_number,new Date(),req.body.location,req.body.assigned_to,req.body.call_priority,req.body.user_id],
  }
  conn.query(query,function(err,result){
    if(!err){
     console.log("Successfully updated on Call Log Form!!"); 
     res.send(result);
    }
     else
     {
       console.log(err);
     }
    })
});

/*Service to get data from database to table(call-log-view) */

    app.get('/mock/mock-calllogview',(req,res)=>{
        const query = {
            name: 'get-tb_calllogfrm',
            text: 'SELECT * FROM tb_calllogfrm',
            rowMode: 'array'
          }
          conn.query(query, (err, result) => {
            if (err) {
              console.error(err)
            } else {
                res.send(result.rows); 
            }
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
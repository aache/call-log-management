const express = require('express');
    const app = express()
    const port = 3001

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

    /* Servive to post data from screen to database of inventory.html */
  app.post('/mock/mock-inventory',(req,res)=>{
    console.log(req.body.stock_name); 
  
       var inv = {
         stock_id  : req.body.stock_id,
         username : req.body.username,
         quantity : req.body.quantity,
         transition_type : req.body.transition_type,
         date : new Date(),
         discription : req.body.discription
       }
       conn.query('INSERT INTO tb_transition SET ?', inv ,function(err,res){
         if(!err)
         
         console.log("Success"); 
          else
          console.log(err);
         });
       });
       app.listen(port, () => console.log(`Example app Inventory listening on port ${port}!`))
    
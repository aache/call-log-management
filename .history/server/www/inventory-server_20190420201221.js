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
    const { Client } = require('pg')
    const conn = new Client({
      host     : 'localhost',
      user     : 'postgres',
      password : '123456',
      database : 'postgres'
    });    

 /* Service to Inward post data from screen to database of inventory.html and also update quantity on stock-items.html */
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
        var upquery= "UPDATE tb_stock_inventory SET";
        upquery += "`quantity` = quantity + '" +req.body.quantity+"'";
        upquery += "WHERE `id`=" +req.body.stock_id+ "";
        console.log(req.body.quantity);
           conn.query(upquery,function(err,res){
            if(!err)
             console.log("Successfully updated on stock Items!!"); 
             else
             console.log(err);
            })
          if(!err)
           console.log("Success"); 
          else
          console.log(err);
         });
       });


        /* Service to Outward post data from screen to database of inventory.html and also update quantity on stock-items.html */
  app.post('/mock/mock-inventory-out',(req,res)=>{
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
        var upquery= "UPDATE tb_stock_inventory SET";
        upquery += "`quantity` = quantity - '" +req.body.quantity+"'";
        upquery += "WHERE `id`=" +req.body.stock_id+ "";
        console.log(req.body.quantity);
           conn.query(upquery,function(err,res){
            if(!err)
             console.log("Successfully updated on stock Items!!"); 
             else
             console.log(err);
            })
          if(!err)
           console.log("Success"); 
          else
          console.log(err);
         });
       });
       
       /*Service to post data from screen to database of Stock-Items */
       app.post('/mock/mock-stock-items',(req,res)=>{
        console.log(req.body.stock_name); 
         var stk ={
           stock_name : req.body.stock_name,
           quantity : req.body.quantity,
         }

         const query = {
          text: 'INSERT INTO tb_stock_inventory(stock_name, quantity) VALUES ($1, $2)',
          values: [ req.body.stock_name, req.body.quantity],
        }
        
        // callback
        conn.query(query, (err, res) => {
          if (err) {
            console.log(err.stack)
          } else {
            console.log(res.rows[0])
          }
        }) ;  

       });

       /* Service to get data from Database to Screen of Stock_Items */

       app.get('/mock/mock-stock-items-view',(req,res)=>{
         conn.query('SELECT * FROM tb_stock_inventory',(err,rows,fields)=>{
          if(!err)
          res.send(rows);
          //console.log("Success");
          else
          console.log(err);
         })
       })

       /* Service to delete data from Database and Screen of Stock_Items */
       app.get('/mock/mock-stock-items-del',(req,res)=>{
         console.log(req.query.stock_id);
         conn.query('DELETE FROM tb_stock_inventory where ? NOT IN (SELECT stock_id FROM tb_transition) ',{id :req.query.stock_id},(err,rows,fields)=>{
           if(!err)
           console.log("Deleted");
           else
           console.log(err);
         })
       });

       /*Service to select items from transition table on click of item name in stock-items.html */
       app.get('/mock/mock-stock-items-popup-view',(req,res)=>{
         conn.query('SELECT * FROM tb_transition where ?',{stock_id :req.query.stock_id},(err,rows,fields)=>{
           if(!err)
           res.send(rows);
           else
           console.log(err);
          })

       });
       app.listen(port, () => console.log(`Example app Inventory listening on port ${port}!`))
    
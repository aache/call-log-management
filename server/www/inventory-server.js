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
   
	conn.connect();
 /* Service to Inward post data from screen to database of inventory.html and also update quantity on stock-items.html */
  app.post('/mock/mock-inventory',(req,res)=>{
        
	const query = {
      text: 'INSERT INTO tb_transition(stock_id,username,quantity,transition_type,date,discription) VALUES ($1, $2,$3,$4,$5,$6)',
      values: [ req.body.stock_id, null,req.body.quantity,'INTWARD',new Date(),req.body.discription],
      }
	
    conn.query(query,function(err,res){
      const upquery = {
        text:"UPDATE tb_stock_inventory SET quantity = quantity + $1 WHERE stock_id = $2",
        values:[req.body.quantity,req.body.stock_id]
      } 
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
	      
       const query = {
        text: 'INSERT INTO tb_transition(stock_id,username,quantity,transition_type,date,discription) VALUES ($1, $2,$3,$4,$5,$6)',
        values: [ req.body.stock_id, req.body.username,req.body.quantity,'OUTWARD',new Date(),req.body.discription],
        }

      conn.query(query,function(err,res){
        const upquery = {
          text:"UPDATE tb_stock_inventory SET quantity = quantity - $1 WHERE stock_id = $2",
          values:[req.body.quantity,req.body.stock_id]
        } 
        console.log(req.body.quantity);
           conn.query(upquery,function(err,res){
            if(!err){
				console.log("Successfully updated on stock Items!!");
			}else{
				console.log(err);
				 }
			 
            });
          if(!err)
           console.log("Success"); 
          else
          console.log(err);
         });
		
       });
       
       /*Service to post data from screen to database of Stock-Items */
       app.post('/mock/mock-stock-items',(req,res)=>{
		
         const query = {
          text: 'INSERT INTO tb_stock_inventory(stock_name, quantity) VALUES ($1, $2)',
          values: [ req.body.stock_name, req.body.quantity],
        }
        
        // callback
        
        conn.query(query, (err, res) => {
          if (err) {
            console.log(err.stack)
          } else {
            console.log('Success')
          }
        }) ;  
		
       });

       /* Service to get data from Database to Screen of Stock_Items */

       app.get('/mock/mock-stock-items-view',(req,res)=>{
        
        const query_1 = {
          //name: 'get-stock-inventory',
          text: 'SELECT * FROM tb_stock_inventory',
          rowMode: 'array'
        }

         conn.query(query_1,(err,result)=>{
          if(!err){
          res.send(result.rows);
          }
          else {
          console.log(err);
          }
         });
		
       });

       /* Service to delete data from Database and Screen of Stock_Items */
       app.get('/mock/mock-stock-items-del',(req,res)=>{
		
         console.log("deleting stock ::: "+req.query.stock_id);
         
        const query = {
          text: "DELETE FROM tb_stock_inventory where stock_id = $1 and not exists (select stock_id from tb_transition where stock_id = $1)",
          values: [ req.query.stock_id],
        }
        conn.query(query, (err, res) => {
          if (err) {
            console.log(err.stack)
          } else {
            console.log('Success')
          }
        });
		
       });

       /*Service to select items from transition table on click of item name in stock-items.html */
       app.get('/mock/mock-stock-items-popup-view',(req,res)=>{
		
        const query2 = {
          //name: 'get-tb_transition2',
          text: "SELECT * FROM tb_transition where stock_id ="+req.query.stock_id,          
          rowMode: 'string'
        }
        conn.query(query2, (err, result2) => {
          if (err) {
            console.error(err)
          } else {
              res.send(result2.rows); 
          }
        });
        
       });
       app.listen(port, () => console.log(`Example app Inventory listening on port ${port}!`))
    
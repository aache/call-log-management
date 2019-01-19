const express = require('express');
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const primary_data = {
    id :  150 
}

/* Dashboard Primary Data */
app.get('/mock/mock-primary', (req, res) => res.send(primary_data))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
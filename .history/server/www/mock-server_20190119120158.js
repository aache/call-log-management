const express = require('express');
const app = express()
const port = 3000

const primary_data = {
    value :  100 
}
app.get('/', (req, res) => res.send(primary_data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
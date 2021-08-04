const express = require('express');
const app = express();
const path = require('path')
// parse incoming data on the body used under req.body
const bodyParser = require('body-parser');

// parse JSON that much Content-Type: application/json
app.use(bodyParser.json());
// parse url-encoded without qs
app.use(bodyParser.urlencoded({extended: false}));

// enable cors machinsem to restricted from other domian
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));
app.get("/", (req,res)=>{
    res.status(200).sendFile("dist/index.html")
})
// fireUP the server on PORT 3000 
const PORT = process.env.PORT || 3000;
app.listen(PORT,listen);

function listen(){
    console.log(`server listening on port ${PORT}`)
}
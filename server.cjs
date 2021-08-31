const express = require('express')
const data = require('./categories.json')
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));




const port = process.env.port || 8080;

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json());

app.get("/", (req,res)=>{
    res.send(data);
})

app.listen(port, ()=>console.log(`listening port on ${port}`))
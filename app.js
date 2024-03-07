const express = require("express");
const app  = express();
const db = require("./db/db_connection");
const port = 3003;


app.set("views", __dirname + "/views");
app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

//lets express use our url 
app.use(express.urlencoded({extend: false}));

// Define rout to home page
app.get("/", (req,res) => {res.render("index")});

app.listen(port, () => {
    console.log(`App server listening on ${port}. Go to http://localhost:${port}`);
});
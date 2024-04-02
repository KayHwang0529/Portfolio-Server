const express = require("express");
const app  = express();
const port = 3003;


app.set("views", __dirname + "/views");
app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

//lets express use our url 
app.use(express.urlencoded({extend: false}));

// Define rout to home page
app.get("/", (req,res) => {res.render("index")});
app.get("/projects", (req,res) => {res.render("projects")});
app.get("/art", (req,res) => {res.render("art")});
app.get("/resume", (req,res) => {res.render("resume")});


app.listen(port, () => {
    console.log(`App server listening on ${port}. Go to http://localhost:${port}`);
});


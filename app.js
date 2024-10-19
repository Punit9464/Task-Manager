const express = require("express");
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));
app.set("views", path.join(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("tasks/index.ejs");
});

app.listen(port, () => {
    console.log("Server is Listening to the Port:", port + "\nhttp://localhost:"+port);
});
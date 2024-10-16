const express = require("express");
const port = 3000;
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req,res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log("Server is Listening to the Port:", port);
});
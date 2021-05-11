const fs = require("fs");
const path = require("path");
const requests = require("requests");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "/public");

//Setting the View Engine to render dynamic content
app.set("view engine", "hbs");

app.use(express.static(staticPath)); //middle-ware to serve static files(css and app.js)

app.get("/", (req, res) => {
	res.render("index");
});
app.get("/*", (req, res) => {
	res.render("error");
});

app.listen(3000, () => {
	console.log("Listning to port 3000");
});

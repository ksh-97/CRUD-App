const connectDB = require("./connection");
const path = require("path");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const routes = require("./routes");

//Connecting to Database
connectDB();

const app = express();

app.use(bodyparser.urlencoded({
    extended : true
}));

app.set('views', path.join(__dirname, "./views/"));

app.engine(".hbs", expressHandlebars.engine ({
    extname: ".hbs",
     defaultLayout: "mainlayout",
     handlebars: allowInsecurePrototypeAccess(Handlebars),
     layoutsDir: __dirname + "/views/layouts"
}));

app.set("view engine", ".hbs");

app.use("/course", routes);

app.get("/", (req, res) => {
   res.render("index", {});
})


const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));

var express = require("express"); var app = express();
var body_parser = require("body-parser");
var mongoose = require("mongoose");

global.Promise = require("bluebird");

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

const Product = require("./routes/product.route");
app.use("/products", Product);

let dev_db_url = "mongodb+srv://myufa:Michael14@cluster0-0z8lp.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error: '));

let port = 1234;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
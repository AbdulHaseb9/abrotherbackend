const express = require("express");
const dbconnect = require("./config/db");
const register = require("./controllers/register");
const login = require("./controllers/login");
var cors = require("cors");
require("dotenv").config();

// import multiple functions
const productcontrol = require("./controllers/productcontrol");

const app = express();

dbconnect();

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("Abrothers E-Commerce Web App Backend");
});

app.post("/register", register);

app.post("/login", login);

// Product post api route
app.post("/postproduct", productcontrol.productpost);

// Product get api route
app.get("/getproduct", productcontrol.getproduct);

app.listen(process.env.PORT, () => {
  console.log("server is running at", process.env.PORT);
});

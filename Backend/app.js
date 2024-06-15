const express = require('express');
const cors = require("cors");
const { db } = require('./db/db');

require('dotenv').config()
const app = express();
const PORT = process.env.PORT 

//middlewears 
app.use(express.json())
app.use(cors())

// test api
// app.get('/', (req, res) => {
// 	res.send("welcome , here we start a new project ")
// })

//routes

const transactionRoute = require("./routes/transaction")

app.use("/api/transaction" , transactionRoute)

const sever = () => {
	db()
	app.listen(PORT, () => {
		console.log("you are  listening to port📡 :" , PORT)
	})
}

sever()
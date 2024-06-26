const mongoose = require('mongoose') 
const expenseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true, 
		trim: true, 
		maxLength : 50 ,
	},
	amount: {
		type: Number,
		required: true, 
		trim: true, 
		maxLength : 50 ,
	},
	type: {
		type: String,
		default:"Expense"
	},
	date: {
		type: Date,
		required: true, 
	},
	category: {
		type: String,
		required: true, 
		trim: true, 
		maxLength : 50 ,
	},
	description: {
		type: String,
		required: true, 
		trim: true, 
		maxLength : 50 ,
	},
}, { timestamps: true })
module.exports = mongoose.model("expense" , expenseSchema) 

const expenseSchema = require("../models/expenseModel");

// add expense

exports.addExpense = async (req, res) => {
	const { title, amount, type, date, category, description } = req.body
	
	const expense = expenseSchema({ title, amount, type, date, category, description }) 
	
	try {

		// validation for expense  data

		if (!title || !date || !category || !description) {
			return res.status(400).json({ message : " A field are required , Sorry 🙏" })
		} 
		if (!amount === "number" || amount < 0) {
			return res.status(400).json({message : "Amount must required and it must be a postive number 🤦‍♂️ "})
		}

		// save the expense data

		await expense.save()
		res.status(200).json({message : "your expense added successfully ✅"})
	} catch (error) {
			res.status(500).json({message:"oops! sever error something went wrong 😢"})
		
	}
}

// get all expense 
exports.getExpenses = async (req, res) => {
	 try {
		 const expenses = await expenseSchema.find().sort({ createdAt: -1 })
		 res.status(200).json(expenses)
	 } catch (error) {
		res.status(500).json({message : "oops ! sever error something went wrong 😢"})
	 }
}
 
// delete expense

exports.deleteExpense = async (req, res) => {
	const { id } = req.params;
	expenseSchema.findByIdAndDelete(id)
		.then((expense) => {
		res.status(200).json({ meaasge: "expense deleted successfully ✅" })	
		})
		.catch((error) => {
			res.status(500).json({message :"oops! sever error something went wrong 😢"})
		})
	
}
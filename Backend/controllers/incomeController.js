const incomeSchema = require("../models/incomeModel");

// add incomes

exports.addIncome = async (req, res) => {
	//  console.log("Request Body:", req.body);
	const { title, amount, type, date, category, description } = req.body;
	const income = incomeSchema({ title, amount, type, date, category, description })
	
	try {

		// validation for  income data

		if (!title || !date || !category || !description) {
			return res.status(400).json({message:"Sorry ! all field are required 🙏"})
		}
		if (amount < 0 || !amount === "number") {
			return res.status(400).json({message:"Amount must required and it must be a postive number  🤦‍♂️"})
		}
		//save  income data

		await income.save()
		res.status(200).json({message:"your income added successfully ✅"})
	} catch (error) {
		res.status(500).json({message:"oops! sever error something went wrong 😢"})
		
	}
	// console.log("test1" ,income);
}

//get all incomes 
exports.getIncomes = async (req, res) => {
	try {
		const incomes = await incomeSchema.find().sort({ createdAt: -1 })  // last element add will display top on the table 
		res.status(200).json(incomes);
	} catch (error) {
		res.status(500).json({message: "oops! sever error something went wrong 😢"})	
	}

}

// delete income 
exports.deleteIncome = async (req, res) => {
	const { id } = req.params;
	incomeSchema.findByIdAndDelete(id)
		.then((income) => {
			res.status(200).json({ message: "income deleted successfully ✅" });	
		})
		.catch((error) => {
			res.status(500).json({message:"oops! sever error something went wrong 😢"})
		})
}

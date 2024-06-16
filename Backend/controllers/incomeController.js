const incomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
	//  console.log("Request Body:", req.body);
	const { title, amount, type, date, category, description } = req.body;

	const income = incomeSchema({
		title,
		amount,
		type,
		date,
		category,
		description
	})

	//save and validate the incomedata

	try {
		// validation the data
		if (!title || !date || !category || !description) {
			return res.status(400).json({message:"Sorry ! all field are required 🙏"})
		}
		if (amount < 0 || !amount === "number") {
			return res.status(400).json({message:"sorry ! Amount must a postive number 🤦‍♂️"})
		}
		//save the data
		await income.save()
		res.status(200).json({message:"your income added successfully ✅"})
	} catch (error) {
		res.status(500).json({message:"oops! sever error something went wrong 😢"})
		
	}
	console.log("test1" ,income);
}

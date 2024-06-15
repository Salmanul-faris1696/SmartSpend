const mongoose = require('mongoose');
const db = async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.MONGO_URL)
		console.log("your Database connected successfully 🫠");
	} catch (error) {
		console.log("something went wrong ! failed to connect database 😢")
	}
}

module.exports = {db}
const {  getIncomes, deleteIncome, addIncome } = require('../controllers/incomeController');

const router = require('express').Router()

// test the router working
// router.get('/', (req, res) => {
// 	res.send("transaction router get ready! ✅");
// })

router.post('/add-income', addIncome);
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome);


module.exports = router;
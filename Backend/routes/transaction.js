const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseController');
const {  getIncomes, deleteIncome, addIncome } = require('../controllers/incomeController');

const router = require('express').Router()

// income routers 
router.post('/add-income', addIncome);
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome);

// expense routers
router.post('/add-expense', addExpense)
router.get('/get-expenses', getExpenses)
router.delete('/delete-expense/:id' , deleteExpense)



module.exports = router;
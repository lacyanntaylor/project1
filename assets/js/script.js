const form = document.querySelector('#transaction-form');
const incomeInput = document.querySelector('#monthlyIncome');
const expenseNameInput = document.querySelector('#expenseName');
const expenseAmountInput = document.querySelector('#expenseAmount');
const expenseList = document.querySelector('#expense-list'); // Corrected to include '#'
const totalAmountDisplay = document.querySelector('#total-amount'); // Corrected to include '#'

// Store the income expenses and total
let monthlyIncome = 0;
let totalExpenses = 0;
let expenses = [];

// Load data from localStorage
function loadFromLocalStorage() {
    const storedIncome = localStorage.getItem('monthlyIncome');
    const storedExpenses = localStorage.getItem('expenses');
    const storedTotal = localStorage.getItem('totalExpenses');

    if (storedIncome) {
        monthlyIncome = parseFloat(storedIncome);
        incomeInput.value = monthlyIncome;
        incomeInput.disabled = true;
    }

    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
    }

    if (storedTotal) {
        totalExpenses = parseFloat(storedTotal);
    }

    updateExpenseList();
    updateTotal();
}

// Function to save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('monthlyIncome', monthlyIncome);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('totalExpenses', totalExpenses);
}

// Function to add expenses
function addExpense(event) {
    event.preventDefault();

    const income = parseFloat(incomeInput.value);
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    // Validate inputs
    if (isNaN(income) || !expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please fill out all required fields");
        return;
    }

    // Setting monthly income
    if (monthlyIncome === 0) {
        monthlyIncome = income;
        incomeInput.disabled = true; // Disable income input after setting income
    }

    // Add expense to array
    const expense = {
        name: expenseName,
        amount: expenseAmount,
    };
    expenses.push(expense);

    // Update total
    totalExpenses += expenseAmount;

    // Update the display
    updateExpenseList();
    updateTotal();
    saveToLocalStorage(); // Save data to local storage

    // Clear inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
}

// Function to update expense list
function updateExpenseList() {
    if (expenseList) {
        expenseList.innerHTML = ''; // Clear previous entries
    }

    expenses.forEach(expense => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = expense.name;

        const amountCell = document.createElement('td');
        amountCell.textContent = `$${expense.amount.toFixed(2)}`;

        row.appendChild(nameCell);
        row.appendChild(amountCell);

        if (expenseList) {
            expenseList.appendChild(row);
        }
    });
}

// Function to update total amount
function updateTotal() {
    totalAmountDisplay.textContent = `$${totalExpenses.toFixed(2)}`;
}

// Add event listener to form submit
form.addEventListener('submit', addExpense);

// Load data from local storage on page load
window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

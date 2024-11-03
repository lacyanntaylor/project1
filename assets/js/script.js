const form = document.querySelector('#transaction-form');
const incomeInput = document.querySelector('#monthlyIncome');
const expenseNameInput = document.querySelector('#expenseName');
const expenseAmountInput = document.querySelector('#expenseAmount');
const expenseList = document.querySelector('expense-list');
const totalAmountDisplay = document.querySelector('total-amount');



//store the income expenses and total
let monthlyIncome = 0;
let totalExpenses = 0;
let expenses = [];

//function to add expenses

function addExpense(event) {
    console.log("test");
    event.preventDefault();

    const income = parseFloat(incomeInput.value);
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    //validate inputs
    if (!income || !expenseName || !expenseAmount || expenseAmount <= 0) {
        alert("please fill out all required fields");
        return;
    }

    //setting monthly income
    if (monthlyIncome === 0) {
        monthlyIncome = income;
        incomeInput.disabled = true; //disable income input after setting income
    }

    //add expense to array
    const expense = {
        name: expenseName,
        amount: expenseAmount,
    };
    expenses.push(expense);

    //update total
    totalExpenses += expenseAmount;
    //updateExpenseList();
   // updateTotal();

    //clear inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
   // navigateToPage();
}

//function to update expense list

function updateExpenseList() {
    if(expenseList){
    expenseList.innerHTML = ''; //clear table
    };
    expenses.forEach(expense => {
        const row = document.createElement('tr');

        const incomeCell = document.createElement('td');
        incomeCell.textContent = `$${monthlyIncome.toFixed(2)}`;

        const nameCell = document.createElement('td');
        nameCell.textContent = `$${expense.amount.toFixed(2)}`;

        const amountCell = document.createElement('td');
        amountCell.textContent = `$${expense.amount.toFixed(2)}`;

        row.appendChild(incomeCell);
        row.appendChild(nameCell);
        row.appendChild(amountCell);

        if(expenseList){
            expenseList.appendChild(row);
        }
    });
}

//function to update total amount 

function updateTotal() {
    totalAmountDisplay.textContent = totalExpenses.toFixed(2);
}



//const formData = {
   // monthlyIncome: incomeInput,
    //expenseName: expenseNameInput,
   // expenseAmount: expenseAmountInput,
//};

// storeLocalStorage(formData);

//add event listener to form submit
form.addEventListener('submit', addExpense);

//function openNewPage() { window.open("https://example.com", "_blank"); }
//function navigateToPage() { window.location.href = "expense.html";}
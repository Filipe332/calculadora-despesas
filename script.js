const expenses = [];

function addExpense() {
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    expenses.push({ amount, category });
    updateExpenses();
}

function updateExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    let total = 0;
    expenses.forEach(expense => {
        total += expense.amount;
        const li = document.createElement('li');
        li.textContent = `${expense.category}: R$ ${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('amount').value = '';
}

import React, { useState } from 'react';

function Budget() {
  // income and expenses state
  const [income, setIncome] = useState(2000);
  const [expenses, setExpenses] = useState([
    { id: 1, name: '', amount: '', value: 'New expense' },
    { id: 2, name: '', amount: '' },
    { id: 3, name: '', amount: '' },
  ]);

  // Calc total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + Number(expense.amount), 0);

  // Calc balance
  const balance = income - totalExpenses;

  //income change
  const handleIncomeChange = (e) => {
    setIncome(Number(e.target.value));
  };

  //expense name change
  const handleExpenseNameChange = (id, newName) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, name: newName } : expense
    ));
  };

  //expense amount change
  const handleExpenseAmountChange = (id, newAmount) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, amount: Number(newAmount) } : expense
    ));
  };

  const addExpense = () => {
    const newExpense = {
      id: expenses.length + 1, 
      name: 'New Expense',
      amount: 0,
    };
    setExpenses([...expenses, newExpense]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };


  
  return (
    <section id="budget">
      <h2>Budget</h2>


      <div className='backg'>
        <img src='images/11116.jpg' alt='background' style={{width:'100%'}}></img>
      </div>
      {/* Income Section */}
      <div className='data'>
        <div  style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <label>Income: </label>
            <input 
              type="number" 
              value={income} 
              onChange={handleIncomeChange} 
              style={{ width: '100px' }}
            />
          </div>
          <div>
            <h3>Total Income: ${income}</h3>
          </div>
        </div>

        {/* Expenses Section */}
        <table border="1" cellPadding="10" color='blue' style={{ width: '100%', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td>
                  <input 
                    type="text" 
                    value={expense.name} 
                    onChange={(e) => handleExpenseNameChange(expense.id, e.target.value)} 
                    style={{ width: '100%' }}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={expense.amount} 
                    onChange={(e) => handleExpenseAmountChange(expense.id, e.target.value)} 
                    style={{ width: '100%' }}
                  />
                </td>
                <td>
                  <button onClick={() => removeExpense(expense.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Expense Button */}
        <button onClick={addExpense} style={{ marginBottom: '20px', padding: '10px 20px', width: '100px' }}>
          Add New Expense
        </button>


        {/* Total Expenses and Balance */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3>Total Expenses: ${totalExpenses}</h3>
          </div>
          <div>
            <h3 className='balance'> ${balance}</h3>
          </div>
        </div>
      </div>
        
    </section>
  );
}

export default Budget;

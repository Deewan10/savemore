import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 


function Budget() {

  const getExpenseDetails = () => {
    return expenses.map(expense => ({
      name: expense.name,
      percentage: ((Number(parseNumber(expense.amount)) / totalExpenses) * 100).toFixed(2),
    }));
  };

  // Income and expenses state
  const [incomeItems, setIncomeItems] = useState([
    { id: 1, name: '', amount: '0', value: 'New income' },
    
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, name: '', amount: '0', value: 'New expense' },
    { id: 2, name: '', amount: '0' },
    { id: 3, name: '', amount: '0' },
  ]);

  const formatNumber = (number) => {
    if (number === '' || isNaN(number)) return '';
    return new Intl.NumberFormat('en-US').format(number);
  };
  
  const parseNumber = (formatted) => {
    return formatted.replace(/,/g, '');
  };
  
  

  const [showChart, setShowChart] = useState(false); // State to toggle pie chart


  // Calculate total income
  const totalIncome = incomeItems.reduce((total, item) => total + Number(item.amount), 0);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + Number(expense.amount), 0);

  // Calculate balance
  const balance = totalIncome - totalExpenses;

  const expenseDetails = getExpenseDetails();



  const downloadAsPDF = () => {
    const input = document.body; 

    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
        unit: 'px',
        format: [imgWidth, imgHeight],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('budget.pdf');
    }).catch(error => console.error("Error generating PDF:", error));
  };




  // Handle income name change
  const handleIncomeNameChange = (id, newName) => {
    setIncomeItems(incomeItems.map(item => 
      item.id === id ? { ...item, name: newName } : item
    ));
  };

  // Handle income amount change
  const handleIncomeAmountChange = (id, newAmount) => {
    setIncomeItems(incomeItems.map(item => 
      item.id === id ? { ...item, amount: newAmount } : item 
    ));
  };
  
  

  // Add new income row
  const addIncome = () => {
    const newIncome = {
      id: incomeItems.length + 1, 
      name: 'New Income',
      amount: '',
    };
    setIncomeItems([...incomeItems, newIncome]);
  };

  // Remove income row
  const removeIncome = (id) => {
    setIncomeItems(incomeItems.filter(item => item.id !== id));
  };

  // Handle expense name change
  const handleExpenseNameChange = (id, newName) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, name: newName } : expense
    ));
  };

  // Handle expense amount change
  const handleExpenseAmountChange = (id, newAmount) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, amount: newAmount } : expense 
    ));
  };
  
  

  // Add new expense row
  const addExpense = () => {
    const newExpense = {
      id: expenses.length + 1, 
      name: 'New Expense',
      amount: '',
    };
    setExpenses([...expenses, newExpense]);
  };

  // Remove expense row
  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Toggle pie chart display
  const toggleChart = () => {
    setShowChart(!showChart);
  };

 
  

  // Prepare data for the pie chart
  const pieData = {
    labels: [...expenses.map(expense => expense.name), balance > 0 ? 'Balance' : null].filter(Boolean),
    datasets: [
      {
        data: [...expenses.map(expense => Number(expense.amount)), balance > 0 ? balance : null].filter(Boolean),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#F7464A', '#46BFBD', '#FDB45C',
        ],
      },
    ],
  };


  


  

  

  



  return (
    <section id="budgt">
      

      <div className='budget'>
        <div className='backg'>
        <h2>Budget</h2>
          <img src='images/11116.jpg' alt='background' style={{width:'100%'}}></img>

          <button onClick={toggleChart} style={{ marginTop: '-10px', padding: '10px 20px' }}>
            {showChart ? 'Hide' : 'Analyze Result'}
          </button>
        </div>

        {/* Income Section */}
        <div className='data'>
          <h3>Income</h3>
          <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px', borderColor: '#5757ea' }}>
            <thead>
              <tr>
                <th>Income Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {incomeItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <input 
                      type="text" 
                      value={item.name} 
                      onChange={(e) => handleIncomeNameChange(item.id, e.target.value)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <input className='amt1'
                      type="number" 
                      value={item.amount} 
                      onChange={(e) => handleIncomeAmountChange(item.id, e.target.value)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <button className='btn' onClick={() => removeIncome(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red', paddingLeft: '5px' }}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          

          {/* Expenses Section */}
          <h3>Expenses</h3>
          <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px', borderColor: '#5757ea' }}>
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
                    <input className='amt'
                      type="number" 
                      value={expense.amount} 
                      onChange={(e) => handleExpenseAmountChange(expense.id, e.target.value)} 
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <button className='btn' onClick={() => removeExpense(expense.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red', paddingLeft: '5px' }}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='buttons'>
            <button onClick={addIncome} style={{ marginBottom: '20px', padding: '10px 20px', width: '100px' }}>
              Add New Income
            </button>

            <button className='btn2' onClick={addExpense} style={{ marginBottom: '20px', padding: '10px 20px', width: '100px' }}>
              Add New Expense
            </button>
          </div>

          {/* Total Income, Total Expenses, and Balance */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3>Total Income: ${formatNumber(totalIncome)}</h3>
            </div>
            <div>
              <h3>Total Expenses: ${formatNumber(totalExpenses)}</h3>
            </div>
          </div>
          <div>
            <h3 className='balance' style={balance <= 0 ? { color: 'red' } : {}}
            >Balance: ${formatNumber(balance)}</h3>
          </div>

          
        </div>
      </div>

      <div className='detailz'>
          
          {showChart && (
            <div className='pie' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className='pieChart'>
              <Pie
                data={{
                  labels: [...expenses.map(expense => expense.name), 'Balance'],
                  datasets: [{
                    data: [...expenses.map(expense => parseNumber(expense.amount)), balance > 0 ? balance : 0],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A','#df0eab', '#ff0000', '#8D6E63', '#15ff00', '#00b7ff', '#FFA726'],
                  }],
                }}
              />
              </div>
              <div className='det' style={{ marginLeft: '20px' }}>
                <h4>Expense Details</h4>
                <ul>
                  {expenseDetails.map(detail => (
                    <li key={detail.name}>
                      You spent {detail.percentage}% on {detail.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
      </div>

      <button onClick={downloadAsPDF} style={{ margin: '20px', padding: '10px 20px' }}>
        Download Result
      </button>
    </section>

    
  );
}

export default Budget;

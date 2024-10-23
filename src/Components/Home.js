import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();


  return (
    <div className='home'>
        <div className='grid one'>
            <div className='pixx'>
                <img src='images/11116.jpg' alt='background' style={{width:'90%'}}></img>
            </div>

            <div className='textarea'>
                <h2>Budget</h2>
                <p>A budgeting tool that helps users track their income and expenses, providing a clear picture of their financial situation. It enables users to create categories, manage their spending, and maintain a balanced budget for improved financial planning.</p>

                <button 
                    onClick={() => navigate('/budget')}
                    style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
                    Get Started
                </button>
            </div>
        </div>


        <div className='grid two'>
            <div className='pixx'>
                <img src='images/53402-removebg-preview.png' alt='background' style={{width:'90%'}}></img>
            </div>
   
            <div className='textarea'>
                <h2>Invoice & Inventory</h2>
                <p>This feature allows users to manage their product inventory efficiently, tracking stock levels, sales, and orders. The invoicing system generates professional invoices for clients, helping users streamline sales transactions and financial records.</p>

                <button 
                    onClick={() => navigate('/invoice')}
                    style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
                    Get Started
                </button>
            </div>
        </div>


        <div className='grid three'>
            <div className='pixx'>
                <img src='images/4005009.jpg' alt='background' style={{width:'90%'} }></img>
            </div>

            <div className='textarea'>
                <h2>Savings</h2>
                <p>A savings module helps users set aside funds for future goals. It provides insights into how much they’ve saved over time and helps them allocate a portion of their budget toward savings, ensuring they are financially prepared for upcoming expenses.</p>

                <button style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
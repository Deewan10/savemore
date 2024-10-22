import React from 'react'

function Home() {
  return (
    <div className='home'>
        <div className='grid one'>
            <div className='pixx'>
                <img src='images/11116.jpg' alt='background' style={{width:'80%'}}></img>
            </div>

            <div className='textarea'>
                <h2>Budget</h2>
                <p></p>

                <button style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
                    Get Started
                </button>
            </div>
        </div>


        <div className='grid two'>
            <div className='pixx'>
                <img src='images/53402.jpg' alt='background' style={{width:'80%'}}></img>
            </div>
   
            <div className='textarea'>
                <h2>Invoice & Inventory</h2>
                <p></p>

                <button style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
                    Get Started
                </button>
            </div>
        </div>


        <div className='grid three'>
            <div className='pixx'>
                <img src='images/4005009.jpg' alt='background' style={{width:'80%'} }></img>
            </div>

            <div className='textarea'>
                <h2>Savings</h2>
                <p></p>

                <button style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
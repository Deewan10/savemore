import React, { useState, useEffect } from 'react';
import './Home.css';
import { Shield, Users, Clock, Target, Calendar, BarChart3, CheckCircle, Star, FileText, PieChart, Calculator, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';


function Home() {
  const [, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trustPoints = [
    {
      icon: <Shield size={32} />,
      title: 'Regulated & secure',
      description: 'Licensed and monitored by financial authorities'
    },
    {
      icon: <Users size={32} />,
      title: 'Managed by professionals',
      description: 'Expert portfolio managers with 10+ years experience'
    },
    {
      icon: <Clock size={32} />,
      title: 'Withdraw anytime',
      description: 'Access your funds with no lock-in period'
    }
  ];

  const steps = [
    {
      icon: <Target size={40} />,
      title: 'Choose a fund',
      description: 'Pick a fund based on how much risk you\'re comfortable with. We explain each option in simple terms.'
    },
    {
      icon: <Calendar size={40} />,
      title: 'Invest at your pace',
      description: 'Start small. Add money anytime. Choose between one-time investments or automatic monthly contributions.'
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'We manage everything',
      description: 'Your money is professionally invested and continuously monitored. You can relax while we do the work.'
    }
  ];

  const funds = [
    {
      color: 'green',
      name: 'Safe Fund',
      description: 'Best for beginners',
      details: 'Low risk. Slow but steady growth.',
      minInvestment: '₦5,000',
      riskLevel: 'Low'
    },
    {
      color: 'blue',
      name: 'Balanced Fund',
      description: 'For steady growth',
      details: 'Mix of safety and growth.',
      minInvestment: '₦10,000',
      riskLevel: 'Medium'
    },
    {
      color: 'purple',
      name: 'Growth Fund',
      description: 'For long-term goals',
      details: 'Higher returns over time.',
      minInvestment: '₦15,000',
      riskLevel: 'Higher'
    }
  ];

  const whyTrustUsPoints = [
    'Licensed and regulated by financial authorities',
    'Transparent fees. No hidden charges.',
    'Funds managed by experienced professionals',
    'Clear withdrawal rules. No surprises.',
    'Bank-level security for your data',
    '24/7 customer support available'
  ];

  const faqs = [
    {
      question: 'What is a mutual fund?',
      answer: 'A mutual fund pools money from many investors to buy a diversified mix of stocks, bonds, or other assets. This spreads out risk and lets you invest in many companies with a small amount of money.'
    },
    {
      question: 'Is my money safe?',
      answer: 'Your money is held with regulated financial institutions and invested in carefully selected assets. While all investments carry some risk, we focus on proven strategies and diversification to manage that risk.'
    },
    {
      question: 'What happens if the market goes down?',
      answer: 'Market fluctuations are normal. Our funds are designed for long-term growth, and we maintain diversified portfolios to weather market changes. Historically, markets have recovered and grown over time.'
    },
    {
      question: 'Can I withdraw anytime?',
      answer: 'Yes, you can withdraw your funds at any time. Withdrawals typically take 2-3 business days to process. There are no lock-in periods or early withdrawal penalties.'
    }
  ];

  const testimonials = [
    {
      text: 'I finally understand where my money is going. The platform makes everything clear and simple.',
      author: 'Chinedu O.',
      role: 'Teacher, Lagos'
    },
    {
      text: 'Started with ₦10,000 and have been adding monthly. Watching it grow gives me peace of mind.',
      author: 'Amina S.',
      role: 'Small Business Owner'
    },
    {
      text: 'No complicated terms, no pressure. Just straightforward investing that makes sense.',
      author: 'Tunde K.',
      role: 'Software Developer, Abuja'
    }
  ];

  return (
    <div className="home-app">
     

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Grow your money steadily, <span className="highlight">without the stress</span>
              </h1>
              
              <p className="hero-description">
                Invest in professionally managed funds designed for everyday people.
                No trading. No experience needed. Start with as little as ₦5,000.
              </p>
              
              <div className="hero-actions">
                <button className="hero-primary-button">
                  Start investing
                </button>
                <button className="hero-secondary-button">
                  Learn how it works
                </button>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="illustration-container">
                <div className="illustration-circle"></div>
                <div className="illustration-person">
                  <div className="person-head"></div>
                  <div className="person-body"></div>
                  <div className="money-growth">
                    <div className="coin coin-1">₦</div>
                    <div className="coin coin-2">₦</div>
                    <div className="coin coin-3">₦</div>
                  </div>
                </div>
                <div className="illustration-chart">
                  <div className="chart-line"></div>
                  <div className="chart-points">
                    {[1, 2, 3, 4, 5].map((point) => (
                      <div key={point} className="chart-point"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <div className="trust-strip">
          <div className="trust-strip-container">
            {trustPoints.map((point, index) => (
              <div key={index} className="trust-point">
                <div className="trust-icon">
                  {point.icon}
                </div>
                <div className="trust-content">
                  <h3 className="trust-title">{point.title}</h3>
                  <p className="trust-description">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <section className="how-it-works" id="how-it-works">
          <div className="section-container">
            <h2 className="section-title">Investing made simple</h2>
            <p className="section-subtitle">
              Three easy steps to start growing your wealth. No finance degree required.
            </p>
            
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-number">0{index + 1}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="investment-options" id="funds">
          <div className="section-container">
            <h2 className="section-title">Choose an investment that fits you</h2>
            <p className="section-subtitle">
              Each fund is professionally managed with clear objectives and risk levels
            </p>
            
            <div className="funds-grid">
              {funds.map((fund, index) => (
                <div key={index} className={`fund-card fund-${fund.color}`}>
                  <div className="fund-header">
                    <span className={`fund-badge badge-${fund.color}`}>
                      {fund.color === 'green' && '🟢'}
                      {fund.color === 'blue' && '🔵'}
                      {fund.color === 'purple' && '🟣'}
                      {fund.name}
                    </span>
                    <h3 className="fund-title">{fund.description}</h3>
                  </div>
                  
                  <div className="fund-body">
                    <p className="fund-details">{fund.details}</p>
                    
                    <div className="fund-specs">
                      <div className="spec">
                        <span className="spec-label">Minimum investment:</span>
                        <span className="spec-value">{fund.minInvestment}</span>
                      </div>
                      <div className="spec">
                        <span className="spec-label">Risk level:</span>
                        <span className="spec-value">{fund.riskLevel}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="fund-actions">
                    <button className="learn-more-button">Learn more</button>
                    <button className="invest-button">Start investing</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="why-trust-us">
          <div className="section-container">
            <h2 className="section-title">Your money deserves trust</h2>
            <p className="section-subtitle">
              We operate with complete transparency and put your security first
            </p>
            
            <div className="trust-grid">
              <div className="trust-content">
                <div className="trust-points">
                  {whyTrustUsPoints.map((point, index) => (
                    <div key={index} className="trust-point-item">
                      <CheckCircle className="check-icon" size={20} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="trust-visual">
                <div className="trust-card">
                  <div className="card-shield">🛡️</div>
                  <h3 className="card-title">Secure & Protected</h3>
                  <p className="card-text">
                    Your investments are held with regulated custodians and protected by industry-leading security measures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>




      <section className="utility-tools">
        <div className="section-container">
          <h2 className="section-title">Free Tools for Smarter Money Management</h2>
          <p className="section-subtitle">
            Beyond investing, we provide practical tools to help you manage your finances effectively.
          </p>
          
          <div className="tools-grid">
            {/* Invoice Generator Card */}
            <div className="tool-card">
              <div className="tool-header">
                <div className="tool-icon invoice-icon">
                  <FileText size={32} />
                </div>
                <h3 className="tool-title">Invoice Generator</h3>
              </div>
              
              <div className="tool-body">
                <p className="tool-description">
                  Create professional invoices in minutes. Perfect for freelancers, small businesses, and side hustles.
                </p>
                
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-check">✓</span>
                    <span>Customizable templates</span>
                  </div>
                  <div className="feature">
                    <span className="feature-check">✓</span>
                    <span>Automatic calculations</span>
                  </div>
                  <div className="feature">
                    <span className="feature-check">✓</span>
                    <span>Export to PDF/Excel</span>
                  </div>
                </div>
              </div>
              
              <div className="tool-actions">
                <Link to="/invoice" className="tool-button primary-tool-button">
                  Generate Invoice
                </Link>
                <Link to="" className="tool-link">
                  View templates →
                </Link>
              </div>
            </div>
            
            {/* Budget Planner Card */}
            <div className="tool-card">
              <div className="tool-header">
                <div className="tool-icon budget-icon">
                  <PieChart size={32} />
                </div>
                <h3 className="tool-title">Budget Planner</h3>
              </div>
              
              <div className="tool-body">
                <p className="tool-description">
                  Plan your monthly budget, track expenses, and achieve your financial goals with our smart planner.
                </p>
                
                <div className="tool-features">
                  <div className="feature">
                    <span className="feature-check">✓</span>
                    <span>Smart categorization</span>
                  </div>
                  <div className="feature">
                    <span className="feature-check">✓</span>
                    <span>Expense tracking</span>
                  </div>
                  <div className="feature">
                    <span className="feature-check">✓</span>
                    <span>Goal setting</span>
                  </div>
                </div>
              </div>
              
              <div className="tool-actions">
                <Link to="/budget" className="tool-button primary-tool-button">
                  Plan Budget
                </Link>
                <Link to="" className="tool-link">
                  How to use →
                </Link>
              </div>
            </div>
            
            {/* Coming Soon Card */}
            <div className="tool-card">
              <div className="tool-header">
                <div className="tool-icon future-icon">
                  <TrendingUp size={32} />
                </div>
                <h3 className="tool-title">More Tools Coming</h3>
              </div>
              
              <div className="tool-body">
                <p className="tool-description">
                  We're constantly developing new tools to help you manage and grow your wealth.
                </p>
                
                <div className="upcoming-tools">
                  <div className="upcoming-tool">
                    <Calculator size={18} />
                    <span>Tax Calculator</span>
                  </div>
                  <div className="upcoming-tool">
                    <FileText size={18} />
                    <span>Receipt Scanner</span>
                  </div>
                  <div className="upcoming-tool">
                    <PieChart size={18} />
                    <span>Investment Simulator</span>
                  </div>
                </div>
              </div>
              
              <div className="tool-actions">
                <button className="tool-button secondary-tool-button" disabled>
                  Coming Soon
                </button>
                <span className="tool-note">Suggest a tool →</span>
              </div>
            </div>
          </div>
          
          <div className="tools-cta">
            <p className="cta-text">
              All tools are <strong>completely free</strong> and designed to work seamlessly with your investment account.
            </p>
          </div>
        </div>
      </section>


        {/* Education */}
        <section className="education" id="learn">
          <div className="section-container">
            <h2 className="section-title">New to investing? You're not alone</h2>
            <p className="section-subtitle">
              Common questions answered in simple, jargon-free language
            </p>
            
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openFaq === index ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="social-proof">
          <div className="section-container">
            <div className="trust-badge">
              <div className="trusted-by">
                <Star size={20} fill="currentColor" />
                <span>Trusted by 20,000+ investors</span>
              </div>
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-details">
                      <span className="author-name">{testimonial.author}</span>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="section-container">
            <div className="cta-content">
              <h2 className="cta-title">Start small. Grow steadily.</h2>
              <p className="cta-subtitle">
                You don't need to know everything today.
                You just need to start.
              </p>
              
              <div className="cta-features">
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <span>No minimum balance required</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <span>Cancel anytime, no fees</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <span>First month completely free</span>
                </div>
              </div>
              
              <button className="cta-button">
                Get started in minutes
              </button>
              
              <p className="cta-note">
                It takes just 5 minutes to open your account and start investing
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">SaveMore</span>
              <p className="footer-tagline">
                Making investing simple, safe, and accessible for everyone
              </p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">Product</h4>
                <a href="#how-it-works" className="link">How It Works</a>
                <a href="#funds" className="link">Funds</a>
                <a href="#pricing" className="link">Pricing</a>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Learn</h4>
                <a href="#blog" className="link">Blog</a>
                <a href="#guides" className="link">Guides</a>
                <a href="#faq" className="link">FAQs</a>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Company</h4>
                <a href="#about" className="link">About Us</a>
                <a href="#careers" className="link">Careers</a>
                <a href="#contact" className="link">Contact</a>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">Legal</h4>
                <a href="#privacy" className="link">Privacy Policy</a>
                <a href="#terms" className="link">Terms of Service</a>
                <a href="#disclosures" className="link">Disclosures</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="disclaimer">
              Investments carry risk. Returns are not guaranteed. The value of your investment may go down as well as up. Please read all fund information carefully before investing.
            </p>
            
            <div className="copyright">
              <p>© {new Date().getFullYear()} SaveMore. All rights reserved.</p>
              <div className="regulatory">
                <span>Regulated by financial authorities</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Home() {

//     const navigate = useNavigate();


//   return (
//     <div className='home'>
//         <div className='grid one'>
//             <div className='pixx'>
//                 <img src='images/11116.jpg' alt='background' style={{width:'90%'}}></img>
//             </div>

//             <div className='textarea'>
//                 <h2>Budget</h2>
//                 <p>A budgeting tool that helps users track their income and expenses, providing a clear picture of their financial situation. It enables users to create categories, manage their spending, and maintain a balanced budget for improved financial planning.</p>

//                 <button 
//                     onClick={() => navigate('/budget')}
//                     style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
//                     Get Started
//                 </button>
//             </div>
//         </div>


//         <div className='grid two'>
//             <div className='pixx'>
//                 <img src='images/53402-removebg-preview.png' alt='background' style={{width:'90%'}}></img>
//             </div>
   
//             <div className='textarea'>
//                 <h2>Invoice & Inventory</h2>
//                 <p>This feature allows users to manage their product inventory efficiently, tracking stock levels, sales, and orders. The invoicing system generates professional invoices for clients, helping users streamline sales transactions and financial records.</p>

//                 <button 
//                     onClick={() => navigate('/invoice')}
//                     style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
//                     Get Started
//                 </button>
//             </div>
//         </div>


//         <div className='grid three'>
//             <div className='pixx'>
//                 <img src='images/4005009.jpg' alt='background' style={{width:'90%'} }></img>
//             </div>

//             <div className='textarea'>
//                 <h2>Savings</h2>
//                 <p>A savings module helps users set aside funds for future goals. It provides insights into how much they’ve saved over time and helps them allocate a portion of their budget toward savings, ensuring they are financially prepared for upcoming expenses.</p>

//                 <button style={{ padding: '10px 20px', margin: '15px', backgroundColor: '#5757ea', color: 'white', border: 'none' }}>
//                     Get Started
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home
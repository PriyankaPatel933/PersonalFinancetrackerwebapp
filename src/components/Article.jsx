import React from 'react';
import './financeTip.css'; // Import CSS file for styling

const FinanceTips = () => {
  // Sample data for 10 finance tips
  const financeTipsData = [
    {
      id: 1,
      article: "Create a Budget",
      description: "Start by tracking your income and expenses. A budget helps you understand where your money goes and allows you to plan for savings and investments."
    },
    {
      id: 2,
      article: "Establish an Emergency Fund",
      description: "Aim to save at least three to six months' worth of living expenses in a separate savings account. This fund acts as a safety net for unexpected expenses or job loss."
    },
    {
      id: 3,
      article: "Pay Off High-Interest Debt",
      description: "Prioritize paying off debts with high-interest rates, such as credit card debt. This reduces the amount you pay in interest over time and improves your financial health."
    },
    {
      id: 4,
      article: "Start Investing Early",
      description: "Take advantage of compound interest by starting to invest as early as possible. Even small amounts can grow significantly over time due to compounding."
    },
    {
      id: 5,
      article: "Understand Investment Options",
      description: "Learn about different investment vehicles such as stocks, bonds, mutual funds, and exchange-traded funds (ETFs). Consider your risk tolerance and investment goals when choosing investments."
    },
    {
      id: 6,
      article: "Diversify Your Investments",
      description: "Spread your investments across different asset classes and sectors to reduce risk. Diversification can help protect your portfolio from market volatility."
    },
    {
      id: 7,
      article: "Save for Retirement",
      description: "Contribute to retirement accounts such as a 401(k) or IRA. Take advantage of employer matching contributions if available, as they provide free money towards your retirement savings."
    },
    {
      id: 8,
      article: "Educate Yourself About Taxes",
      description: "Understand how taxes impact your income and investments. Learn about tax-advantaged accounts and deductions that can minimize your tax liability."
    },
    {
      id: 9,
      article: "Review and Adjust Regularly",
      description: "Periodically review your financial goals and investments. Adjust your budget, savings, and investment strategy as needed based on changes in your life or financial situation."
    },
  
  ];

  return (
    <div className="finance-tips-container">
      {financeTipsData.map((tip) => (
        <div key={tip.id} className="card">
          <div className="card-header">
            <h2>{tip.article}</h2>
          </div>
          <div className="card-body">
            <p>{tip.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceTips;

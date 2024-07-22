// EducationalResources.jsx
import React from 'react';
import ResourceCard from './ResourceCard';
import "./LearnCadr.css"
const LearnCard = () => {
  return (
    <div className="educational-resources">
      <h1>Educational Resources</h1>

      {/* Article Card */}
      <ResourceCard
        type="Article"
        title="Top 10 Finance Tips for Beginners"
        description="Learn essential finance tips to manage your money effectively."
        link="/financeTips"
      />

      {/* Tips Cards */}
      <ResourceCard
        type="Tip"
        title="Budgeting Tips: How to Save Money Every Month"
        description="Discover practical tips to create and stick to a budget."
        link="MonthlyBudget"
      />
      <ResourceCard
        type="Tip"
        title="Investing Tips: Getting Started in the Stock Market"
        description="Beginner's guide to investing in stocks and building wealth."
        link="https://example.com/tip2"
      />

      {/* Tutorials Cards */}
      <ResourceCard
        type="Tutorial"
        title="Personal Finance 101: Basics You Should Know"
        description="Introduction to personal finance and financial planning."
        
        link="https://example.com/tutorial1"
      />
      
      <ResourceCard
        type="Tutorial"
        title="How to Build an Emergency Fund: Step-by-Step Guide"
        description="Learn the importance of emergency funds and how to build one."
        link="https://example.com/tutorial2"
      />
      <ResourceCard
        type="Tutorial"
        title="Understanding Credit Scores and Improving Your Credit"
        description="Guide to understanding credit scores and improving your creditworthiness."
        link="https://example.com/tutorial3"
      />
    </div>
  );
}

export default LearnCard;

import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

import "./income.css";

const Incomes = () => {

  const [salaryTitle, setSalaryTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [reference, setReference] = useState("");
  const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);
  const [incomeList, setIncomeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetcIncomes();
  }, []);

  const fetcIncomes = async () => {
    try {
      const response = await fetch("http://localhost:5145/getIncome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ EventID: "1004", AddInfo: {} }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch Income. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response data:", data);

      if (data.result && data.result.rData && data.result.rData.Transition) {
        setIncomeList(data.result.rData.Transition);
        setError(null);
      } else {
        throw new Error(data.result.rMessage || "Transactions not found!!");
      }
    } catch (error) {
      setError(error.message || "An error occurred while trying to fetch transactions.");
      console.error("Error fetching transactions:", error);
    }
  };

      
  const handleIncomeSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      EventID:"1004",
      AddInfo:{
        SalaryTitle:salaryTitle,
        Amount:amount,
        Date:date,
        Reference:reference,
        
      }
    };


    try {
      const response = await fetch("http://localhost:5145/income", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("API response data:", data);

      if (response.ok && data.rData && data.rData.Transition) {
        setIsTransactionSuccess(true);
        alert(data.rMessage || "Transaction Faild!");
        fetcIncomes(); // Refresh transactions after successful transaction
      } else {
        alert(data.rMessage || "Transaction Successful!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to transaction.");
    }
  };

  if (isTransactionSuccess) {
    return <Navigate to="/" />;
  }




  return (
    <>
      <h1>Income</h1>
      <div className='flex'>
        <div className="totalincome">
          <form onSubmit={handleIncomeSubmit}>
            <div className="salary">
              <div>
                <input type="text" placeholder='Salary Title'
                id='salaryTitle'
                name='salaryTitle'
                value={salaryTitle}
                onChange={(e) => setSalaryTitle(e.target.value)}
                /><br/><br/>
                <input type="text" placeholder='Amount'
                id='amount' 
                name='amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                /><br/><br/>
                <input type="text" placeholder='Date'
                id='date'
                name='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                /><br/><br/>
                <textarea placeholder='Add Reference' cols="15" rows="3"
                id='reference' name='reference'
                value={reference}
                onChange={(e) => setReference(e.target.value)}
></textarea>
                <button className='bt' type='submit'>Add Income</button>

              </div>


              <div className="getSal">
                <p>Total Income</p>
                <table>
                  <thead style={{color:"black"}}>
                    <tr>
                      <th>Salary Title</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Reference</th>
                    </tr>
                  </thead>
                  {incomeList.map((income, index) => (
                   
                  <tbody key={index}>
                   {income.map((income2, idx) => (
                     <tr key={idx}>
                     
                     <td>{income2[1]}</td>
                  <td>{income2[2]}</td>
                  <td>{income2[3]}</td>
                  <td>{income2[4]}</td>
                  </tr>
              ))}

                   
                  </tbody>
                      ))}
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Incomes;

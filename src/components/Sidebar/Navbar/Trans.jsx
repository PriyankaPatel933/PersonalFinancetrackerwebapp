import React, { useState, useEffect } from "react";
import "./Transcation.css";

const Trans = () => {
    const [transactionList, setTransactionList] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchTransactions();
      }, []);

      
  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:5145/getallTransition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ EventID: "1004", AddInfo: {} }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch transactions. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response data:", data);

      if (data.result && data.result.rData && data.result.rData.Transition) {
        setTransactionList(data.result.rData.Transition);
        setError(null);
      } else {
        throw new Error(data.result.rMessage || "Transactions not found!!");
      }
    } catch (error) {
      setError(error.message || "An error occurred while trying to fetch transactions.");
      console.error("Error fetching transactions:", error);
    }
  };


    return (
        <>
     
     <div className="translist">
        <h1>
          Hello Adro! <span>Your Expenses are here</span>
        </h1>
        {error ? (
          <p>{error}</p>
        ) : (
          <table>
            <thead>
              <tr>
              {/* <th>idft_Transition</th> */}
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Payment Method</th>
                <th>Date</th>
              </tr>
            </thead>


            {transactionList.map((transaction, index) => (
            <tbody key={index}>
               {transaction.map((transaction12, idx) => (
                <tr key={idx}>
                   {/* <td>{transaction.idft_Transition}</td> */}
                  <td>{transaction12[1]}</td>
                  <td>{transaction12[2]}</td>
                  <td>{transaction12[3]}</td>
                  <td>{transaction12[4]}</td>
                  <td>{transaction12[5]}</td>
                </tr>
              ))}
            </tbody>
            ))}
          </table>
        )}
      </div>

        </>
    );
}

export default Trans;

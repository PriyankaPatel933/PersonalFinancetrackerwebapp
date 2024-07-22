import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Transcation.css";

const Transcation = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState("");
  const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);
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

  const handleTransactionSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      EventID: "1004",
      AddInfo: {
        Description: description,
        Amount: amount,
        Category: category,
        PaymentMethod: paymentMethod,
        Date: date,
      },
    };

    try {
      const response = await fetch("http://localhost:5145/transition", {
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
        fetchTransactions(); // Refresh transactions after successful transaction
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
      <div className="head">
        <h1>
          Hello!! <span>Welcome to Your finance tracker</span>
        </h1>
        <form onSubmit={handleTransactionSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <input
              type="text"
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit">Add Record</button>
        </form>
      </div>

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
};

export default Transcation;

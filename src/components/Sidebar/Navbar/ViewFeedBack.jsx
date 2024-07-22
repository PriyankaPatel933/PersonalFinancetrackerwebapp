import React, { useState, useEffect } from "react";

const ViewFeedBack = () => {

    const [transactionList, setTransactionList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTransactions();
      }, []);


      const fetchTransactions = async () => {
        try {
          const response = await fetch("http://localhost:5145/getAllFeedBack", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ EventID: "1002", AddInfo: {} }),
          });
    
          if (!response.ok) {
            throw new Error(`Failed to fetch FeedBack. Status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log("API response data:", data);
    
          if (data.result && data.result.rData && data.result.rData.Transition) {
            setTransactionList(data.result.rData.Transition);
            setError(null);
          } else {
            throw new Error(data.result.rMessage || "FeedBack not found!!");
          }
        } catch (error) {
          setError(error.message || "An error occurred while trying to fetch FeedBack.");
          console.error("Error fetching FeedBack:", error);
        }
      };


    return (
        <>

<div className="translists">
       
        {error ? (
          <p>{error}</p>
        ) : (
          <table>
            <thead>
              <tr>
              {/* <th>idft_Transition</th> */}
                <th>Question</th>
                <th>Name</th>
                <th>Email</th>
                <th>PhoneNo</th>
                <th>Messages</th>
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

export default ViewFeedBack;

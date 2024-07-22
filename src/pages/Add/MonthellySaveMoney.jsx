import React, { useEffect, useState } from 'react';
import "./Add.css"
const MonthellySaveMoney = () => {
    const [monthlySaveMoney, setMonthlySaveMoney] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMonthlySaveMoney();
    }, []);

    const fetchMonthlySaveMoney = async () => {
        try {
            const response = await fetch("http://localhost:5145/findSavemoney", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ EventID: "1002", AddInfo: {} }),
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch Tips. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API response data:", data);

            if (data.result && data.result.rData && data.result.rData.Transition) {
                setMonthlySaveMoney(data.result.rData.Transition);
                setError(null);
            } else {
                throw new Error(data.result.rMessage || "Tips not found!!");
            }
        } catch (error) {
            setError(error.message || "An error occurred while trying to fetch Tips.");
            console.error("Error fetching Tips:", error);
        }
    };

    return (
        <div className="monthly-save-money">
            <h1>Budgeting Tips: How To Save Money Every Month</h1>

            {error ? (
                <p>{error}</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Idea</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {monthlySaveMoney.map((tipArray, index) => (
                            tipArray.map((tip, idx) => (
                                <tr key={index + "-" + idx}>
                                    <td>{tip[1]}</td>
                                    <td>{tip[2]}</td> 
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MonthellySaveMoney;

import React, { useEffect, useState } from 'react';

const ViewallUser = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const requestData = {
            EventID: "1003",
            AddInfo: {},
        };

        try {
            const response = await fetch("http://localhost:5145/getAllUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch Users.");
            }

            const data = await response.json();
            console.log("API response data:", data);

            if (data.result && data.result.rData && data.result.rData.Users) {
                // Flatten the nested array structure into a single array of users
                const flattenedUsers = data.result.rData.Users.flat().map((user, index) => ({
                    UserID: user[0],
                    Name: user[1],
                    Email_Id: user[2],
                    Password: user[3],
                }));
                setUsers(flattenedUsers);
            } else {
                throw new Error(data.result.rMessage || "Users not found!!");
            }
        } catch (error) {
            setError(error.message || "An error occurred while trying to fetch Users.");
            console.error("Error fetching users:", error);
        }
    };

    if (error) {
        return <div className="error-message">Error: {error}</div>; // Render error message if there's an error
    }

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.UserID}>
                            <td>{user.UserID}</td>
                            <td>{user.Name}</td>
                            <td>{user.Email_Id}</td>
                            <td>{user.Password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewallUser;

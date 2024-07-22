import React from 'react';
import "./Forgot.css"
const ForgotPassword = () => {
    return (
        <>
         <div className='reset'>
            <h2>Reset Password</h2>
            <form>
                <label>
                    Enter your email address:
                    <input
                        type="email"
                     
                        placeholder="Your email"
                        required
                    />
                </label>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    
        </>
    );
}

export default ForgotPassword;

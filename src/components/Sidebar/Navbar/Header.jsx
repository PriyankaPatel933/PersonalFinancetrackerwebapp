import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header2'>
            <div className='header-contents6'>

            <h2>Wellcome to Finance Tracking App</h2>
                <h4>Tacke controle of your money</h4>
                <p> Personal budgeting is the secret to financial Freedom. Start your joureny Today</p>
                <button> <Link to="/signIn">SignIn</Link> /<Link to="/logIn">LogIn</Link></button>

            </div>
            
        </div>
    );
}

export default Header;
import React from 'react';
import Navbar from './components/Sidebar/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Incomes from './pages/Add/Incomes';
import SignIn from './components/Sidebar/Navbar/SignIn';
import LogIn from './components/Sidebar/Navbar/LogIn';
import Transaction from './components/Sidebar/Navbar/Transcation';
import UserProfile from './components/Sidebar/Navbar/UserProfile';
import Footer from './components/Sidebar/Navbar/Footer';
import AdminLogIn from './components/Sidebar/Navbar/AdminLogIn';
import AdminSignIn from './components/Sidebar/Navbar/AdminSignIn';
import MyProfile from './components/Sidebar/Navbar/MyProfile';
import ContactUs from './components/Sidebar/Navbar/ContactUs';
import ViewFeedBack from './components/Sidebar/Navbar/ViewFeedBack';
import ForgotPassword from './components/ForgotPassword';
import LearnCard from './components/Sidebar/Navbar/LearnCard';
import MonthellySaveMoney from './pages/Add/MonthellySaveMoney';
import Trans from './components/Sidebar/Navbar/Trans';
import ViewallUser from './components/Sidebar/Navbar/ViewallUser';
import Article from './components/Article';

const App = () => {

 


  return (
    <>
    <div>
      <ToastContainer/>
      <Navbar/>
      {/* <hr/>
      <div className='app-content'>
          <Sidebar/> */}
          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Sidebar' element={<Sidebar/>}/>
            <Route path='/income' element={<Incomes/>}/>
            <Route path='/signIn' element={<SignIn/>}/>
            <Route path='/logIn' element={<LogIn/>}/>
            <Route path='/adminlogin' element={<AdminLogIn/>}/>
            <Route path='/adminsignin' element={<AdminSignIn/>}/>

            <Route path='/trans' element={<Transaction/>}/>
            <Route path='/userprofile' element={<UserProfile/>}/>
            <Route path='/myprofile' element={<MyProfile/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path='/viewFeedBack' element={<ViewFeedBack/>}/>
            <Route path='/resetpassword' element={<ForgotPassword/>}/>
            <Route path='/learn' element={<LearnCard/>}/>
            <Route path='/MonthlyBudget' element={<MonthellySaveMoney/>}/>
            <Route path='/viewTrans' element={<Trans/>}/>
            <Route path='/allUser' element={<ViewallUser/>}/>
            <Route path='/financeTips' element={<Article/>}/>












  
          </Routes>

      </div>
      <Footer/>
   
    </>
  );
}

export default App;

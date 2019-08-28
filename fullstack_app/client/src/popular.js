import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Page.css';

class Users extends React.Component {



   header = () => {
      return (
         <div className="Header">
            <div className="websiteTitleContainer">
               <h1 className="websiteTitleText">
                  Chicken Nuggets
        </h1>
            </div>
            <Link to={'/popular'} className="LogIn">
               <p className="buttonText">LOG IN</p>
            </Link>
            <Link to={'/bestseller'} className="SignUp">
               <p className="buttonText">SIGN UP</p>
            </Link>
         </div>
      )
   }

   render() {
      return (
         <div className="container">
            <div className="Page">
               {this.header()}
               <div className="pageContent">

               </div>
            </div>
         </div>
      )
   }
}
export default Users
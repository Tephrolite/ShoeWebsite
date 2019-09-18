import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    return (
       <div className="Header">
          <Link to={'/'}className="websiteTitleContainer">
             <h1 className="websiteTitleText">Spoons: The Most Inferior Eating Utensil Known To Man</h1>
          </Link>
          <Link to={'/login'} className="LogIn">
             <p className="buttonText">LOG IN</p>
          </Link>
          <Link to={'/signup'} className="SignUp">
             <p className="buttonText">SIGN UP</p>
          </Link>
       </div>
    )
 }

 export default Header;
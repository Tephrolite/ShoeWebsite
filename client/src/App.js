// client/src/App.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import leftScrollButton from './Horizontal Scroll Button (Left Top).png';
import rightScrollButton from './Horizontal Scroll Button (Right Top).png';
import Shoe from './Jordan 1 Black Toe Satin.jpg';

class App extends Component {
   constructor(props) {
      super(props);

      let popularShoeIndex = 0;

      let popularShoes = [
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$120", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$130", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$140", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$150", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$160", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$170", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$180", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$190", imgSrc: Shoe },
      ]


      let bestSellerShoeIndex = 0;

      let bestSeller = [
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$200", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$210", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$220", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$230", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$240", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$250", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$260", imgSrc: Shoe },
         { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$270", imgSrc: Shoe },
      ]

      this.state = { popularShoes: popularShoes, bestSeller: bestSeller, popularShoeIndex: popularShoeIndex, bestSellerShoeIndex: bestSellerShoeIndex };
   }


   showNextPopular = () => {
      let index = this.state.popularShoeIndex;
      if (index < this.state.popularShoes.length - 4) {
         index++;
      }

      this.setState({ popularShoeIndex: index });
   }

   showPreviousPopular = () => {
      let index = this.state.popularShoeIndex;
      if (index !== this.state.popularShoes.length - 8) {
         index--;
      }

      this.setState({ popularShoeIndex: index });
   }

   showNextBestSeller = () => {
      let index = this.state.bestSellerShoeIndex;
      if (index < this.state.bestSeller.length - 4) {
         index++;
      }

      this.setState({ bestSellerShoeIndex: index });
   }

   showPreviousBestSeller = () => {
      let index = this.state.bestSellerShoeIndex;
      if (index !== this.state.bestSeller.length - 8) {
         index--;
      }

      this.setState({ bestSellerShoeIndex: index });
   }





   shoeContainer = (shoe) => {
      return (
         <div className="displayedShoe">
            <div className="shoeTile">
               <img src={shoe.imgSrc} alt="Ya Broke it" className="shoeImage"></img>
               <div className="infoContainer">
                  <div className="shoeName">{shoe.title}</div>
                  <div className="shoePrice">{shoe.price}</div>
               </div>
            </div>
         </div>
      )
   }

   header = () => {
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

   render() {

      console.log('THE RENDER FUNCTION HAS FIRED')

      return (
         <div className="container">
            <div className="Page">
               {this.header()}
               <div className="pageContent">
                  <div className="textContainer">
                     <div className="subtextContainer">
                        <div className="categoryTitle">Popular Brands</div>
                     </div>
                     <div className="textSeparator" />
                     <div className="subtextContainer2">
                        <Link to={'/popular'} className="moreDisplay">See All</Link>
                     </div>
                  </div>
                  <div className="displayRow">
                     <img src={leftScrollButton} onClick={() => { this.showPreviousPopular(); }} alt="Chicken Nuggets" className="scrollButton" />
                     <div className="shoeContainer">
                        {this.state.popularShoes.slice(this.state.popularShoeIndex, this.state.popularShoeIndex + 4).map((shoe) => { return this.shoeContainer(shoe) })}
                     </div>
                     <img src={rightScrollButton} onClick={() => { this.showNextPopular(); }} alt="Chicken Nuggets" className="scrollButton" />
                  </div>
                  <div className="textContainer">
                     <div className="subtextContainer">
                        <div className="categoryTitle">Best Sellers</div>
                     </div>
                     <div className="textSeparator" />
                     <div className="subtextContainer2">
                        <Link to={'/bestseller'} className="moreDisplay">See All</Link>
                     </div>
                  </div>
                  <div className="displayRow">
                     <img src={leftScrollButton} onClick={() => { this.showPreviousBestSeller(); }} alt="Chicken Nuggets" className="scrollButton" />
                     <div className="shoeContainer">
                        {this.state.bestSeller.slice(this.state.bestSellerShoeIndex, this.state.bestSellerShoeIndex + 4).map((shoe) => { return this.shoeContainer(shoe) })}
                     </div>
                     <img src={rightScrollButton} onClick={() => { this.showNextBestSeller(); }} alt="Chicken Nuggets" className="scrollButton" />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}


export default App;

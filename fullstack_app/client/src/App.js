// client/src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Page.css';
import leftScrollButton from './Horizontal Scroll Button (Left Top).png';
import rightScrollButton from './Horizontal Scroll Button (Right Top).png';
import Shoe from './Jordan 1 Black Toe Satin.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    let popularShoeIndex =0;

    let popularShoes = [
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "120", imgSrc: Shoe },
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "130", imgSrc: Shoe },
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "140", imgSrc: Shoe },
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "150", imgSrc: Shoe },
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "160", imgSrc: Shoe },
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "170", imgSrc: Shoe },
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "180", imgSrc: Shoe },
      {title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "190", imgSrc: Shoe },
    ]

    let bestSeller = [
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "500", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "156", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "190", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "100", imgSrc: Shoe },
    ]

    this.state = { popularShoes: popularShoes, bestSeller: bestSeller, popularShoeIndex: popularShoeIndex };
  }


  showNextPopular = () => {
    let index = this.state.popularShoeIndex;
    if( index < this.state.popularShoes.length - 4)
    {
      index++;
    }

    this.setState({popularShoeIndex: index});
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
              <img src={leftScrollButton} onClick={() => {  }} alt="Chicken Nuggets" className="scrollButton" />
              <div className="shoeContainer">
                {this.state.popularShoes.slice(this.state.popularShoeIndex,this.state.popularShoeIndex+4).map((shoe) => { return this.shoeContainer(shoe) })}
              </div>
              <img src={rightScrollButton} onClick={() => { this.showNextPopular(); console.log( this.state.popularShoeIndex)}} alt="Chicken Nuggets" className="scrollButton" />
            </div>
            <div className="textContainer">
              <div className="subtextContainer">
                <div className="categoryTitle"> Best Sellers</div>
              </div>
              <div className="textSeparator" />
              <div className="subtextContainer2">
                <Link to={'/bestseller'} className="moreDisplay">See All</Link>
              </div>
            </div>
            <div className="displayRow">
              <img src={leftScrollButton} onClick={() => { console.log("Herro") }} alt="Chicken Nuggets" className="scrollButton" />
              <div className="shoeContainer">
                {this.state.bestSeller.map((shoe) => { return this.shoeContainer(shoe) })}
              </div>
              <img src={rightScrollButton} onClick={() => { console.log("Herro") }} alt="Chicken Nuggets" className="scrollButton" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

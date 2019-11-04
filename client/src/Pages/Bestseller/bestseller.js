import React from 'react'
import './bestseller.css';
import Shoe from '../../Pictures/Jordan 1 Black Toe Satin.jpg';

class BestSellers extends React.Component {

  constructor(props) {
    super(props);

    let bestSeller = [
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$200", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$210", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$220", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$230", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$240", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$250", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$260", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$270", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$280", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$290", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$300", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$310", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$320", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$330", imgSrc: Shoe },
      { title: "Air Jordan 1 Retro High Satin Black Toe (W)", price: "$340", imgSrc: Shoe },
    ]


    let menShoeSizeStart = 5;
    let menShoeSizeEnd = 16.5;

    let shoeSizes = [];

    while (menShoeSizeStart <= menShoeSizeEnd ) {
      shoeSizes.push(menShoeSizeStart )
      menShoeSizeStart = menShoeSizeStart + .5;
    }

    this.state = { bestSeller: bestSeller, shoeSizes: shoeSizes };
  }

  filterShoeSize = (shoeSize, key) => {
    return (
      <label  className="filterBarShoeSizeLabelContainer" key={key}><input type="checkbox" id="filterBarShoeSizeCheckbox" />{shoeSize}</label>
    )
  }

  shoeContainer = (shoe, key) => {
    return (
      <div className="displayedShoe" key={key}>
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
  render() {
    return (
      <div className="container">
        <div className="Page">
          <div className="pageStuff">
            <div className="bestSellerPageContent">
              <div className="bestSellerShoeContainer">
                {this.state.bestSeller.map((shoe, shoeIndex) => { return this.shoeContainer(shoe, shoeIndex) })}
              </div>
            </div>
            <div className="filterBar">
              <div className="filterBarOptionsContainer">
                <div className="filterBarShoeSizes">
                  <button>Men's</button>
                  <button>Women's</button>
                  <button>Kid's</button>
                  {this.state.shoeSizes.map((shoeSize, shoeIndex) => { return this.filterShoeSize(shoeSize, shoeIndex) })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default BestSellers
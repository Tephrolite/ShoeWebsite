import React from 'react';

export function ShoeContainer (props)  {
    const shoe = props.shoe;
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
import React from 'react'
import { useParams } from 'react-router-dom'


export const ProductDetails = () => {

  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };

  const { productID } = useParams();
  const product = shoes[productID];

  if (!product) {
    return (<div>Shoe Not Found</div>);
  }
  const { name, img } = product;

  
  return (
    <div>
      <h3>Product Details</h3>
      <h4>{name}</h4>

      <img src={img} alt={name}></img>
    </div>
  )
}

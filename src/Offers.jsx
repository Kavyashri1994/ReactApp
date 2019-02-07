import React, { Component } from 'react';


class Offers extends Component {
  render() {
    return(
      <div className={"offer mt-5"}>
        <h3 className={" mt-2 mb-3"}>
          OFFERS
        </h3>
        <div className={"row"}>
        <div className={"column"}>
          <img src={"https://www.tillys.com/on/demandware.static/-/Sites-tillys-Library/default/dw6293d978/images/sale/default-sale/sale-30-50-off-mobile-01-02-19_01.jpg"} alt="Offer" className={"offer-img"}/>
        </div>
        <div className={"column"}>
          <img src={"https://images.milled.com/2015-03-20/qyz4HqDrGukURLNw/17hU_r__jJx5.gif"}
          alt="Offer" className={"offer-img"}/>
        </div>
        </div>
      </div>
    )
  }
}

export default Offers;
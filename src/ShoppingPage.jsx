import React, { Component } from 'react';
import girl from "./girl.jpg";
import women from "./women_saree.jpg";
import kurthis from "./girl_fas.jpg";
import bag from "./bag.jpg";
import kid from "./kides.jpg";

class ShoppingPage extends Component {
  render() {
    return(
    <div>
      <div className={"header-div"}>
        <img src={girl} alt={"Welcome"} className={"logo"}/>
        <div className={"title"}>
          <header className={"font-weight-bold header-label"}><h2>PrimoFashion</h2></header>
          <p style={{"font-size":"20px"}} className={"header-label"}>Sarees are for life. We are a saree design Company based in Bangalore <a href="#">(more)</a></p>
        </div>
        </div>
        <div className={"Shoppingcart-items row mt-4 ml-3"}>
          <div className={"item col-md-3"}>
            <img src={women} alt={"Women"} className={"img-main"}/>
            <h5 className={"mt-2"}>Sarees</h5>
          </div>
          <div className={"item col-md-3"}>
            <img src={kurthis} alt={"Girls"} className={"img-main"}/>
            <h5 className={"mt-2"}>Kurthis</h5>
          </div>
          <div className={"item col-md-3"}>
            <img src={bag} alt={"Bag"} className={"img-main"}/>
            <h5 className={"mt-2"}>Bags</h5>
          </div>
          <div className={"item col-md-3"}>
            <img src={kid} alt={"Kids"} className={"img-main"}/>
            <h5 className={"mt-2"}>Kids</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingPage;
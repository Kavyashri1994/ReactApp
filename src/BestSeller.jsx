import React, { Component } from 'react';
import bag from "./bag.jpg";

class BestSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          icon: bag,
          title: "Sarees"
        },
        {
          icon: bag,
          title: "Kurthi"
        },
        {
          icon: bag,
          title: "Tops"
        },
        {
          icon: bag,
          title: "FootWear"
        },
        {
          icon: bag,
          title: "Bags"
        },
        {
          icon: bag,
          title: "T-Shirts"
        },
        {
          icon: bag,
          title: "Jewellery"
        },
        {
          icon: bag,
          title: "Casual Shoes"
        }
      ]
    }
  }
  render() {
    let {items} = this.state;
    return(
      <div className={" mt-4 seller-main"}>
        <h2> BestSeller</h2>
      <div className={"card-columns seller mt-3"}>
        {items.map((item,i)=>
        <div className={"sellet-div card "}>
            <img src={item.icon} alt={"Bag"} className={"sellet-icon"}/>
            <h5 className={"mt-2"}>{item.title}</h5>
          </div>
        )}
      </div>
      </div>
    )
  }
}

export default BestSeller;
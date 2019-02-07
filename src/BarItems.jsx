import React, { Component } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";




class BarItems extends Component {
  render() {
    return(
      <div className={"bar"}>
      <div className={"row"}>
        <div className="bar-items col-md-4">
        <i className="fa fa-retweet " style={{"font-size":"150px","color":"gray"}}>
        </i>
        <span className={"items-bar"}>EASY RETURNS</span>
        </div>
        <div className=" col-md-4  ">
        <i className="fa fa-bell " style={{"font-size":"150px","color":"gray"}}>
        </i>
        <span className={"items-bar"}>FREE SHIPPING</span>
        </div>
        <div className=" col-md-4 ">
        <i className="fa fa-shopping-cart" style={{"font-size":"150px","color":"gray"}}>
        </i>
        <span className={"items-bar"}>SECURE PAYMENT</span>
        </div>
      </div>
      </div>
    )
  }
}

export default BarItems;
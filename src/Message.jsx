import React, { Component } from 'react';


class Message extends Component {
  render() {
    return(
      <div className={"mt-5 message"}>
        <h3 className={"mt-3"}> Our Customers Says</h3>
        <div className={"mt-4"}>
          <i className="fa fa-quote-left message-img" style={{"font-size":"100px","color":"lightgray"}}>
        </i>
        <p style={{"font-size":"30px"}} className={" message-text"}> We Are Manufacturing of Ethnic wear from Surath. We are Very happy with the reseller network we have been able to build on GlowRoad and the sales has been growing exponentially month to month :)</p>
        <p style={{"font-size":"20px" }} className={"message-text"}>-KIRTHI SAXENA, KANPUR</p>
        </div>
      </div>
    )
  }
}

export default Message;

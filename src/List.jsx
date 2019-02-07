import React, { Component } from 'react';


class List extends Component {

render() {
  let {title, items} = this.props;
  return(
    <div className={"List"}>
      <div className={"row"}>
      <h3 className={"col-md-6"}>{title}</h3>
      <a href={"/Products"} className={"list-more col-md-6"}>View More</a>
      </div>
      <div className={"row product-items mt-2"}>
          {items.map((item, i)=>
          <div className={"col-md-3 list-images"} key={i}>
            <img src={item.image_url} alt={"Image Not Found"} className={"images"}/>
            <div>
              <span className={"font-weight-bold"}>{item.brand}</span>
            <p>{item.title}</p>
            <span className={"font-weight-bold"}>Price: {item.price}</span>
            </div>
          </div>
          )}
        </div>
    </div>
  )
}

}

export default List;

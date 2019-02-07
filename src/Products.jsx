import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state= {
      sarees: [{
        "id": 1,
        "title": "craftsvilla Saree",
        "brand": "craftsvilla",
        "gender_id": "F",
        "image_url": "http://s3-ap-southeast-1.amazonaws.com/assets1.craftsvilla.com/blog/wp-content/uploads/2016/10/24125349/sarees_for_petite_women6.jpg",
        "price": "1,000",
        "Type": "Women"
      },

      {
        "id": 2,
        "title": "Saree Mall Saree",
        "brand": "Saree Mall",
        "gender_id": "F",
        "image_url": "https://5.imimg.com/data5/IT/VM/MY-559534/designer-saree-500x500.jpg",
        "price": "900",
        "Type": "Women"
      },
      {
        "id": 3,
        "title": "Colors Saree",
        "brand": "Colors",
        "gender_id": "F",
        "image_url": "https://cdn.shopclues.com/images/thumbnails/77758/320/320/133271063-77758123-1516388633.jpg",
        "price": "850",
        "Type": "Women"
      },
      {
        "id": 4,
        "title": "voonik Saree",
        "brand": "voonik",
        "gender_id": "F",
        "image_url": "https://images.voonik.com/12459192/navanya-couture-women-saree-printed-cotton-blended--product.jpg",
        "price": "10,000",
        "Type": "Women"
      }],
      kurthis: [{
        "id": 5,
        "title": "Yellow Kurtha",
        "brand": "Liva Fluid Fashion",
        "gender_id": "F",
        "image_url": "https://www.livafluidfashion.com/fashion-diary/wp-content/uploads/2017/11/LIVA-Kurti-Designs-Front-Slit-Kurti.jpg",
        "price": "1850",
        "Type": "Women"
      },
      {
        "id": 6,
        "title": "Kite designer Kurthi",
        "brand": "Styles",
        "gender_id": "F",
        "image_url": "https://stylesatlife.com/wp-content/uploads/2018/02/Kite-designer-kurti.jpg",
        "price": "850",
        "Type": "Women"
      },
      {
        "id": 7,
        "title": "Imra Pink Chudidar Set",
        "brand": "Imra",
        "gender_id": "F",
        "image_url": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2189120/2017/11/1/11509528980484-Rain--Rainbow-Women-Black--Pink-Printed-Kurta-with-Churidar--Dupatta-381509528980258-1.jpg",
        "price": "3,000",
        "Type": "Women"
      },
      {
        "id": 8,
        "title": "Ladies Fancy Cotton Kurtis",
        "brand": "Tistatic",
        "gender_id": "F",
        "image_url": "https://tiimg.tistatic.com/fp/thumb/4/005/120/ladies-fancy-cotton-kurtis-635.jpg",
        "price": "3,000",
        "Type": "Women"
      }],
      bags: [{
        "id": 9,
        "title": "Black Color Bag",
        "brand": "Rose",
        "gender_id": "F",
        "image_url": "https://gloimg.rowcdn.com/ROSE/pdm-product-pic/Clothing/2017/04/19/goods-img/1492574979792148380.jpg",
        "price": "3,000",
        "Type": "Women"
      },
      {
        "id": 10,
        "title": "Solid Color Design Tote Bag",
        "brand": "Horse Quencher",
        "gender_id": "F",
        "image_url": "http://www.horsequencher.co.uk/images/s2734/Discount%20Light%20Gray%20Stunning%20Metallic%20And%20Solid%20Color%20Design%20Tote%20Bag%20For%20Women%20Online%203711.jpg",
        "price": "3,000",
        "Type": "Women"
      },
      {
        "id": 11,
        "title": "Caprese Handbag",
        "brand": "Caprese",
        "gender_id": "F",
        "image_url": "https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/C7B047DF165B4418ADA3D69DD508EC58/204793579_9306_C7B047DF165B4418ADA3D69DD508EC58.jpg",
        "price": "3,000",
        "Type": "Women"
      }],
      kids: [
            {
              "id": 12,
              "title": "Pink Color Dress",
              "brand": "Colors",
              "gender_id": "K",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwJBJal3LaOOwxZE0j-UtXVOH5Y7iVmbBWJ4WCrcyN6XRGD1sMg",
              "price": "2,000",
              "Type": "Kid"
            },
            {
              "id": 13,
              "title": "Rose Red Party Dress",
              "brand": "Sweet couch",
              "gender_id": "K",
              "image_url": "https://ak0.scstatic.net/1/cdn2-cont13.sweetcouch.com/152470405724499489-toy-balloon-rose-girl-party-dress.jpg",
              "price": "2,000",
              "Type": "Kid"
            },
            {
              "id": 14,
              "title": "Kids Dresses",
              "brand": "Kit",
              "gender_id": "K",
              "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZq0TG0zLTmwUq9ri6zvFJdCdOKzJF8mhKwV_Vq2k4q10IsW-V",
              "price": "2,000",
              "Type": "Kid"
            }
      ],
      showAllProducts: false
    }

  }
  render() {
    let {items, onClickProducts, length} = this.props,
      {sarees, kurthis, bags, kids}=this.state;
      items = !items ? [...sarees, ...kurthis, ...bags, ...kids]: items;
    return(
      <div className={`${items.length > 4?"" : "product"}`}>
        <h3 className={"ml-4 mb-3"}>{`Products (${items.length})`}</h3>
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
        {items.length == 4 ?
        <button className={"view-more "} onClick={onClickProducts}> View All Products</button>
        : null
        }
      </div>
    )
  }
}

export default Products;
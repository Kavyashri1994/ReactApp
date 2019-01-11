
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Project from './Project/index.jsx';
import List from './Project/List.jsx'
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      listPage: false,
      items: []
    }
  }

  onClickLogin(email) {
    let {listPage} = this.state;
    fetch("http://surya-interview.appspot.com/list", {
						method: "POST",
						body: JSON.stringify(email)
					}).then(res => {
            console.log(res)
            res.json().then(data => {
              console.log(data)
              this.setState({items: data.items, listPage: true})
            })
          })
  }
  render() {
    let {listPage, items} = this.state;
   return (
     <div className='appDiv'>
     {!listPage &&
      <Project
        onClickLogin={this.onClickLogin.bind(this)}/>
     }
        {listPage &&
      <List items={items}/>}
    </div>
    );
  }
 /* render() {
      const {items} = this.state;
      return(
          <div
            className={"container"}>
            <div
                className={"row"}>
                {items.map((item, k)=>
                    <div
                        className={"col-md-4 mb-2"}>
                        <div
                            className={"media border"}>
                            <img src={item.imageUrl} className={"rounded w-25"} />
                            <div
                                className={"media-body"}>
                                {item.emailId}
                            </div>
                        </div>
                    </div>
                )}
            </div>
          </div>
      );
  };*/
}

class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaceholder: true,
            isNoImage: false,
            isLoading: true
        };
    };

    render() {
        return(
            <img />
        );
    };
};

export default App;

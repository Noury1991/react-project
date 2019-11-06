import React, { Component } from "react";
import {Link} from 'react-router-dom';

class myList extends Component {
  constructor(props) {
    super(props);

  }


  render() {
   
    
    const mylisst = this.props.list.map((item, i)=> {
        return (
      
        <div className="listCard">
          
          <img src={item.strMealThumb} width="100%" height="250"  />
          <div class="container">
            <h4>
              <b>{item.strMeal}</b>
            </h4>
            <br></br>
            <div className="res"> {item.ingredients} </div>
            <br></br>
            <button onClick={()=>this.props.removeItem(item)}>Remove</button>
       <button id="all" onClick={()=>this.props.removeAll()}>Remove All</button>
          </div>
        </div>
      
    );
  });
      
     
    return (
      <div>
        <h1 id="header"> Salad Club </h1>
        <ul>
          {mylisst}
        </ul>
      </div>
    );
  }
}

export default myList;

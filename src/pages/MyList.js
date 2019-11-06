import React, { Component } from "react";

class myList extends Component {
  constructor(props) {
    super(props);

  }


  render() {
   
    const mylisst = this.props.list.map((item, i)=> {
        return (
        <li>
        <div className="card">
          <img src={item.strMealThumb} width="100%" height="50%" />
          <div class="container">
            <h4>
              <b>{item.strMeal}</b>
            </h4>
            <br></br>
            <button onClick={()=>this.props.removeItem(item)}>Remove</button>
       <button onClick={()=>this.props.removeAll()}>Remove All</button>
          </div>
        </div>
      </li>
    );
  });
      
     
    return (
      <div>
        <ul>
          {mylisst}
        </ul>
      </div>
    );
  }
}

export default myList;

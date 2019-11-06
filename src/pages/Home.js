import React, { Component } from "react";
import {Link} from 'react-router-dom';
// import {Card} from "react_bootstarp";

import axios from "axios";
import myList from "./MyList";
import Meals from "./Meals";
import moment from "moment";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Meals: [Meals.meals],
      time: ""
    };
  }

  

  // / Api for time ///
 

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        time:moment().format('LT')
      })
    }, 1000);
    }

  render() {
    // map over shows prop and make a array of li's that shows show name
    const myListItems = Meals.map((item, index) => {
      return (
        
          <div className="card">
            <div className="img">
            <img src={item.strMealThumb} width="100%" height="250" />
            </div>
            <div class="container">
              <h4>
                <b>{item.strMeal}</b>
              </h4>
              <br></br>
              <button onClick={() => this.props.addToList(item)}> Add </button>
              <Link to='/MyList'> <button>Go to List</button></Link>
            </div>
          </div>
         
        
      );
    });

  

    return (
      <div>
         <h1 style={{float:"right", color:"black", fontSize:"30px"}}>{this.state.time}</h1> 
        
        <h1 id="header"> Salad Club </h1>
        
        <hr />
        
        <ul>{myListItems}</ul>
        
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
// import {Card} from "react_bootstarp";

import axios from "axios";
import myList from "./MyList";
import Meals from "./Meals";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Meals: [Meals.meals]
    };
  }

  

  // / Api for time ///
  setInterval() {
    axios({
      method: "GET",
      url: `https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js`
    })
      .then(res => {
        console.log(res);
        const moment = res.data;
        const time = document.querySelector("#time");
        time.innerText = moment().format('dddd');
      }, 1000)

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // map over shows prop and make a array of li's that shows show name
    const myListItems = Meals.map((item, index) => {
      return (
      
        <div>
          <div className="card">
            <div className="img">
            <img src={item.strMealThumb} width="100%" height="50%" />
            </div>
            <div class="container">
              <h4>
                <b>{item.strMeal}</b>
              </h4>
              <br></br>
              <button onClick={() => this.props.addToList(item)}> Add </button>
              <button onClick={() => <a href="./MyList"></a>}>
                Go to list
              </button>
            </div>
          </div>
        </div>
      );
    });

  

    return (
      <div>
        <div> <h1>{this.setInterval}</h1> </div>
        
        <h1> Food Club</h1>
        <p> Welcome </p>
        <hr />

        <ul>{myListItems}</ul>
        
      </div>
    );
  }
}

export default Home;

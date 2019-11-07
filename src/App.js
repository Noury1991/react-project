import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Home from './pages/Home';
import MyList from './pages/MyList';
import About from './pages/About';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Errors from "./pages/Errors";




class App extends Component {
constructor(props){
    super(props);

    this.state={
        list:[]
    }
}
    
addToList=(item) =>{
    console.log(item);
    
    this.setState({
        list: [...this.state.list, item]
    })
}

removeItem = (item)=> {
const list = [...this.state.list]
 const index = list.indexOf(item)
 list.splice(index,1)
 this.setState({
     list: list
 })
}

removeAll = ()=> {
    this.setState({
        list: []
    })
}
    


    render(){
     
return(
    
    <Router className="navbar">
        <nav className='bar'>
        <Link className='link' to='/'> Home </Link> {' | '}
        <Link className='link' to='/MyList'> My List </Link> {' | '}
        <Link className='link' to='/About'> About us</Link> {' | '}
        </nav>

        <div>
            <Switch>
                <Route exact path='/' component={()=> <Home addToList={this.addToList} />} />
                <Route path='/MyList' component={()=> <MyList removeAll={this.removeAll} removeItem={this.removeItem} list={this.state.list} />} />
                <Route path='/About' component={About} />
                <Route component={Errors} />
            </Switch>

           
        </div>

    </Router>

)

    }
}

export default App;

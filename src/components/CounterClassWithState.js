import { Component } from "react";

class CounterClassWithState extends Component{
    constructor(){
        super();
        this.state={
            counter: 0,
        }; 
        //binding the method to make use of arrow function for the event handler, One way of doing that is as below
       // this.increment=  this.increment.bind(this)   
    }
    //arrow function has access to this keyword so it is the other way of binding the function
    increment=()=>{
        console.log(this);
        this.setState({
            counter: this.state.counter + 1,
        });
      
    }
    decrement=()=>{
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    render(){
        return(
        <div>
            <h1>Count value is: {this.state.counter} </h1>
            {/* this method works because of arrow function binding */}
            <button onClick={this.increment}>Increment</button>

            <button onClick={()=>this.increment()}>IncrementWithArrowFunc</button>
          
            <button onClick={this.decrement}  style={{marginLeft:'4px'}}>Decrement</button>
        </div>
        )
    }
}
export default CounterClassWithState;
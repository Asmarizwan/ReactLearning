import { Component } from "react";


class ClassEvent extends Component{
    handleClick() {
        console.log("Click function in class component")
   }
    render(){
       
        return <div>
            <h1>Hello class Event</h1>
            <button onClick={this.handleClick}>Click Me</button>
        </div>
    }
}
export default ClassEvent;
import { Component } from "react";

class MessageClass extends Component{
   
    render(){
        // destructuring the props in class component
        const{custommessage}= this.props;
        return <div><h1>This is a class component</h1>
        <h3>{custommessage}</h3>
        </div>

    }
}
export default MessageClass;
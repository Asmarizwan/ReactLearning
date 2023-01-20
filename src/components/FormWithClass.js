import { Component } from "react";


class FormWithClass extends Component
{
    state={
        firstName:  "",
        lastName: "",
    };
   handleChange=(event)=>{
   this.setState({
    firstName: event.target.value,
    });
   console.log(event.target.value);
   }
   handleLastNameChange=(event)=>{
    this.setState({
     lastName: event.target.value,
     });
    console.log(event.target.value);
    }
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(
        {
        fName: this.state.firstName,
        lName:this.state.lastName
    
    })
  }
    render(){
        return (
        <div>
            Form
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type ="text" value={this.state.firstName}></input>
                <input onChange={this.handleLastNameChange} type ="text" value={this.state.lastName} style={{marginLeft: '4px'}}></input>
                <button type="submit"style={{marginLeft: '4px'}}>Submit</button>
            </form>
            <h1>Form Component</h1>
        </div>
        )
    }
}
export default FormWithClass;
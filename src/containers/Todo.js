import React, { Component } from "react";
import TodoBox from "../components/TodoBox";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      prof: "",
      toggleShow: true,
      Employess: [
        { id: 1, name: "sravya", age: "22", prof: "software" },
        { id: 2, name: "aakash", age: "32", prof: "Doctor" },
        { id: 3, name: "hema", age: "62", prof: "teacher" },
        { id: 4, name: "venu", age: "42", prof: "Politician" },
      ],
    };
  }

  handleRemoveTodo = (id) => {
    const items = this.state.Employess.filter((item) => item.id !== id);
    this.setState({ Employess: items });
  };

  handleEditTodo = (id) => {
    console.log(" Edit Todo of Id", id);
  };

  handleChange = (e) => {
    console.log("Todos", e.target.value);
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var idd = Math.random() * 10;
    console.log("idd:::", idd);
    var formData = {
      id: idd,
      name: this.state.name,
      age: this.state.age,
      prof: this.state.prof,
    };
    // this.state.Employess.push(formData)
    const updated = { ...this.state.Employess.push(formData) };
    this.setState({
      Employess: this.state.Employess,
    });
    console.log(this.state.Employess);
  };

  handleToggleState=()=>{
    const doesShow = this.state.toggleShow;
    this.setState( { toggleShow: !doesShow } );
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ border: "2px solid black", margin: "2rem" }}>
          <form onSubmit={this.handleSubmit} style={{ margin: "1rem" }}>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              // value=''
              required
              placeholder="Enter your name"
            />
            <br />
            <br />
            <input
              onChange={this.handleChange}
              type="age"
              name="age"
              // value=''
              required
              placeholder="Enter your age"
            />
            <br />
            <br />
            <input
              onChange={this.handleChange}
              type="prof"
              name="prof"
              // value=''
              required
              placeholder="Enter your prof"
            />
            <br />
            <br />
            <button style={{ margin: "1rem" }}>Submit</button>
          </form>
        </div>
        <button onClick={this.handleToggleState}>Toggle Button</button>
        {this.state.toggleShow?(
           <div>
           {this.state.Employess.map((emp) => {
             return (
               <TodoBox
                 key={emp.id}
                 name={emp.name}
                 age={emp.age}
                 prof={emp.prof}
                 removeClicked={() => this.handleRemoveTodo(emp.id)}
               />
             );
           })}
         </div>
        ):(
          <p>Click on the button to look Employess</p>
        )}
       
      </React.Fragment>
    );
  }
}

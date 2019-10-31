import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm.js";

class App extends React.Component {
  /*========== STATE ==========*/
  constructor() {
    super();
    this.state = {
      task: "",
      id: 0,
      data: []
    };
  }

  /*========== HANDLERS ==========*/
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      data: [
        ...this.state.data,
        {
          task: this.state.task,
          id: Date.now(),
          completed: false
        }
      ],
      id: this.state.data.id
    });
    console.log(this.state);
    event.target.reset();
  };

  /*========== RENDER ==========*/
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

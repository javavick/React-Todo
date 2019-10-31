import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";

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
      ]
    });
    console.log(this.state);
    event.target.reset();
  };

  componendDidUpdate = () => {
    this.state.data.map((item) => {
      console.log(item.id);
      if (item.id === this.state.id) {
        item.completed = !item.completed;
        this.forceUpdate();
      }
    });
    console.log(this.state.id);
  };

  handleCompleted = (event) => {
    this.setState(
      { id: parseInt(event.target.id, 10) },
      this.componendDidUpdate
    );
  };

  /*========== RENDER ==========*/
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoList
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCompleted={this.handleCompleted}
        />
      </div>
    );
  }
}

export default App;

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
  // Add input text content changes in TodoForm to state
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  // Add data to state for each to-do
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

  // Function to be executed in handleCompleted() when component updates (Toggle completed's boolean value if the value of id matches a specific to-do's id)
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

  // Set id to the specific to-do's id when clicked, then run componentDidUpdate when the component updates
  handleCompleted = (event) => {
    this.setState(
      { id: parseInt(event.target.id, 10) },
      this.componendDidUpdate
    );
  };

  // Set data to only the objects whose completed value equals false
  handleClear = (event) => {
    event.preventDefault();
    this.setState({ data: this.state.data.filter((item) => !item.completed) });
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
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;

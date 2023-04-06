import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      task: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      task: event.target.value
    });
  }

  handleAddTask = (event) => {
    event.preventDefault();
    if (this.state.task.trim() !== "") {
      this.setState(prevState => ({
        list: [...prevState.list, prevState.task],
        task: ""
      }));
    }
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleAddTask(event);
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
           <form>
             <input type="text" id="new-task" 
             value={this.state.task} onChange={this.handleInputChange} 
             onKeyPress={this.handleKeyPress} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}
export default App;
import React from "react";

export default class TodoItem extends React.Component {
  render () {
    return (
      <li key={this.props.todo.id}>
        <input 
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button type="">Delete</button>
        {this.props.todo.title}
      </li>
    );
  }
}

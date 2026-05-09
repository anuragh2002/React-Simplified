import React from "react";

export class ToDoListItemClass extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" defaultChecked={this.props.isComplete} />
        <label htmlFor="name">{this.props.children}</label>
      </div>
    );
  }
}

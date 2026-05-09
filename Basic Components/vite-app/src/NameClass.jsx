import React from "react";

export class NameClass extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.children}
        {/* <h1>Anuragh</h1> */}
      </div>
    );
  }
}

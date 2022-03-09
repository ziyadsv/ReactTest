import React from "react";

class Compo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>Hello Combo {this.props.name} </div>;
  }
}

export default Compo;

import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: "ASD", users: null, show: true };
  }

  static getDerivedStateFromProps(props, state) {
    return { name: props.name };
  }

  // shouldComponentUpdate() {
  //   if (!this.state.users) {
  //     return true;
  //   }
  //   return false;
  // }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.users;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot && snapshot[0].username) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ users: data });
        })
        .catch(() => {});
    }
  }

  componentWillUnmount() {
    console.log("unmountingd", this.state.users);
  }

  deleteComp = () => {
    this.setState({ show: false });
  };

  render() {
    console.log("this.state.show", this.state.show);
    if (this.state.show) {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={this.decrement}>Decrement</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.deleteComp}>Delete</button>
          <p>{this.state.name}</p>
        </div>
      );
    }
    return <h1>Deleted</h1>;
  }
}

export default Counter;

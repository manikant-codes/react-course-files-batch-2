import React from "react";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCounter1Visible: true, isCounter2Visible: true };
  }

  toggleVisibility = (counterNumber) => {
    if (counterNumber === 1) {
      this.setState({
        isCounter1Visible: !this.state.isCounter1Visible,
      });
    } else {
      this.setState({
        isCounter2Visible: !this.state.isCounter2Visible,
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar logo="My Company" />
        {this.state.isCounter1Visible && (
          <Counter toggleVisibility={this.toggleVisibility} num={1} />
        )}
        {this.state.isCounter2Visible && (
          <Counter toggleVisibility={this.toggleVisibility} num={2} />
        )}
        {/* new Navbar({logo: "My Company"}) */}
      </div>
    );
  }
}

export default Home;

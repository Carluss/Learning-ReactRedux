import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props); //make sure constructor react.component runs

    //only time a direct assignmet is done to state
    this.state = { lat: null, errorMessage: "" };
  }
  //componentDidMount(){}/componentDidUpdate(){}
  //shouldComponentUpdate/getDerivedStateFromProps/getSnapshotBeforeUpdate
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //We need to call setstate
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  componentDidUpdate() {
    console.log("My component updated!");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }
  //React says we need to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));

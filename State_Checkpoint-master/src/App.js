import "./App.css";

import React, { Component } from "react";
import Profile from "./Components/Profile";

export default class App extends Component {
  state = {
    Person: {
      fullName: "SpongeBob",
      bio: "Cartoon Character Who Makes People Laugh Out Loud Famous",
      imgSrc:
        "https://mobimg.b-cdn.net/v2/fetch/35/355167d4bf1f32d9041f74219c96abf1.png",
      profession: "Hamburger Maker",
    },
    Shows: false,
  };

  Togglebutton = () => {
    this.setState({
      Shows: !this.state.Shows,
    });
  };

  render() {
    return (
      <div>
        <div className="Buttondiv">
          <button onClick={this.Togglebutton} className="Showbutton">
            Show
          </button>
        </div>

        {this.state.Shows && <Profile Person={this.state.Person} />}
      </div>
    );
  }
}

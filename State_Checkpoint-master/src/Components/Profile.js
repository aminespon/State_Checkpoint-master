import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    Currenttime: 0,
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        Currenttime: this.state.Currenttime + 1,
      })},
        1000)
    };
  

  render() {
    return (
      <div>
        <span className="timer">{this.state.Currenttime} </span>
        <div className="Container">
          <h1 className="Title">{this.props.Person.fullName}</h1>
          <h2 className="Bio">{this.props.Person.bio}</h2>
          <h3 className="prof">{this.props.Person.profession} </h3>
          <img
            className="sponge"
            src={this.props.Person.imgSrc}
            alt="spongebob"
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
  }

  updatePicture(value) {
    this.setState({ picture: value });
  }
  updateName(value) {
    this.setState({ name: value });
  }
  addFriend() {
    const { friends, picture, name } = this.state;
    let newFriends = friends.slice();
    newFriends.push({ picture, name });
    this.setState({ friends: newFriends, name: "", picture: "" });
  }
  render() {
    const friends = this.state.friends.map((friend, index) => {
      return (
        <div key={"friendsKey"}>
          <img height="200px" width="100px" src={friend.picture} />
          <span>{friend.name} </span>
        </div>
      );
    });
    return (
      <div>
        <span
          onChange={e => this.updatePicture(e.target.value)}
          value={this.state.picture}
        >
          Picture:
        </span>
        <input />
        <span
          onChange={e => this.updateName(e.target.value)}
          value={this.state.name}
        >
          Name:
        </span>
        <input />
        <button onClick={e => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Table from "./components/Table";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>

      <Table employees={this.state.employees}/> 
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

//fetch elements from the address book API
//map through each of the elements and display in the render jsx file
//show the username and image with props??
//include a button that shows and one that hides user details

function UserCard(props) {
  let info = (
    <div>
      <h3>Location: {props.city + ", " + props.state}</h3>
      <h3>Time Zone: {props.timeZone}</h3>
    </div>
  );
  return (
    <div>
      <h1>{props.firstName + " " + props.lastName}</h1>
      <img src={props.image} />
      {props.show === false ? info : null}
      {/* {props.show === true ? null : info} */}
      {props.show === true ? (
        <button onClick={props.click}>Show Details</button>
      ) : (
        <button onClick={props.click}>Hide Details</button>
      )}
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isHidden: true
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ users: json.results });
      });
  }
  handleClick = event => {
    if (this.state.isHidden === true) {
      this.setState({
        isHidden: false
      });
    } else {
      this.setState({
        isHidden: true
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.users.map((user, index) => (
          <UserCard
            key={index}
            firstName={user.name.first}
            lastName={user.name.last}
            image={user.picture.large}
            city={user.location.city}
            state={user.location.state}
            timeZone={user.location.timezone.description}
            click={this.handleClick}
            show={this.state.isHidden}
          />
        ))}
      </div>
    );
  }
}

export default App;

import React from "react";

function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} />
      <button onClick={() => props.show(props.id)}>More Info</button>
    </div>
  );
}

export default User;

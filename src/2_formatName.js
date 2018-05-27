import React from "react";

//const name = "Gaurav Goyal";

//export const element = <h1>{name}</h1>;

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: "Gaurav",
  lastName: "Goyal"
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger !!</h1>;
}
export const element = <div>{getGreeting(user)}</div>;
export const element2 = <div>{getGreeting()}</div>;

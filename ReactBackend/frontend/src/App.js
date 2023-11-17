/*
Task:                App.js
Assigned to:         Admin
Date assigned:       09th July 2023
Due date:            09th July 2023
Task complete?       Yes
Task description:    Create an file called App.js
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';


class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    fetch('/data')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const {error, isLoaded, items} = this.state;

    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <div>
          <div>
            <head>
              <title> React App </title>
            </head>
          </div>
          
          <div>
            <h1> Welcome to my React App </h1>
            <h3> Please enter the name of the user you are looking for: </h3>
            
            <form>
              <input type='text' id='search' />
              <input type='submit' value='Enter' onClick={userSearch()} />
            </form>
            
            <ul>
              <li> Profile Picture: </li>
              <li> Name: {data.name} </li>
              <li> Bio: {data.bio} </li>
              <li> Description: {data.description} </li>
              <li> Repo: {data.repo} </li>
            </ul>
          </div>
        </div>
      );
    }
  }

}

export default MyComponent;

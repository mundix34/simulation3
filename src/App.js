import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
        </header>
        <Auth/>
        <Dashboard/>
        <Form/>
        <Post/>
      </div>
    );
  }
}

export default App;

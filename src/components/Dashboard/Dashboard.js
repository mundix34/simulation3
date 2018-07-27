import React, { Component } from 'react';
// import './App.css';

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      input: '',
      posts:[],
      userPosts: true
    }
    this.addInput= this.addInput.bind(this);
  }

  addInput(val) {
        this.setState({
            input: val
        })
    }
  render() {

    const posts = this.state.posts.map((post, i) => (
      <div className = "posts" key={ i }>
        <p> Title: { post.title } </p>           
        <p> Username: { post.username } </p>
        <p> ProfilePic: { posts.profile_pic } </p>
        {/* <button className = "btn-del"onClick={() => this.deleteProperty(house.id)}>X</button> */}
        
        </div>
    ));
    return (
       
      <div className="App">
          Dashboard
          <input placeholder= "Search" onChange={(e) => this.addInput(e.target.value)}></input>
          {posts}
          <button> Search </button>
          <button> Reset</button>

       
      </div>
    );
  }
}

export default Dashboard;

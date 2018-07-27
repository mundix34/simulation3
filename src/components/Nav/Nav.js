import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {addProfilePic, addUserName} from '../../ducks/reducer';

// import routes from '../../routes';
// import {withRouter} from 'react-router-dom';
// import './App.css';

class Nav extends Component {
    render() {
        return (
            <div className="App">

                <h1>Helo</h1>
          
                <p className = "p">username: {this.props.username}</p>
                <p className = "p"> ProfilePic: {this.props.profilePic}</p>
                <Link to="/dashboard"><button> Home</button></Link>
                <Link to="/post/:postid"><button> New Post</button></Link>
                <Link to="/"><button> Logout </button></Link>

            </div>
        );
    }

}
function mapStateToProps(state) {
    const { username, profilePic } = state
    return {
        username,
        profilePic


    }
}

export default connect(mapStateToProps, {addUserName, addProfilePic})(Nav);


// export function Nav(props) {
//     // if (!props.location.pathname:'/'){

//     return (
//         <div>
//             Helo

//             <p>{props.username}</p>
//             <p>{props.profilePic}</p>
//             <Link to="/dashboard"><button> Home</button></Link>
//             <Link to="/post/:postid"><button> New Post</button></Link>
//             <Link to="/"><button> Logout </button></Link>
//         </div>
//     )
// }
// else{
//     'Not logged in'
// }
// }

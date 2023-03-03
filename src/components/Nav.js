import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import catdog_tree from '../static/catdog_tree.jpeg'

export default class Nav extends Component {

    render() {
        return (
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              {/* <a style={{ textDecoration: 'none' }} className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                  <div className="navbar-nav">
                    <a href="/feed"><img id='catdogtree_logo' src={catdog_tree} alt="logo"/></a>
                      {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                      
                      <Link className="nav-link" to="/feed">Home</Link>
                      <Link className="nav-link" to="/posts/create"><AddBoxIcon /></Link>

                      {this.props.user.apitoken
                      ?
                      <>
                      <Link className="nav-link" to="/login" onClick={this.props.logMeOut}>Log Out</Link>
                      <p className='nav-link'>Hello, {this.props.user.username}</p>
                      </>
                      :
                      <>
                      
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                        <Link className="nav-link" to="/login">Log In</Link>
                      
                      </>

                      }
                  </div>
              </div>
          </div>
      </nav>
        )
    }
}

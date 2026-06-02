import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
export default Nav;
 
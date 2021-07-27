import React from "react"
import "../styles/navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <NavLink className="link" to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink className="link" to="/posts" exact activeClassName="active">
        View all posts
      </NavLink>
      <NavLink className="link" to="/create-post" exact activeClassName="active">
        Create post
      </NavLink>
      <NavLink className="link" to="/about" exact activeClassName="active">
        About
      </NavLink>
    </nav>
  )
}

export default Navbar

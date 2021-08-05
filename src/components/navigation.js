import React from "react"
import {Link} from "react-router-dom"
import "./navigation.css"

function Navigation() {
  return <div className="nav">
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
  </div>  
}

export default Navigation;
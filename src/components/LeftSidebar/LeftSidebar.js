import React from "react"
import { NavLink } from "react-router-dom"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import "./LeftSidebar.css"

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <ul className="leftSidebar__menu">
        <li>
          <NavLink to="/" exact activeClassName="active">Electronics</NavLink>
        </li>
        <li>Face Masks</li>
        <li>Fresh Food</li>
        <li>Grocery</li>
        <li>Home</li>
        <li>Kids</li>
      </ul>
      <div className="leftSidebar__link">
        <a href="#">View all categories</a>
        <ArrowForwardIosIcon />
      </div>
    </div>
  )
}

export default LeftSidebar

import React, { useState, useEffect } from "react"
import LeftSidebar from "../LeftSidebar/LeftSidebar"
import "./Body.css"
import Rightsidebar from "../RightSidebar/Rightsidebar"
import MainBody from "../MainBody/MainBody"
import SearchIcon from "@material-ui/icons/Search"

export default function Body({ data }) {
  return (
    <div className="body">
      <div className="leftsidebar">
        <LeftSidebar />
      </div>
      <div className="body__details">
        <div className="body__searchBar">
          <input name="search" type="search" placeholder="Search for products..." />
          <div className="body__searchBar-icon">
            <SearchIcon />
          </div>
        </div>
        <div className="center">
          <h2>Electronics</h2>
          <div className="body__categories">
            <div className="categories">
              <h3>TOP CATEGORIES</h3>
              <p>No top categories yet</p>
            </div>
            <div className="sellers">
              <h3>TOP SELLERS</h3>
              <a className="sellers__link">View All</a>
            </div>
          </div>
          {data.map((product) => (
            <MainBody name={product.productName} price={product.productPrice} productId={product.id} />
          ))}
        </div>
      </div>
      <div className="rightsidebar">
        <Rightsidebar />
      </div>
    </div>
  )
}

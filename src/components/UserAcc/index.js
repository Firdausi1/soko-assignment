import React from "react"
import Card from "../Card"
import "../../App.css"
import style from "./style.module.css"
import clsx from "clsx"
import DropDown from "../DropDown"
import SideNav from "../SideNav"

function UserAcc() {
  return (
    <div className={clsx("container border", style.gap, style.min_height)}>
      <div className={clsx("row", style.my_row)}>
        <div className={clsx("col", style["border-y"], style.px)}>
          <div className={clsx(style.inner_space)}>
            <SideNav />
          </div>
        </div>
        <div className="col-md-12 col-lg-10">
          <div className={clsx(style.group, "gutter-x", style.inner_space)}>
            <h5 className="bold_text">Showing all orders</h5>
            <DropDown />
          </div>
          <div className={clsx(style.center, "gutter-xy")}>
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAcc

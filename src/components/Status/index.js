import clsx from "clsx"
import React from "react"
import style from "./style.module.css"
import "../../App.css"

function Status({ OrderStatus, colorCode }) {
  const myStyles = {
    color: colorCode,
    backgroundColor: colorCode,
  }
  return (
    <div className={"pointer"}>
      <div className={clsx(style.dot, style.mr)} style={{ backgroundColor: myStyles.backgroundColor }}></div>
      <small style={{ color: myStyles.color }}>shipped</small>
    </div>
  )
}

export default Status

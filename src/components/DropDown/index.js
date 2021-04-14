import React from "react"
import clsx from "clsx"
import style from "./style.module.css"

function DropDown() {
  const items = ["Shipped", "Delivered"]

  function DropDownItem({ name }) {
    return <li className={clsx("dropdown-item", style.pointer)}>{name}</li>
  }

  return (
    <div className={clsx("btn-group", style.border, style.space)}>
      <button
        type="button"
        className="btn btn-sm  dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-list"></i>
      </button>
      <button className="btn btn-sm bold_text" type="button">
        Filters
      </button>

      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <DropDownItem key={index} name={item} />
        ))}
      </ul>
    </div>
  )
}

export default DropDown

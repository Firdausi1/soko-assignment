import clsx from "clsx"
import React from "react"
import style from "./style.module.css"
function SideNav() {
  const navList = [
    {
      name: "My orders",
      icon: "bi bi-card-text",
    },
    {
      name: "My addresses",
      icon: "bi bi-geo-alt",
    },
    {
      name: "My refunds",
      icon: "bi bi-wallet2",
    },
  ]
  function NavItem({ name, icon }) {
    return (
      <li className={style.group}>
        <i className={clsx(icon, style.icon)}></i>
        <span className={style.icon__text}>{name}</span>
      </li>
    )
  }
  return (
    <ul className={clsx(style.clear, style.pointer, style.nav)}>
      {navList.map((item, index) => (
        <NavItem key={index} name={item.name} icon={item.icon} />
      ))}
    </ul>
  )
}

export default SideNav

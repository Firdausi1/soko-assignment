import React from "react"
import style from "./style.module.css"
import clsx from "clsx"
import Status from "../Status"
function Card({ img, name, orderID, amount, itemCount, createdAt, orderStatus, colorCode }) {
  return (
    <div className={style.item__card}>
      <div className={clsx(style.group, style.bold_text)}>
        <img src="https://ik.imagekit.io/ikmedia/bucket.png?tr=w-500,dpr-2" className={style["item__img"]} alt="" />
        <div>Target</div>
      </div>
      <div>
        <div className={clsx(style.group, style.item__details, style.sp_btw)}>
          <p className={clsx(style.bold_text)}> Order #ID</p>
          <p className={clsx(style.bold_text)}> UGX 12,700</p>
        </div>
        <div className={clsx(style.group, style.item__details, style.sp_btw)}>
          <p> 3 Items</p>
          <p> 25/02/2021, 01:55 PM</p>
        </div>

        <Status OrderStatus={"shipped"} colorCode={"orange"} />
      </div>
    </div>
  )
}

export default Card

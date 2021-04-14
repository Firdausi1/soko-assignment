import React from "react";
import "./RightSidebar.css";
import Bag from "../Bag/Bag";
import Checkout from "../Checkout/Checkout";
import { useStateValue } from "../../StateProvider";
import EmptyBag from "../Bag/EmptyBag";

export default function Rightsidebar() {
	const [{ basket }, dispatch] = useStateValue();
	const path = window.location.pathname === "/";
	return (
		<div className="rightSidebar">
			{basket.length === 0 ? (
				<div>
					<h2>Bag</h2>
					<EmptyBag />
				</div>
			) : (
				<Checkout className="right__checkout"/>
			)}
		</div>
	);
}

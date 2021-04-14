import React from "react";
import "./Bag.css";
import Account from "../Account/Account";
import { useStateValue } from "../../StateProvider";
import Checkout from "../Checkout/Checkout";
import EmptyBag from "./EmptyBag";

export default function Bag({ quantity, setQuantity }) {
	const [{ basket }, dispatch] = useStateValue();
	const path = window.location.pathname === "/bag";
	return (
		<div className="bag">
			{basket.length === 0 ? (
				<EmptyBag />
			) : (
				<div className="bag__content">
					{path ? (
						<div className="bag__checkout">
							<Account className="bag__account" />
							<Checkout
								className="side__bag"
								quantity={quantity}
								setQuantity={setQuantity}
							/>
						</div>
					) : (
						" "
					)}
				</div>
			)}
		</div>
	);
}

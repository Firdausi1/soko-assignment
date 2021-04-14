import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Quantity from "../../Quantity";

export default function Checkout({ quantity }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
		});
	};

	return (
		<div className="checkout">
			<div className="checkout__bag">
				<h2>Bag</h2>
				<a href="#" onClick={removeFromBasket}>
					Clear Bag
				</a>
			</div>
			{basket.map((item) => (
				<CheckoutProduct
					productId={item.id}
					name={item.title}
					productPrice={item.price}
					quantity={item.quantity}
				/>
			))}
			<div className="checkout__total">
				<div className="checkout__subtotal checkout__price">
					<h3>Subtotal</h3>
					<p>UGX</p>
				</div>
				<div className="checkout__delivery checkout__price">
					<h3>Delivery</h3>
					<p>Free</p>
				</div>
				<div className="checkout__totalSum checkout__price">
					<h3>Total</h3>
					<p>UGX</p>
				</div>
				<div className="checkout__btn"><button className="secondary__button checkout__btn">CheckOut</button></div>
			</div>
		</div>
	);
}

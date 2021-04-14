import React from "react";
import "./Checkout.css";
import Quantity from "../../Quantity";

export default function CheckoutProduct({ name, productId, productPrice }) {
    
	return (
		<div>
			
			<div className="checkout__item">
				<div className="checkout__itemDetail">
					<h3>{name}</h3>
					<p>Per piece</p>
					<p>UGX {productPrice}</p>
				</div>
				<div className="checkout__itemButton"><Quantity/></div>
			</div>
			
		</div>
	);
}

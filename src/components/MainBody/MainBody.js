import React from "react";
import "./MainBody.css";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

export default function MainBody({ name, price, productId }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: productId,
				title: name,
				price: price,
			},
		});
	};

	return (
		<div className="mainBody">
			<Link to={`/productdetail/${productId}`}>
				<div className="mainBody__items">
					<img
						src="https://www.hopkinsmedicine.org/-/media/project/jhm/icons/covidpropermaskwearing/proper-mask-wearing.ashx?h=750&la=en&w=750&hash=88121F58B84FDC141CE6BF2EDFCDCC033BB2E082"
						alt="mask"
					/>
					<div className="mainBody__text">
						<h3>{name}</h3>
						<p>UGX {price}</p>
					</div>
				</div>
			</Link>
			<button className="primary__button" onClick={addToBasket}>
				<AddIcon /> Add
			</button>
		</div>
	);
}

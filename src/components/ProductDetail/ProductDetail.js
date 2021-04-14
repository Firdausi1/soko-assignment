import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useStateValue } from "../../StateProvider";
import Quantity from "../../Quantity";

export default function ProductDetail({ data }) {
	let { productId } = useParams();
	const [product, setProduct] = useState([]);
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: product.productId,
				title: product.productName,
				price: product.productPrice
			},
		});
	};
	useEffect(() => {
		setProduct(data[productId]);
	}, [data, productId]);
	return (
		<div className="productDetail"> 
			<img
				src="https://www.hopkinsmedicine.org/-/media/project/jhm/icons/covidpropermaskwearing/proper-mask-wearing.ashx?h=750&la=en&w=750&hash=88121F58B84FDC141CE6BF2EDFCDCC033BB2E082"
				alt="mask"
			/>
			<div className="productDetail__text">
				<h3>{product.productName}</h3>
				<p>{product.productDescription}</p>
				<p>UGX{product.productPrice}</p>
				<Quantity/>
				<div className="productDetail__button">
					<button className="primary__button" onClick={addToBasket}>
						Add to bag
					</button>
					<button className="secondary__button">Buy now</button>
				</div>
			</div>
		</div>
	);
}

import React, { useState, useEffect } from "react";
import './Quantity.css'

export default function Quantity({ quantity}) {
	const [value, setValue] = useState({ count: 1 });

	const increment = () => {
		setValue({ count: value.count + 1 });
	};

	const decrement = () => {
		setValue({ count: value.count > 0 ? value.count - 1 : 0 });
	};

	return (
		<div className="quantity__input">
			<button onClick={decrement} className="quantity__input--modifier quantity__input--modifierLeft">&mdash;</button>
			<input type="text" value={value.count} readOnly  className="quantity__input--screen"/>
			<button onClick={increment} className="quantity__input--modifier quantity__input--modifierRight">&#xff0b;</button>
		</div>
	);
}

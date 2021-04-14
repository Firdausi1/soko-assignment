import React from "react";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

export default function Header() {
	const [{basket}, dispatch] = useStateValue();
	return (
		<div className="header">
			<div className="header__top">
				<span>Store made with SOKO</span>
			</div>
			<div className="header__bottom">
				<div className="header__bottomLeft">
					<Link to="/">
					<StorefrontIcon fontSize="large" className="header__storeIcon"/></Link>
					<div className="header__bottomLeft-text">
						<h2>Target</h2>
						<p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
					</div>
				</div>
				<div className="header__bottomRight">
					<Link to="/bag">
						<div className="content">
							<ShoppingBasketIcon />
                            <span className="header__option header__bag" >{basket?.length}</span>
							<p className="content__paragraph">Bag</p>
						</div>
					</Link>
					<Link to="/accounts">
					<div className="content">
						<PersonIcon />
						<p>Account</p>
					</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

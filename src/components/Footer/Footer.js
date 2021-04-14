import React from "react";
import "./Footer.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HelpIcon from "@material-ui/icons/Help";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import {NavLink } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

export default function Footer() {
	const [{basket}, dispatch] = useStateValue();
	return (
		<div>
			<div className="footer__top">
				<div className="footer__top-icons">
					<div className="icon__details">
					<LocalShippingIcon />
					<h3>Fast Delivery</h3>
					</div>
					<div className="icon__details">
					<VerifiedUserIcon />
					<h3>Buyer Protection</h3>
					</div>
					<div className="icon__details"> 
					<HelpIcon />
					<h3>Customer Support</h3>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<h3>STORE DETAILS</h3>
				<h2>Target</h2>
				<p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
                <button className="footer__button"><WhatsAppIcon/> Chat with us</button>
			</div>
			<div className="mobile__nav">
				<ul className="mobile__navList">
					<li><NavLink to="/" exact activeClassName="activeNav" className="menu"><HomeIcon/> Home </NavLink></li>
					<li><NavLink to="/" exact  className="menu"><AppsIcon/> Categories</NavLink></li>
					<li className="mobile__navBag"><NavLink to="/bag"  className="menu"><span className="nav__option nav__bag" >{basket?.length}</span> <ShoppingBasketIcon/> Bag</NavLink></li>
					<li><NavLink to="/accounts"  className="menu"><PersonIcon/> Account</NavLink></li>
				</ul>

			</div>
		</div>
	);
}

import React, { useState, useEffect } from "react";
import "./Account.css";
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

export default function Account() {
	const [phone, setphone] = useState("");
    
	return (
		<div className="account">
			<form action="">
				<div className="account__detail">
					<div className="account__list">1</div>
					<div>
						<h3>Account</h3>
						<p>
							To place your order, log in by entering your 10 digit mobile
							number
						</p>
						<div className="account__number">
							<div className="account__numberInput">
								<label htmlFor="phone">Mobile Number</label>
                                <PhoneInput
                                placeholder="Enter phone number"
                                flags={flags}
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry={"ug"}
                                value={phone}
                                onChange={setphone} />
							</div>
							<input type="submit" disabled="disabled" className="account__btn" />
						</div>
					</div>
				</div>

				<div className="account__detail">
					<span className="account__list">2</span>
					<div>
						<h3>Delivery Address</h3>
						<p>
							Select your delivery address from the existing one or add a new
							one
						</p>
					</div>
				</div>
				<div className="account__detail">
					<span className="account__list">3</span>
					<div>
						<h3>Payment</h3>
						<p>Select your payment method</p>
					</div>
				</div>
			</form>
		</div>
	);
}

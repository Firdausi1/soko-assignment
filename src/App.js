import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Bag from "./components/Bag/Bag";
import UserAcc from "./components/UserAcc";

function App() {
	const [data, setData] = useState([]);

	const getStoreData = async () => {
		const url = "/storeData.json";
		const response = await fetch(url);
		const result = await response.json();
		setData(result.product);
	};

	useEffect(() => {
		getStoreData();
	}, []);
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact>
						<Body data={data} />
					</Route>
					<Route path="/bag" exact>
						<Bag />
					</Route>
					<Route path="/productdetail/:productId" exact>
						<ProductDetail data={data} />
					</Route>
					<Route path="/accounts" exact>
						<UserAcc/>
					</Route>
					
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;

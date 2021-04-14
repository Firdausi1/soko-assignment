export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};
		case "REMOVE_FROM_BASKET":
			let newBasket = [];
			return {
				...state,
				basket: newBasket,
			};
		default:
			return state;
	}
};

export default reducer;

export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  SET_ITEMS: "SET_ITEMS",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("I cant do that");
      }
      console.log(newBasket);
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;

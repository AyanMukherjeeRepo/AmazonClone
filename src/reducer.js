export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
      break;
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id != action.payload),
      };
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

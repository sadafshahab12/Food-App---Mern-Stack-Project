import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  // logic of function will be in reducer
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          image: action.image,
          price: action.price,
          quantity: action.quantity,
          size: action.size,
        },
      ];
    case "REMOVE":
      let newArr = [...state]; // state mein kuch store krna h direct krskty hn but remove krna h to pehly ek vcariable m store krna hoga them remove krskty h
      newArr.splice(action.index, 1);
      return newArr;

    case "UPDATE":
      const updateArr = state.map((item) => {
        if (item.id === action.id && item.size === action.size) {
          return {
            ...item,
            quantity: item.quantity + parseInt(action.quantity),
            price: item.price + action.price,
          };
        }
        return item;
      });
      return updateArr;

    case "DROP":
      let emptyArray = [];
      return  emptyArray
    default:
      return "Error in reducer";
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCard = () => useContext(CartDispatchContext);

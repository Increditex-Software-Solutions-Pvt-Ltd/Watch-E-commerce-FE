import React, { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
  total: 0
};

const CartContext = createContext();

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const SET_CART = 'SET_CART';

const convertToNumber = (str) => {
  if (typeof str === 'string') {
    return Number(str.replace(/[^0-9.-]+/g, ""));
  }
  return str;
};

const cartTotal = (cart) => {
  return cart.reduce((total, item) => total + item.quantity * convertToNumber(item.price), 0);
};

const cartReducer = (state, action) => {
  let newCart;

  switch (action.type) {
    case SET_CART:
      return {...state,cart:action.payload,total:cartTotal(action.payload)}
    case ADD_TO_CART:
      const existingCartItem = state.cart.find(item => item.cartId === action.payload.cartId);
      if (existingCartItem) {
        newCart = state.cart.map(item => item.cartId === action.payload.cartId ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      return { ...state, cart: newCart, total: cartTotal(newCart) };

    case REMOVE_FROM_CART:
      newCart = state.cart.filter(item => item.cartId !== action.payload);
      return { ...state, cart: newCart, total: cartTotal(newCart) };

    case INCREMENT_QUANTITY:
      newCart = state.cart.map(item => item.cartId === action.payload ? { ...item, quantity: item.quantity + 1 } : item);
      return { ...state, cart: newCart, total: cartTotal(newCart) };

    case DECREMENT_QUANTITY:
      newCart = state.cart.map(item => item.cartId === action.payload ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0);
      return { ...state, cart: newCart, total: cartTotal(newCart) };

   
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

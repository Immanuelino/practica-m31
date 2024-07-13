// src/components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={() => dispatch(removeFromCart(item))}>
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;

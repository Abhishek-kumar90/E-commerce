import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../reducers/cartReducer';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {cart.items.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        Total: ${cart.total}
      </div>
    </div>
  );
}

export default Cart;

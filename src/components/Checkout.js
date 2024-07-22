import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../reducers/cartReducer';
import './Checkout.css';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment (integration with a payment gateway)
    dispatch(clearCart());
    alert('Order placed successfully!');
  }

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;

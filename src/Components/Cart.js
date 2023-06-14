import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        ) : (
          <li>No items in the cart</li>
        )}
      </ul>
    </div>
  );
}

export default Cart;

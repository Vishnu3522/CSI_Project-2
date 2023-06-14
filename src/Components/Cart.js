import React from 'react';

function Cart({ cartItems }) {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  return (
    <> 
      <div className="card" >
        <h2>Cart Items</h2>
        <ul>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} - <img
                        className='card-img-top'
                        src={item.image}
                        alt='Card image cap'
                      />
              </li>
            ))
          ) : (
            <li>No items in the cart</li>
          )}
        </ul>
        <button>Pay {calculateTotalPrice()}$</button>
      </div>
     
    </>
  );
}

export default Cart;

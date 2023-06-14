import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Product() {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((result) => result.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const addToCart = (product) => {
    setCartItem((prevCartItem) => [...prevCartItem, product]);
  };

  return (
    <Router>
      <div className='container'>
        <div className='row'>
          {data.map((item) => (
            <div className='col-md-6' key={item.id}>
              <div className='card' style={{ width: '18rem' }}>
                <img
                  className='card-img-top'
                  src={item.image}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <h4 className='card-title'>{item.price}</h4>
                  <p className='card-text'>{item.description}</p>
                  <button onClick={() => addToCart(item)}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Routes>
        <Route path='/cart' element={<Cart cartItems={cartItem} />} />
      </Routes>

      <div className='Cart'>
        <Link to='/cart'>CART</Link>
      </div>
    </Router>
  );
}

export default Product;

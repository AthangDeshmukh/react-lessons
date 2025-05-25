import React, { useState } from 'react';

function App10() {
  // Product list
  const products = [
    { id: 1, name: 'Product 1', price: 23 },
    { id: 2, name: 'Product 2', price: 45 },
  ];

  // Cart state
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Change quantity (+ or -)
  const changeQty = (id, amount) => {
    setCart(cart
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty + amount } : item
      )
      .filter((item) => item.qty > 0) // Remove if quantity is 0
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>App10 Assignment</h2>

      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price} <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <hr />

      <h3>My Cart</h3>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - 
          <button onClick={() => changeQty(item.id, -1)}>-</button>
          {item.qty}
          <button onClick={() => changeQty(item.id, 1)}>+</button>
          - ${item.price * item.qty}
        </div>
      ))}
    </div>
  );
}

export default App10;

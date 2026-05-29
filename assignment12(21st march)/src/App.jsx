import { useState } from "react";

const productsData = [
  { id: 1, name: "Shirt", price: 500, category: "Clothing" },
  { id: 2, name: "Shoes", price: 1500, category: "Footwear" },
  { id: 3, name: "Watch", price: 2000, category: "Accessories" },
  { id: 4, name: "T-Shirt", price: 700, category: "Clothing" }
];

function App() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? productsData
      : productsData.filter(p => p.category === filter);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Listing</h1>

      {/* Filters */}
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Clothing")}>Clothing</button>
      <button onClick={() => setFilter("Footwear")}>Footwear</button>
      <button onClick={() => setFilter("Accessories")}>Accessories</button>

      {/* Product Cards */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              width: "150px"
            }}
          >
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
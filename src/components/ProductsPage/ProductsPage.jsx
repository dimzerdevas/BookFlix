import { useState, useEffect } from "react";
import "./style.css";
import { Filter } from "../Filter";
import { SearchBox } from "../SearchBox";

export const Products = () => {
  const [products, setProducts] = useState([]);
  // Fetch products from a mock API or any other source
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter(
      ({ title, description, category }) =>
        title.toLowerCase().includes(lowerCaseQuery) ||
        description.toLowerCase().includes(lowerCaseQuery) ||
        category.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered);
    setSelectedCategories([])
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {
      // Remove category if already selected
      updatedCategories.splice(updatedCategories.indexOf(category), 1);
    } else {
      // Add category if not selected
      updatedCategories.push(category);
    }
    
    const filtered = products.filter((product) => updatedCategories.includes(product.category.toLowerCase()));
    setSelectedCategories(updatedCategories);
    setFilteredProducts(filtered);

  };

  const resetFilters = () => {
    setFilteredProducts(products);
    setSelectedCategories([]);
  };

  return (
    <div>
      <h2>Our Products</h2>
      <Filter />
      <div className="cart-info">Items in Cart: {cart.length}</div>
      <div className="sidebar">
        <button onClick={resetFilters}>Reset Filters</button>
        <p>Filter by Category:</p>
        <ul>
          {[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
          ].map((category) => (
            <li key={category}>
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={category}>{category}</label>
          </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <SearchBox onSearch={handleSearch} />
        <p className="filter-message">
          {selectedCategories.length > 0
            ? `Filtered by categories: ${selectedCategories.join(', ')}`
            : `Showing all products`}
        </p>
        <ul className="product-list">
          {filteredProducts.map(
            ({ id, title, price, description, category, image, rating }) => (
              <li key={id} className="product-item">
                <img src={image} alt={title} className="product-image" />
                <div className="product-name">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-category">{category}</div>
                <div className="product-rating">Rated {rating.rate}</div>
                <div className="product-rating">by {rating.count} users</div>
                <div className="product-price">${price}</div>
                <button
                  onClick={() => addToCart({ id, title, price })}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export const Filter = () => {
  return (
    <div>
      <label htmlFor="priceFilter">Filter by Price:</label>
      <select id="priceFilter">
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};


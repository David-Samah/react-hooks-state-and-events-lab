import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const itemsToDisplay =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items">
        {itemsToDisplay.map(({ id, name, category }) => (
          <Item key={id} name={name} category={category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


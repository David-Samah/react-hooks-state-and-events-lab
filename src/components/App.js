import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items"; // Assuming you have a data file

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"} Mode</button>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;


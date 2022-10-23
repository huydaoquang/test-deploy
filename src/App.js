import React from "react";
import { Dropdown } from "./components/dropdown";
import { useDropdown } from "./components/dropdown/dropdown-context";
import Card from "./components/card/Card";
import LoadingSkeleton from "./components/loading/LoadingSkeleton";
import { useState, useEffect } from "react"; // create-react-app npx create-react-app
// Compound component pattern
const dropdownData = ["Viet Nam", "Cambodia", "France", "USA", "Thai Lan"];
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="grid grid-cols-5 gap-5">
      {loading &&
        Array(5)
          .fill(0)
          .map((item, index) => <Card.Loading key={index}></Card.Loading>)}
      {!loading &&
        Array(5)
          .fill(0)
          .map((item, index) => <Card key={index}></Card>)}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Categories from "./components/categories";
import Items from "./components/items";
import { getData } from "./services/index";

function App() {
  const [state, setState] = useState({
    selectedCatId: "",
    categories: [],
    items: [],
  });

  function getCats(results) {
    var cats = [];
    results.map((result) => {
      var cat = {};
      cat["id"] = result.node.id;
      cat["image"] = result.node.image;
      cat["name"] = result.node.name;
      cat["items"] = result.node.items;
      cats.push(cat);
    });
    return cats;
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getData();
      const results = res.edges;
      const cats = getCats(results);
      const selectedCatId = cats[0].id;
      const items = cats[0].items;
      setState((prevValue) => {
        return {
          ...prevValue,
          categories: cats,
          items: items,
          selectedCatId,
        };
      });
    }
    fetchData();
  }, []);

  function handleClick(items, selectedCatId) {
    setState((prevValue) => {
      return {
        ...prevValue,
        items,
        selectedCatId,
      };
    });
  }
  return (
    <div className="container-fluid">
      <Categories
        cats={state.categories}
        onClick={handleClick}
        selectedCatId={state.selectedCatId}
      />
      <Items items={state.items} />
    </div>
  );
}

export default App;

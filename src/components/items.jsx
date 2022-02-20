import React from "react";
import Item from "./item";

function Items(props) {
  const { items } = props;
  return items.map((item, index) => (
    <Item
      key={index}
      image={item.image.url}
      name={item.name}
      material={item.material}
      price={item.price}
    />
  ));
}

export default Items;

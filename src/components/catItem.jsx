import React from "react";
import "../css/catItem.css";

function CatItem(props) {
  const { name, image, items, getItems, activeCat, catId } = props;

  const classCard = activeCat ? "cat-item active-cat" : "cat-item";
  return (
    <div
      className={classCard}
      onClick={() => {
        getItems(items, catId);
      }}
    >
      <img className="cat-img" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default CatItem;

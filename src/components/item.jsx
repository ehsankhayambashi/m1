import React from "react";
import "../css/item.css";

function Item(props) {
  const { image, material, price, name } = props;

  return (
    <div className="card mb-3 border">
      <div className="row">
        <div className="col-4 col-sm-auto">
          <img
            src={image}
            className="border card-size col-img-size border-0"
            alt={name}
          />
        </div>
        <div className="col-8 test">
          <div className="card-body p-style">
            <h5 className="card-title">{name}</h5>
            <small className="material-color">{material}</small>
            <p className="card-text">
              <small className="card-text price-color">
                {price + " تومان"}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

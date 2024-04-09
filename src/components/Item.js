import React from "react";

const Item = ({ imageUrl, title, price }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">Price: &#8377; {price}</p>
    </div>
  );
};

export default Item;

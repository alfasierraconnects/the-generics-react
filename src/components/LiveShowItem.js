import React from "react";

const LiveShowItem = ({ id, date, city, venue }) => {
  return (
    <div className="border p-4 my-4">
      <h3 className="text-xl font-bold">{date}</h3>
      <p className="text-lg">{city}</p>
      <p>{venue}</p>
    </div>
  );
};

export default LiveShowItem;

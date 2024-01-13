import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="bg-white border border-gray-300 float-left font-bold text-2xl leading-8 h-8 w-8 m-0.5 p-0 text-center focus:outline-none focus:bg-gray-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

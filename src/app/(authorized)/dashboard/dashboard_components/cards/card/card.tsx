import React from "react";

const ESLCard = ({
  title = "Example Title",
  value = "0000",
  description = "Example Description",
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-4xl font-bold mt-1">{value}</p>
      <p className="text-gray-400 text-xs mt-1">{description}</p>
    </div>
  );
};

export default ESLCard;

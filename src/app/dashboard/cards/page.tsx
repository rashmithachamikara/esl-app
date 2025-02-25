import React from "react";
import ESLCard from "./card/card"; // Import the reusable card

const Dashboard = () => {
  const eslData = [
    { title: "Total ESLs", value: "1840", description: "Connected ESLs" },
    { title: "Functional ESLs", value: "1836", description: "Working ESLs" },
    { title: "Problematic ESLs", value: "4", description: "ESLs With Issues" },
    {
      title: "ESL Battery",
      value: "79%",
      description: "Average Across all ESLs",
    },
    {
      title: "Lowest Battery",
      value: "12%",
      description: "Lowest 10th Percentile avg.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {eslData.map((item, index) => (
        <ESLCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Dashboard;

import React from 'react';

// Card Component
const Card = ({ title }) => {
  return (
    <div className="bg-primary rounded-lg shadow-lg p-6 flex justify-center items-center h-48 w-48 text-white">
      <h2 className="text-xl font-semibold text-center">{title}</h2>
    </div>
  );
};

// Partners Component
const Partners = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 gap-6">
        <Card title="Flipkart" />
        <Card title="Amazon" />
        <Card title="Nykaa" />
        <Card title="Jio Mart" />
      </div>
    </div>
  );
};

export default Partners;

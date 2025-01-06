import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="flex justify-around items-center text-white bg-blue-600 py-8">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">8K+</h3>
        <p>Success Stories</p>
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-semibold">12K+</h3>
        <p>Expert Instructor</p>
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-semibold">108K+</h3>
        <p>Worldwide Students</p>
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-semibold">310K+</h3>
        <p>Trendy Subjects</p>
      </div>
    </div>
  );
};

export default Stats;

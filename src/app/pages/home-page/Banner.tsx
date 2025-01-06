import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="flex justify-between items-center container">
      <div className="text-foreground w-7/12">
        <div>
          <div className="">
            <h1 className="text-6xl font-bold text-wrap leading-tight ">
              You learn <br /> today and earn
              <br /> tomorrow.
            </h1>
          </div>
          <p className="mt-8">
            You learn today and earn tomorrow. The roots of education are bitter
            but the fruits are sweet.
            <br /> If you learn today you can lead tomorrow.
          </p>
        </div>
        <div className="flex -ml-4 items-center mt-8">
          <button className="bg-black text-white px-5 py-2 rounded-xl ml-4">
            Get Started
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-xl ml-4">
            Explore Courses
          </button>
        </div>
      </div>
      <div className="w-5/12 mr-0">
        <img src="./images/bg.png" width={600} height={370} alt="" />
      </div>
    </div>
  );
};

export default Banner;

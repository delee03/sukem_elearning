import React from 'react';
import Ads from './Ads/Ads';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <>
      <Ads />
      <div className="bg-background text-foreground">
        <header className="flex container  justify-between items-center py-5 ">
          <div className="flex justify-center items-center gap-2 ">
            <img
              src="./images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="logo"
            />
            <h1 className="font-semibold text-2xl">su kem</h1>
          </div>
          <div className="w-7/12 mr-0 flex justify-end items-center">
            <ul className=" flex justify-around   items-center">
              <li className="mr-12 hover:bg-primary hover:py-2 hover:px-3 rounded-lg delay-75  p-3 ">
                <a href="#!">Home</a>
              </li>
              <li className="mr-12  hover:bg-primary hover:py-2 hover:px-3 rounded-lg delay-75 p-3">
                <a href="#!">Course</a>
              </li>
              <li className="mr-12  hover:bg-primary hover:py-2 hover:px-3 rounded-lg delay-75 p-3">
                <a href="#!">Mentors</a>
              </li>
              <li className="mr-12  hover:bg-primary hover:py-2 hover:px-3 rounded-lg delay-75 p-3">
                <a href="#!">About</a>
              </li>
              <li className="mr-12  hover:bg-primary hover:py-2 hover:px-3 rounded-lg delay-75 p-3">
                <a href="#!">Blog</a>
              </li>
              <div>
                <button className="bg-black text-white px-5 py-2 rounded-xl ml-4">
                  Login
                </button>
              </div>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

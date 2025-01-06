import React from 'react';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Banner from './Banner';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <h1>Hello world</h1>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

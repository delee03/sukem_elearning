import React from 'react';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Banner from './Banner';
import Stats from '@/app/components/Stats/Stats';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
      </main>
      <Stats />
      <Footer />
    </div>
  );
};

export default HomePage;

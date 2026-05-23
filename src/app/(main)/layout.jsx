import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Chat from '@/components/buttons/Chat';

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="w-full">
          <Navbar />
        </div>
      </header>
      <main className="py-2 min-h-[calc(100vh-302px)]">{children}</main>
      <footer className="w-full">
        <Footer />
      </footer>
      <div className="fixed bottom-6 right-2 z-50">
        <Chat />
      </div>
    </>
  );
};

export default MainLayout;

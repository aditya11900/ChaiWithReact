import React from 'react';
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
import AppContextProvider from './context/AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow container mx-auto p-4 overflow-auto'>
          <Blog />
        </main>
        <footer className='border-t py-4'>
          <Pagination />
        </footer>
      </div>
    </AppContextProvider>
  );
}

export default App;
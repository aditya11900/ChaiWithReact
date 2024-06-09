import React from 'react';
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
import AppContextProvider from './context/AppContextProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AppContext } from './context/AppContext';



function App() {
  
  return (
    <AppContextProvider>
      
        <Blog />
        <Header />
        <Pagination />

    </AppContextProvider>
  );
}

export default App;
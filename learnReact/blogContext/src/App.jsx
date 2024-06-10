import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import AppContextProvider from './context/AppContextProvider';
import AppContext from './context/AppContext';
import { BrowserRouter, Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
  
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log("Fetching blogs for tag:", tag);
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log("Fetching blogs for category:", category);
      fetchBlogPosts(Number(page), null, category);
    } else {
      console.log("Fetching blogs for page:", page);
      fetchBlogPosts(Number(page));
    }
  }, [searchParams, location.pathname]); // Update the dependencies array
  

  return (
    <>
      <AppContextProvider>
        <Header />
        <main className='flex-grow container mx-auto p-4 overflow-auto mb-16'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="blog/:blogId" element={<BlogPage />} />
            <Route path="tags/:tag" element={<TagPage />} />
            <Route path="categories/:category" element={<CategoryPage />} />
          </Routes>
        </main>
        <Pagination />
      </AppContextProvider>
    </>
  );
}
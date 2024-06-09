// AppContextProvider.jsx
import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchBlogPosts(page);
  }, [page]); // Fetch blog posts when the page changes

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
  }

  const values = {
    posts,
    loading,
    page,
    totalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

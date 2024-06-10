import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    console.log("Fetching blog posts for page:", page);
    fetchBlogPosts(page);
  }, [page]); // Fetch blog posts when the page changes

  async function fetchBlogPosts(page = 1, tag = null, category = null) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) url += `&tag=${tag}`;
    if (category) url += `&category=${category}`; // Add this line to properly handle the category parameter
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Received data:", data);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  

  function handlePageChange(page) {
    console.log("Changing page to:", page);
    setPage(page);
    fetchBlogPosts(page);
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
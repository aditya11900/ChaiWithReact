import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        const baseUrl = "https://codehelp-apis.vercel.app/api";
        const url = `${baseUrl}/get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            console.log("Related Blogs: ");
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error occurred while fetching blog:", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}>
                    Back
                </button>
            </div>
            {loading ? (
                <div>
                    <p>Loading</p>
                </div>
            ) : blog ? (
                <div>
                    <BlogDetails post={blog} />
                    <h2>Related Blogs</h2>
                    {relatedblogs.map(post => (
                        <div key={post.id}>
                            <BlogDetails post={post} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p>No Blog Found</p>
                </div>
            )}
        </div>
    );
}

export default BlogPage;

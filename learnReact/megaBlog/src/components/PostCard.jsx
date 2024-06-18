import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block w-full max-w-sm mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="w-full h-48 object-cover object-center rounded-t-lg"
                />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <div className="flex justify-end">
                        <Link
                            to={`/post/${$id}`}
                            className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
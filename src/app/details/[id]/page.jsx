"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";


const page = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await res.json();
                setPost(data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchPost();
    }, [id]);

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    );
};

export default page;
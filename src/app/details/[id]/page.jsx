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
        <div className="text-center pt-8 space-y-2 md:w-2/3 mx-auto">
            <h1 className="text-2xl font-medium">{post?.title}</h1>
            <p className="text-xl font-normal">{post?.body}</p>
        </div>
    );
};

export default page;
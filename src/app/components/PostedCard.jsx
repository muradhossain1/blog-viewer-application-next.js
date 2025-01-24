import Link from "next/link";


const PostedCard = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 ">
            {
                posts.slice(0, 12).map(post => <div key={post.id} >
                    <Link href={`/details/${post.id}`}>
                        <div className="border p-4 rounded-lg h-28 shadow-xl"><p className="text-base font-medium">{post.title}</p></div>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default PostedCard;
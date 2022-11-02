import Link from "next/link";
import { urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
    post: Post;
}

function SinglePost({ post }: Props) {
    return (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden h-full">
                <img
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                />
                <div className="flex justify-between p-5 bg-white">
                    <div className="h-full">
                        <p className="text-lg font-bold">{post.title}</p>
                        <p className="h-full my-auto">
                            {post.description} by {post.author.name}
                        </p>
                    </div>
                    <img
                        className="h-12 w-12 rounded-full"
                        src={urlFor(post.author.image).url()!}
                        alt=""
                    />
                </div>
            </div>
        </Link>
    );
}

export default SinglePost;

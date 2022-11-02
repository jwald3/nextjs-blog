import { Post } from "../typings";
import SinglePost from "./SinglePost";

interface Props {
    posts: [Post];
}

function PostContainer({ posts }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-3 md:gap-6 p-2 lg:p-6">
            {posts.map((pst: Post) => (
                <SinglePost post={pst} key={pst._id} />
            ))}
        </div>
    );
}

export default PostContainer;

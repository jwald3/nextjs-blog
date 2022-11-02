import Head from "next/head";
import Header from "../components/Header";
import HomepageBanner from "../components/HomepageBanner";
import PostContainer from "../components/PostContainer";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

interface Props {
    posts: [Post];
}

export default function Home({ posts }: Props) {
    return (
        <div className="max-w-7xl mx-auto">
            <Head>
                <title>Jordan Waldo Riesel</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <HomepageBanner />
            <PostContainer posts={posts} />
        </div>
    );
}

export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
        name,
        image,
        
    },
    description,
    mainImage,
    slug
    }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        },
    };
};

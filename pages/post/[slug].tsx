import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";

interface Props {
    post: Post;
}

function PostPage({ post }: Props) {
    return (
        <main>
            <Header />
            <img
                className="w-full h-60 object-cover"
                src={urlFor(post.mainImage).url()!}
                alt=""
            />
            <article className="max-w-3xl mx-auto p-5">
                <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
                <h2 className="text-xl font-light text-gray-500 mb-2">
                    {post.description}
                </h2>
                <div className="flex items-center space-x-2">
                    <img
                        className="h-10 w-10 rounded-full m-2"
                        src={urlFor(post.author.image).url()!}
                        alt=""
                    />
                    <p className="font-extralight text-sm">
                        Blog post by{" "}
                        <span className="text-green-600">
                            {post.author.name}
                        </span>{" "}
                        — Published at{" "}
                        {new Date(post._createdAt).toLocaleString()}
                    </p>
                </div>

                <div className="mt-10">
                    <PortableText
                        dataset={process.env.NEXT_PULIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post.body}
                        className=""
                        serializers={{
                            h1: (props: any) => (
                                <h1
                                    className="text-2xl font-bold my-5"
                                    {...props}
                                />
                            ),
                            h2: (props: any) => (
                                <h2
                                    className="text-xl font-bold my-5"
                                    {...props}
                                />
                            ),
                            h4: (props: any) => (
                                <h4
                                    className="text-l font-bold my-5"
                                    {...props}
                                />
                            ),
                            li: ({ children }: any) => (
                                <li className="ml4 list-disc">{children}</li>
                            ),
                            link: ({ href, children }: any) => (
                                <a
                                    href={href}
                                    className="text-blue-500 hover:underline"
                                >
                                    {children}
                                </a>
                            ),

                            blockquote: (props: any) => (
                                <blockquote
                                    className="text-s mb-5 ml-5 font-extralight text-gray-500"
                                    {...props}
                                />
                            ),
                            image: (props: any) => {
                                return (
                                    <img
                                        className="mt-10 mb-2 mx-auto"
                                        src={urlFor(props.asset).url()!}
                                        alt=""
                                    ></img>
                                );
                            },
                            normal: (props: any) => (
                                <p className="text-m my-5" {...props} />
                            ),
                        }}
                    />
                </div>
            </article>
        </main>
    );
}

export default PostPage;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
    }`;

    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        slug,
        body
    }`;

    const post = await sanityClient.fetch(query, { slug: params?.slug });

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
};
import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10"); // Fetching example data
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }: { posts: any[] }) {
  return (
    <>
      <Head>
        <title>Danh sách bài viết</title>
        <meta
          name="description"
          content="Danh sách các bài viết trên trang web của chúng tôi."
        />
        <meta name="keywords" content="blog, bài viết, Next.js, SSR, React" />
      </Head>
      <div>
        <h1>Danh sách bài viết</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {posts.map((post: any) => (
            <div
              key={post.id}
              style={{
                width: "150px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <img
                src={post.thumbnailUrl}
                alt={post.title}
                style={{ width: "100%", height: "auto" }}
              />
              <h4>{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

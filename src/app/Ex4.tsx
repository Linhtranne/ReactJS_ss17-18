import Image from 'next/image';
import Head from 'next/head';

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      Url: "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
    },
    {
      id: 2,
      title: "Post 2",
      Url: "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Danh sách bài viết</title>
        <meta name="description" content="Danh sách các bài viết" />
        <meta name="keywords" content="blog" />
      </Head>
      <div>
        <h1>Danh sách bài viết</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {posts.map((post) => (
            <div key={post.id} style={{ width: "150px", border: "1px solid #ccc", padding: "10px" }}>
              <Image
                src={post.Url}
                alt={post.title}
                width={150}
                height={150}
                layout="responsive"
                priority={false}
              />
              <h4>{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

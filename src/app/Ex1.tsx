/* eslint-disable @next/next/no-img-element */
export default function Posts() {
    const posts = [
        {
          id: 1,
          title: "Accusamus beatae ad facilis",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          id: 2,
          title: "Reprehenderit est deserunt",
          thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
          id: 3,
          title: "Officia porro iure quia",
          thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
        {
          id: 4,
          title: "Qui eius ut autem sed",
          thumbnailUrl: "https://via.placeholder.com/150/d32776"
        },
        {
          id: 5,
          title: "Eupudandae iusto deleniti",
          thumbnailUrl: "https://via.placeholder.com/150/f66b97"
        },
        {
          id: 6,
          title: "Iusto sunt nobis quasi veritatis",
          thumbnailUrl: "https://via.placeholder.com/600/56a8c2"
        },
      ];
      
    return (
      <div>
        <h1>Danh sách bài viết</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {posts.map((post) => (
            <div key={post.id} style={{ width: "150px", border: "1px solid #ccc", padding: "10px" }}>
              <img src={post.thumbnailUrl} alt={post.title} style={{ width: "100%", height: "auto" }} />
              <h4>{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
import { posts } from "../data/posts";

function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
           </div>
      ))}
    </div>
  );
}

export default Blog;
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

function Blog() {
  return (
    <div className="page-container">
      <h1>Blog Page</h1>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
        <h2>
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          <p>{post.content}</p>
           </div>
      ))}
    </div>
  );
}

export default Blog;
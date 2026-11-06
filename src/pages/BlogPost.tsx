
import { posts } from "../data/posts";
import { Link, useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="page-container">
    <div className="post-card">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
    </div>
  );
}

export default BlogPost;

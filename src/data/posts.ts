
export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Blog Post",
    content: "This is my first blog post. I am learning React Router!"
  },
  {
    id: 2,
    slug: "learning-react",
    title: "Learning React",
    content: "React is a JavaScript library used to build user interfaces."
  },
  {
    id: 3,
    slug: "understanding-typescript",
    title: "Understanding TypeScript",
    content: "TypeScript adds static typing to JavaScript."
  }
];

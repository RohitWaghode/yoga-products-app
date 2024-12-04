import React from "react";
import BlogCard from "./BlogCard";

const Blogs = async () => {
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/blogs/list`);

  if (!response.ok) {
    throw new Error("Error while fetching blogs");
  }
  const blogs = await response.json();

  return (
    <div>
      {Array.isArray(blogs.output) &&
        blogs.output.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  );
};

export default Blogs;

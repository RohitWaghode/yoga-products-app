"use client";
import React, { useState } from "react";

const CreateBlogs = () => {
  const initialState = {
    title: "",
    articles: "",
    image: null,
  };
  const [blogsData, setBlogsData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setBlogsData((prevData) => ({
        ...prevData,
        image: files[0],
      }));
    } else {
      setBlogsData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blogsData.title);
    formData.append("articles", blogsData.articles);
    formData.append("image", blogsData.image);

    try {
      const response = await fetch(
        `${process.env.BACKEND_BASE_URL}/blogs/create`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data && data.output) {
        alert("Blogs created successfully!");
        setBlogsData(initialState);
      }
      console.log(data.message);
    } catch (error) {
      throw new Error(error);
    }
  };

  const previewImage = blogsData.image
    ? URL.createObjectURL(blogsData.image)
    : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create New Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={blogsData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Articles
            </label>
            <textarea
              name="articles"
              value={blogsData.articles}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-20 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {previewImage && (
              <div className="mt-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Create Blogs
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogs;

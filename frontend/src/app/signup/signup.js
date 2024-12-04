"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateUser = () => {
  const router = useRouter();
  const initialState = {
    first_name: "",
    last_name: "",
    email_address: "",
    mobile_number: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.BACKEND_BASE_URL}users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert("Error: " + (errorData.message || "Something went wrong"));
        return;
      }

      const data = await response.json();
      console.log("Success response", data);

      if (data && data.output) {
        setUserData(initialState);
        alert("User created successfully!");
        router.push("/");
      }
    } catch (error) {
      console.log("Error occurred during fetch:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={userData.first_name}
                className="mt-1 block w-full px-4 py-2 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Type your first name here..."
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={userData.last_name}
                className="mt-1 block w-full px-4 py-2 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Type your last name here..."
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email_address"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email_address"
                value={userData.email_address}
                className="mt-1 block w-full px-4 py-2 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Type your email here..."
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="mobile_number"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="number"
                name="mobile_number"
                value={userData.mobile_number}
                className="mt-1 block w-full px-4 py-2 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Type your mobile number here..."
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={userData.password}
                className="mt-1 block w-full px-4 py-2 border border-primary-500 focus:outline-none rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Type your password here..."
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

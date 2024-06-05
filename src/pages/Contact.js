import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 max-w-sm bg-white shadow-md rounded-md text-center">
          <h1 className="text-4xl font-bold  mb-4">Contact</h1>
          <p className="text-lg text-gray-700 mb-4">Page</p>
          <a href="/" className="text-blue-500 hover:underline">
            Go Back Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

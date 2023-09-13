import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white sm:py-24 py-12 flex justify-center items-center">
      <div className="container w-full lg:h-5/6 h-full">
        {/* CONTACT FORM */}
        <h1 className="lg:text-7xl text-3xl text-center italic">
          Get In Touch
        </h1>
        <form
          action="#"
          className="space-y-8 lg:w-1/2 md:w-3/4 sm:w-3/4  sm:mx-auto mx-5 sm:my-20 my-10"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm   rounded-lg shadow-sm border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

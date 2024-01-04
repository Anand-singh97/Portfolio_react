import React from "react";

const Contact = () => {
  return (
    <div name = 'Contact' className="w-full p-4 text-white">
      <div className="flex flex-col justify-center text-center max-w-screen-lg mx-auto">
        <div className="pb-8 flex flex-col gap-5 items-center">
          <p className="text-4xl font-bold inline border-b-2 pb-1 text-gray-800 border-gray-700 w-fit">Contact</p>
          <p className="text-gray-900 font-semibold">Please contact me directly at <a className=" underline text-blue-400" href="mailto:Asingh4337@conestogac.on.ca">Asingh4337@conestogac.on.ca</a> or through this form.</p>
        </div>

        <div className="flex justify-center">
          <form className="flex flex-col gap-5 w-full md:w-1/2" 
          action="https://getform.io/f/b2a4f066-fb58-4ecc-b2fc-80772d77d315" method="POST">
            <input
              className=" p-2 bg-transparent  border-2 rounded-md
                     text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              className=" p-2 bg-transparent  border-2 rounded-md
                     text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your email"
            />
            <textarea
                placeholder="Say Hi! 👋"
              name="message"
              rows="10"
              className="p-2 bg-transparent
                      border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 
                      px-6 py-3 mx-auto flex items-center rounded-md 
                      hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

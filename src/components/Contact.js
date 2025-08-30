import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; 
import toast from "react-hot-toast";

const Contact = () => {

  const handleSubmit=()=>{
    toast.success("meassage send successfully...")
  }
  return (
    <>
      <div className=" bg-gradient-to-b flex items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-gray-100 shadow-lg rounded-2xl p-8 mt-6">
          {/* Header */}
          <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
            Contact Us 🍴
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-orange-600
                 transition" >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-gray-600">
                Got questions about your order, delivery, or menu? Reach us
                here:
              </p>

              <div className="flex items-center space-x-3 text-gray-800 font-medium">
                <MapPin className="text-orange-500" />
                <span>123 Food Street, Gourmet City, GC 12345</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-800 font-medium">
                <Mail className="text-orange-500" />
                <span>support@foodapp.com</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-800 font-medium">
                <Phone className="text-orange-500" />
                <span>+123 456 7890</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};
export default Contact;

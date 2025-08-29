import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              About FlavorHub
            </h2>
            <p>
              FlavorHub is your one-stop solution for discovering the best
              restaurants around you. We bring you curated menus, top-rated
              dishes, and seamless ordering to make every meal special.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              support@flavorhub.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +1 234 567 890
            </p>
            <p>
              <span className="font-semibold">Address:</span> 123 Food Street,
              Gourmet City, GC 12345
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FlavorHub | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

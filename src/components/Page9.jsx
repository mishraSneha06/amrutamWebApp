import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InputSection from '../Page9/InputSection';

const Page9 = () => {
  return (
    <>
      <div className="h-screen w-full bg-green-50 flex flex-wrap flex-col items-center justify-center p-6 md:p-12 box-border">
        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 text-start">
            <h3 className="text-green-900 text-2xl md:text-3xl mb-5">Get In Touch</h3>
            <div className="flex flex-col gap-6 text-black text-lg md:text-xl mb-6">
              <div>support@amrutam.co.in</div>
              <div>Amrutam Pharmaceuticals Pvt Ltd., Chitragupt Ganj, Nai Sadak, Lashkar, Gwalior - 474001</div>
              <div>+91 9713171999</div>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-4">
              {[
                "facebook-f",
                "instagram",
                "twitter",
                "youtube",
                "linkedin",
                "pinterest",
              ].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="hover:text-green-700 bg-green-800 transition duration-200 h-10 w-10 rounded-full flex items-center justify-center"
                >
                  <i className={`fab fa-${icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Information Links */}
          <div className="w-full md:w-1/2 text-start">
            <h3 className="text-green-900 text-2xl md:text-3xl mb-5">Information</h3>
            <div className="text-lg md:text-xl text-gray-800 flex flex-col gap-3">
              {[
                "About Us",
                "Terms and Conditions",
                "Privacy Policy",
                "Privacy Policy for Mobile Apps",
                "Shipping and Returns Policy",
                "International Delivery",
                "For Businesses, Hotels and Resorts",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-green-700 transition duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full max-w-4xl mt-12 text-center">
          <h3 className="text-green-900 text-2xl md:text-3xl mb-5">
            Subscribe to our Newsletter and join Amrutam Family today!
          </h3>
          <InputSection />
        </div>
      </div>
    </>
  );
};

export default Page9;

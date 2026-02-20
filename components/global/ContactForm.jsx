import React from "react";
import Button from "./Button";

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        {/* Left Side - Copy */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Empowering Children Facing Loss and Hardship
          </h2>
          <p className="text-black/90 text-lg md:text-xl leading-relaxed mb-6">
            Find our contact details here to connect swiftly and support our mission helping vulnerable children.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 w-full">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-black font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-black font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-black font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF]"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-black font-semibold mb-2">
                Your Message <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#3399FF] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button 
              href="#" 
              bgColor="#3399FF"
              className="w-full md:w-auto"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
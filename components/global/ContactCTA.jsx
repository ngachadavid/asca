import React from "react";

export default function ContactCTA() {
    return (
        <section className="py-20 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto relative">
                <div className="absolute top-2 left-2 w-[80%] h-full bg-black"></div>

                <div className="w-[80%] relative bg-linear-to-br from-blue-400 via-blue-500 to-cyan-500 p-12 md:p-16 text-start border-2 border-black">
                    <div className="w-[70%]">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Learn how to get involved with our community-based work
                        </h2>

                        <p className="text-white text-lg md:text-xl mb-6 max-w-3xl">
                            We are always eager to connect with passionate individuals and organizations. Reach out to learn how you can contribute to ASCA Luxembourg programs and help children thrive.
                        </p>

                        <div className="relative inline-block">
                            {/* Black underlay */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>

                            {/* Main button */}
                            <a
                                href="mailto:community@ascaluxembourg.org"
                                className="relative -top-1 -left-1 inline-block px-6 py-3 bg-white text-blue-600 font-semibold border border-black hover:translate-x-1 hover:translate-y-1 transition-transform duration-200"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-10 w-64 md:w-80 lg:w-96 hidden md:block">
                    <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
                    <img src="/faq/impact4.jpg" alt="ASCA Community" className="relative w-full h-auto border border-black object-cover" />
                </div>
            </div>
        </section>
    );
}
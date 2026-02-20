import React from "react";
import Button from "./Button";

export default function DonateCTA() {
  return (
    <section className="py-20 px-6 md:px-16">
      {/* Container with relative positioning for shadow */}
      <div className="max-w-6xl mx-auto relative">
        {/* Black shadow */}
        <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
        
        {/* Main gradient container */}
        <div className="relative bg-linear-to-br from-blue-400 via-blue-500 to-cyan-500 p-12 md:p-16 text-start border-2 border-black">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Donate to ASCA 
          </h2>
          
          <p className="text-white text-lg md:text-xl mb-4 max-w-3xl">
            Support vulnerable children through education, nourishment, and emotional care. 
            Together, we can create communities where every child thrives.
          </p>
          
          <p className="text-white/90 text-lg md:text-xl mb-8"> 
            For inquiries, please contact our team.
          </p>

          <Button
            href="/donate" 
            bgColor="#FFFFFF"
            className="text-blue-600!"
          >
            Donate to ASCA
          </Button>
        </div>
      </div>
    </section>
  );
}
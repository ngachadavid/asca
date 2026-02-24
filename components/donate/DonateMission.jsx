export default function DonateMissionSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Text Content - Left Side */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-black/90 text-lg md:text-xl leading-relaxed mb-6">
            Your generosity helps us stand beside children facing poverty, school dropout, hunger, and isolation. Every contribution strengthens our ability to provide education support, nourishment, and emotional care to those who need it most.
          </h2>

          <h2 className="text-black/90 text-lg md:text-xl leading-relaxed">
            At ASCA Luxembourg, we believe in the power of collective action. Every donor becomes part of a shared mission — building a fairer world where every child has the opportunity to learn, grow, and thrive with dignity.
          </h2>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-[40%] relative">
          {/* Black shadow */}
          <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
          
          {/* Main image */}
          <img 
            src="/homepage/impact.webp" 
            alt="Support children through ASCA Luxembourg" 
            className="relative w-full h-64 border border-black object-cover"
          />
        </div>
      </div>
    </section>
  );
}
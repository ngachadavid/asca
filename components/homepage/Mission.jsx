export default function MissionSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Text Content - Left Side */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-black/90 text-lg md:text-xl leading-relaxed">
            ASCA <span className="font-bold">(Appui Scolaire Carlo Acutis)</span> Luxembourg was founded under the inspiration of the young Saint Carlo Acutis, carrying forward his legacy of compassion and service to those in need.
          </h2>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-[40%] relative">
          {/* Black shadow */}
          <div className="absolute top-2 left-2 w-full h-full bg-black"></div>
          
          {/* Main image */}
          <img 
            src="/homepage/carlo.webp" 
            alt="ASCA Story - Inspired by Carlo Acutis" 
            className="relative w-full h-64 border border-black object-cover"
          />
        </div>
      </div>
    </section>
  );
}
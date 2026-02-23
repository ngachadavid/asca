export default function History() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Text Content - Left Side */}
        <div className="md:w-1/2 text-start">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
          Our History
            </h2>
          <p className="mt-6 text-black/80 text-base leading-relaxed text-start">
            Created on July 30, 2023, by a group of Benedictine Secular Oblates belonging to the Third Benedictine Order of the Abbey of Clervaux, the Association believes that helping an orphaned, poor, or abandoned child is like saving humanity for a better world.

Poverty is unjust. ASCA is committed to not leaving behind children living in extreme hardship, providing them with the support they need to pursue a fulfilling education and have enough to eat.

Saint Carlo Acutis, the patron of our association, serves as a model for generosity and compassion toward the most vulnerable, the poorest of the poor.
          </p>
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
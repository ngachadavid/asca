import Button from "../global/Button";

export default function Hero() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-end justify-start relative"
      style={{ backgroundImage: "url('/homepage/hero.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-start w-full max-w-7xl md:w-[50%] px-6 mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight">
          Supporting Every Child’s Journey to Success
        </h1>
        <h2 className="mb-6 mt-4 text-lg md:text-lg text-gray-200">
          ASCA Luxembourg champions education and care for children facing hardship, helping them overcome challenges like poverty, isolation, and loss to build a brighter future.
        </h2>
         {/* Right - Donate Button */}
        <div>
          <Button href="/about">Learn About Us</Button>
        </div>
      </div>
    </section>
  );
}
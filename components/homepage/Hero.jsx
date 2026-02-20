export default function Hero() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/homepage/hero.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Supporting Every Child’s Journey to Success
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          ASCA Luxembourg champions education and care for children facing hardship, helping them overcome challenges like poverty, isolation, and loss to build a brighter future.
        </p>
      </div>
    </section>
  );
}
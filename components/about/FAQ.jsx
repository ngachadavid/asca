import Button from "../global/Button";

export default function FAQHero() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-end justify-start relative"
      style={{ backgroundImage: "url('/homepage/impact.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-start w-full md:w-[50%] px-6 mb-4">
        <h1 className="text-xl md:text-4xl font-bold text-white leading-tight mb-6">
          Find answers about our mission, programs, partnerships, and how you can get involved.
          </h1>
       
         {/* Right - Donate Button */}
        <div>
          <Button href="/donate">Get Involved</Button>
        </div>
      </div>
    </section>
  );
}
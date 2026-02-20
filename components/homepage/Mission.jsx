export default function MissionSection() {
  return (
    <section className="w-full bg-gray-50 pt-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Text Content */}
        <div className="md:w-1/2 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Empowering Children’s Futures Through Support and Learning
          </h2>
          <p className="text-black/80 text-lg md:text-xl leading-relaxed">
            ASCA Luxembourg is devoted to uplifting children from disadvantaged backgrounds by preventing school dropout and addressing challenges like poverty and malnutrition, striving to create a nurturing environment for their growth and education.</p>
        </div>
      </div>
    </section>
  );
}
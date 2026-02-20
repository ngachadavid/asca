export default function TheChallenge() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
        
        {/* Left – 40% */}
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            The Challenge
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Many children face barriers that go beyond the classroom — challenges that
            quietly shape their future long before they have the chance to choose it.
          </p>
        </div>

        {/* Right – 60% */}
        <div className="md:col-span-3 space-y-8 text-gray-700 text-base leading-relaxed">
          
          <p>
            For some children, school becomes difficult not because they lack potential,
            but because poverty creates constant uncertainty. When families struggle to
            afford meals, uniforms, or basic supplies, education can slowly slip out of reach.
          </p>

          <p>
            Malnutrition affects more than physical health — it impacts concentration,
            confidence, and long-term development. A hungry child cannot fully focus
            on learning or participate with the same energy as their peers.
          </p>

          <p>
            Isolation and emotional distress often follow loss or hardship. Children who
            experience bereavement, displacement, or social exclusion may withdraw,
            carrying emotional burdens that shape how they see themselves and the world.
          </p>

          <p>
            These challenges are interconnected. School dropout, poverty, hunger, and
            emotional strain rarely exist alone. To create lasting change, support must
            address the whole child — academically, socially, and emotionally.
          </p>

        </div>
      </div>
    </section>
  );
}
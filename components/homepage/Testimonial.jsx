export default function Testimonial() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Black offset background */}
        <div className="absolute top-2 left-2 w-full h-full bg-black"></div>

        {/* Main Card */}
        <div className="relative -top-2 -left-2 bg-gray-200 border-2 border-black p-8 md:p-12">
          
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
            Hear From One of the Lives We Support
          </h2>

          <p className="font-semibold text-black/90 mb-8">
            Manager, Sainte Marie Mother of God Orphanage – Mugera
          </p>

          {/* Content */}
          <div className="space-y-6 text-black/80 leading-relaxed text-base md:text-lg">
            
            <p>
              The Sainte Marie Mother of God Orphanage was founded in 1946 by Miss Rosa Nyanzira.
              Its mission was to rescue completely destitute children — orphans, abandoned children,
              and those whose parents were disabled or suffering from mental illness. She welcomed
              children from all backgrounds without discrimination.
            </p>

            <p>
              Later, Mama Nestor Nzisabira joined her. They worked together for many years.
              Mama Nestor later founded the Congregation of the Sisters of Sainte Bernadette,
              who helped care for the children alongside Miss Rosa.
            </p>

            <p>
              Miss Rosa faced many hardships, especially a lack of food. She would take the
              children to church to pray, and then to a nearby mountain called “Lourdes”
              in Mugera to ask Jesus and Mary for food. Provision would always follow.
            </p>

            <p>
              The parish once provided land to cultivate and support the orphanage.
              Today, due to economic hardship, that support has greatly reduced.
              We now receive only minimal assistance from local movements.
            </p>

            <p>
              The house is divided into a dormitory and living space for girls,
              and a separate dormitory for boys. We live through divine mercy and
              the generosity of benefactors chosen by the Lord — like ASCA.
            </p>

            <p>
              From the beginning, our way of surviving has been to send children
              to school so they may have a better future. We also teach them to cultivate,
              to care for animals, and to pray for those who help them.
            </p>

            <p>
              We raise small livestock — chickens, rabbits, and goats — to provide
              occasional meat and manure for our crops. We had hoped to acquire larger
              livestock, but the cost is too high. Even a young bull costs more than
              1 million Burundian francs.
            </p>

            <p>
              I conclude by thanking you from the bottom of my heart for the effort
              you make and the love you show us continually. May God bless and strengthen you.
            </p>

          </div>

          {/* Signature */}
          <div className="mt-10 border-t pt-6">
            <p className="font-semibold text-gray-900">
              — Mrs. Béatrice Ntunzwenayo
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
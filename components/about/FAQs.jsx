export default function FAQSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">

        {/* Left – 40% */}
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Learn more about how ASCA Luxembourg supports vulnerable children,
            delivers its programs, and creates sustainable impact.
          </p>
        </div>

        {/* Right – 60% */}
        <div className="md:col-span-3 space-y-10 text-gray-700 text-base leading-relaxed">

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How does ASCA Luxembourg support orphaned students?
            </h3>
            <p>
              We provide educational assistance, mentorship, and emotional support to help
              orphaned and vulnerable children remain engaged in school. Our goal is to
              create stability that allows them to focus, learn, and build confidence in
              their future.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What initiatives address school dropout among bereaved children?
            </h3>
            <p>
              Our programs combine academic support with counseling and personalized
              guidance. By addressing both emotional and educational needs, we help
              children stay motivated and reduce the risk of leaving school prematurely.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How does ASCA tackle hunger and malnutrition?
            </h3>
            <p>
              We work alongside community partners to ensure children have access to
              nutritious meals and basic health awareness. Proper nourishment is
              essential for learning, development, and overall well-being.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Who can benefit from ASCA Luxembourg’s services?
            </h3>
            <p>
              Our programs are designed for children facing social and economic hardship,
              particularly those at risk of school dropout. We prioritize children who
              require consistent support to overcome educational and emotional barriers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
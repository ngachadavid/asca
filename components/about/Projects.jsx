import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Orphelinat de Mugera – Burundi",
      description:
        "Mugera is a small village in the Gitega province of central Burundi. The orphanage, home to around 40 children, was once supported by the parish and volunteers. Post-COVID and due to extreme poverty, the project struggles. Donations from ASCA provide meals and school supplies, making a real difference in the children's lives.",
      images: ["/projects/kr.webp", "/projects/kerrr.webp"],
    },
    {
      title: "Projet Keur Moussa – Sénégal",
      description:
        "At Keur-Moussa in Senegal, children face challenges due to parents’ limited resources. This project, managed by the monks of the Abbey of Keur-Moussa, provides essential support including school materials to help children thrive academically and personally.",
      images: [
        "/projects/kerr.webp",
        "/projects/ker.webp",
        "/projects/ke.webp",
        "/projects/k.webp",
      ],
    },
  ];

  return (
    <section className="pt-20 px-6 md:px-16 max-w-6xl mx-auto">
      {projects.map((project, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black/90 mb-4">{project.title}</h2>
          <p className="text-black/80 mb-6">{project.description}</p>

          {/* Images Grid */}
          <div className={`grid gap-4 ${project.images.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-2"}`}>
            {project.images.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} image ${i + 1}`}
                  className="w-full h-125 object-cover transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
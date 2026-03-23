import React from "react";

const features = [
  {
    title: "Lightning-Fast Performance",
    desc: "Optimized for speed with minimal load times and smooth user experience.",
    icon: "⚡",
  },
  {
    title: "Beautiful UI Components",
    desc: "Modern, pixel-perfect components designed for real-world apps.",
    icon: "🎨",
  },
  {
    title: "Easy Integration",
    desc: "Plug-and-play support for React, Next.js, and Tailwind CSS.",
    icon: "🧩",
  },
];

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800">
          About Our Platform
        </h1>
        <p className="text-slate-500 mt-4">
          We craft modern, scalable, and beautiful UI experiences that help
          developers build faster and better products.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-14 px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&auto=format&fit=crop"
            alt="About"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          {/* Decorative blur */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-semibold text-slate-800">
            Why Choose Us?
          </h2>
          <p className="text-slate-500 mt-3">
            Build stunning frontends without the hassle. Our system is designed
            to help developers move faster while maintaining high-quality UI.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition duration-300"
              >
                <div className="text-xl bg-indigo-100 p-3 rounded-lg">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-indigo-700 transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
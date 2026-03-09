import SectionReveal from "./SectionReveal";

const experiences = [
  {
    role: "MERN Stack Developer ",
    company: "Personal Projects",
    period: "Oct 2024 - Present",
    type: "Self-learning",
    description: [
      "Built responsive web applications using React.js and Next.js",
      "Created RESTful APIs with Node.js and Express",
      "Integrated MongoDB for data storage",
      "Implemented authentication and authorization in projects",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground">
              Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <SectionReveal key={index} delay={index * 200}>
                <div className="relative pl-12 lg:pl-20">
                  <div className="absolute left-[10px] lg:left-[26px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-surface" />

                  <div className="p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-accent/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium text-muted bg-surface rounded-full border border-border">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-4">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionReveal from "./SectionReveal";

const education = [
 {
  degree: "Bachelor of Arts in English",
  institution: "Govt. Saadat College Tangail",
  period: "2021 - 2026",
  description:
    "Focused on English literature, linguistics, and critical analysis. Explored classical and modern texts, developed strong writing and communication skills, and engaged in academic seminars and cultural activities. Currently in final year with an expected graduation in 2026.",
  grade: "Result Pending (Final Year Ongoing)"
}
,
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Gatail Cantonment public school and college",
    period: "2019 - 2021",
    description:
      "Completed higher secondary education with a focus on science, mathematics, and physics. Developed early interest in technology and programming.",
    grade: "GPA: 5.00 / 5.00",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground">
              Education
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <SectionReveal key={index} delay={index * 200}>
                <div className="relative pl-12 lg:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-[10px] lg:left-[26px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />

                  <div className="p-6 lg:p-8 rounded-2xl bg-surface border border-border hover:border-accent/20 transition-all duration-300">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-3">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-muted text-sm leading-relaxed mb-3">
                      {edu.description}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {edu.grade}
                    </p>
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

import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          <SectionReveal className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-surface border border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 via-surface to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-display text-accent/30">
                      <img src="Gemini_Generated_Image_22snmo22snmo22sn.png" alt="" />
                    </span>
                    <p className="text-muted text-sm mt-4">Passionate Coder</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/10 rounded-2xl -z-10" />
            </div>
          </SectionReveal>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <SectionReveal>
              <p className="text-lg text-foreground leading-relaxed">
                I&apos;m{" "}
                <span className="text-accent font-semibold">Mehedi Hasan</span>,
                a MERN Stack Web Developer with a deep passion for building
                things that live on the internet. My journey into programming
                started during my university years when I built my first website
                and was instantly hooked by the power of turning ideas into
                interactive digital experiences.
              </p>
            </SectionReveal>

            <SectionReveal delay={100}>
              <p className="text-muted leading-relaxed">
                Since then, I&apos;ve been on a continuous learning journey —
                from mastering HTML, CSS, and JavaScript fundamentals to diving
                deep into modern frameworks like React and Next.js, and backend
                technologies like Node.js and databases. Every line of code I
                write is driven by the desire to create something meaningful and
                impactful.
              </p>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p className="text-muted leading-relaxed">
                I particularly enjoy working on MERN-Stack applications where I
                can see the complete picture — from designing intuitive user
                interfaces to architecting robust backend systems.
                Problem-solving is what excites me most; there&apos;s nothing
                quite like the satisfaction of cracking a tough bug or optimizing
                a slow query.
              </p>
            </SectionReveal>

            <SectionReveal delay={300}>
              <p className="text-muted leading-relaxed">
                Outside of coding, I&apos;m an avid cricket enthusiast —
                you&apos;ll often find me on the field during weekends. I also
                enjoy reading tech blogs, exploring new coffee shops, and
                occasionally sketching UI designs on paper before bringing them
                to life in code. I believe that creativity outside of work fuels
                better creativity in code.
              </p>
            </SectionReveal>

            <SectionReveal delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Projects", value: "15+" },
                  { label: "Technologies", value: "12+" },
                  { label: "Years Coding", value: "1.5+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-surface border border-border text-center"
                  >
                    <p className="text-2xl font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

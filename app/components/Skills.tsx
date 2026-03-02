"use client";

import { useEffect, useRef, useState } from "react";
import SectionReveal from "./SectionReveal";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "~",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: ">",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
     
      { name: "Firebase", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "#",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 92 },
     
      { name: "Figma", level: 70 },
      { name: "Linux", level: 72 },
      { name: "Vercel", level: 85 },
    ],
  },
];

function SkillBar({
  skill,
  isVisible,
  delay,
}: {
  skill: Skill;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-accent font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-border/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent-dark via-accent to-accent-light rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground">
              Skills
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
        </SectionReveal>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <SectionReveal key={category.title} delay={catIndex * 150}>
              <div className="p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-mono text-lg font-bold">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      isVisible={isVisible}
                      delay={catIndex * 150 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

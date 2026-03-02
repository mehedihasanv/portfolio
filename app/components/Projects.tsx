
import Link from "next/link";
import { projects } from "../data/projects";
import SectionReveal from "./SectionReveal";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground">
              Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 150}>
              <div className="group rounded-2xl bg-surface border border-border hover:border-accent/30 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                
                {/* Image or Gradient fallback */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full"
                  />
                ) : (
                  <div
                    className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-display text-foreground/20">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium text-accent bg-accent/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-0.5 text-xs text-muted">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors group/link"
                  >
                    View Details
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

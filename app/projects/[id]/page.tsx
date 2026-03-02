import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Mehedi Hasan`,
    description: project.tagline,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeftIcon />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero banner */}
      <div
        className={`bg-gradient-to-br ${project.gradient} border-b border-border`}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-3">
            {project.name}
          </h1>
          <p className="text-lg text-muted-light max-w-2xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-colors"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-light text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <GithubIcon />
              Source Code
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                About This Project
              </h2>
              <p className="text-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                Challenges Faced
              </h2>
              <p className="text-muted leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                Future Improvements
              </h2>
              <p className="text-muted leading-relaxed">
                {project.improvements}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 p-6 rounded-2xl bg-surface border border-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium text-foreground bg-background rounded-lg border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent text-background font-semibold rounded-xl hover:bg-accent-light transition-colors text-sm"
                >
                  <ExternalLinkIcon />
                  View Live Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 border border-border-light text-foreground font-medium rounded-xl hover:border-accent hover:text-accent transition-colors text-sm"
                >
                  <GithubIcon />
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeftIcon />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

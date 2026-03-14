import SectionReveal from "./SectionReveal";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mehedihasanv", icon: GithubIcon },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mehedi-hasan-3a36233b4",
    icon: LinkedInIcon,
  },
  { name: "Twitter", href: "https://x.com/HasanMehed57540", icon: TwitterIcon },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mehedi.hasan.65118",
    icon: FacebookIcon,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <SectionReveal>
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent border border-accent/30 rounded-full mb-6 mt-6">
                Available for freelance work
              </span>
            </SectionReveal>

            <SectionReveal delay={100}>
              <p className="text-muted text-lg mb-2">Hello, I&apos;m</p>
            </SectionReveal>

            <SectionReveal delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-foreground mb-4 tracking-tight">
                Mehedi Hasan
              </h1>
            </SectionReveal>

            <SectionReveal delay={300}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6">
                <span className="text-accent">MERN Stack</span>{" "}
                <span className="text-muted-light">Web Developer</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={400}>
              <p className="text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                I craft performant, accessible, and visually compelling web
                experiences. Passionate about turning complex problems into
                elegant digital solutions.
              </p>
            </SectionReveal>

            <SectionReveal delay={500}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/uc?export=download&id=1eZCiEZF0jwKoL8wj6JLV8bvm8oVd7dmo"
                  target="_blank"
                  className="group flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  <DownloadIcon />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-border-light text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={600}>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2.5 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Photo placeholder */}
          <SectionReveal delay={300} className="flex-shrink-0">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-surface border-2 border-accent/20 overflow-hidden animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 via-surface-light to-accent/10 flex items-center justify-center">
                  <span className="text-8xl font-display text-accent/40">
                    <img
                      src="/Gemini_Generated_Image_22snmo22snmo22sn.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/20 rounded-full animate-float" />
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/10 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-muted/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

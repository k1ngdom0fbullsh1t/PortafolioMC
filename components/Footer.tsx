import { Github, Linkedin /*, Twitter, Mail */ } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/k1ngdom0fbullsh1t", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/marcelo-corro-troncoso-7b576b22b", label: "LinkedIn" },
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  // { icon: Mail, href: "mailto:marcelocorro00@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <span className="text-foreground font-medium">Marcelo Corro</span>. Construido con Next.js, React, Tailwind CSS y Gemini API.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-indigo-500/50 hover:bg-muted transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

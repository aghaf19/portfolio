import { Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "www.linkedin.com/in/muhammad-faizan3", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aghafaizan19@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" }
  ];

  return (
    <footer className="px-6 py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Muhammad Faizan
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              UI/UX Designer crafting intuitive, beautiful digital experiences. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground-secondary hover:text-accent-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/50 border border-border flex items-center justify-center hover:bg-accent-primary hover:border-accent-primary hover:scale-110 transition-all">
                    <social.icon className="h-4 w-4 text-foreground-secondary group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-foreground-secondary text-sm">
              © {currentYear} Muhammad Faizan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
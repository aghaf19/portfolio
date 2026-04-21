import { Target, Users, Lightbulb, Zap } from "lucide-react";

export function About() {
  const strengths = [
    {
      icon: Target,
      title: "User-Centered Design",
      description: "Creating intuitive experiences that prioritize user needs and behaviors"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Transforming complex challenges into elegant, simple solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with cross-functional teams to deliver results"
    },
    {
      icon: Zap,
      title: "Rapid Iteration",
      description: "Fast prototyping and testing to validate design decisions"
    }
  ];

  return (
    <section id="about" className="px-6 py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Passionate designer focused on creating meaningful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6 animate-in slide-in-from-left duration-700 delay-200">
            <div className="space-y-5 text-lg text-foreground-secondary leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Muhammad Faizan</span>, 
                a UI/UX Designer focused on creating clean, intuitive, and user-centered digital experiences.
              </p>
              <p>
                With <span className="text-accent-primary font-semibold">2+ years of experience</span>, 
                I specialize in designing clear workflows, simplifying complex systems, and improving 
                product usability for SaaS, healthcare, e-commerce, and service-based platforms.
              </p>
              <p>
                I enjoy working with cross-functional teams, transforming requirements into practical 
                design solutions that balance user needs, technical feasibility, and business goals.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-accent/50 border border-border">
                <p className="text-2xl font-bold text-accent-primary">2+</p>
                <p className="text-sm text-foreground-secondary mt-1">Years</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/50 border border-border">
                <p className="text-2xl font-bold text-accent-secondary">20+</p>
                <p className="text-sm text-foreground-secondary mt-1">Projects</p>
              </div>
            </div>
          </div>

          {/* Right Column - Strengths */}
          <div className="space-y-4 animate-in slide-in-from-right duration-700 delay-300">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <strength.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 text-foreground">
                      {strength.title}
                    </h4>
                    <p className="text-foreground-secondary leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { Figma, Palette, Code, BarChart, Users, Layers } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Figma,
      title: "Design Tools",
      gradient: "from-accent-primary to-accent-primary-light",
      skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
    },
    {
      icon: Palette,
      title: "Design Systems",
      gradient: "from-accent-secondary to-blue-400",
      skills: ["Component Libraries", "Style Guides", "Design Tokens", "Accessibility", "Responsive Design"]
    },
    {
      icon: Layers,
      title: "UI Design",
      gradient: "from-accent-tertiary to-pink-400",
      skills: ["Visual Design", "Typography", "Color Theory", "Iconography", "Illustrations"]
    },
    {
      icon: Users,
      title: "UX Research",
      gradient: "from-accent-success to-green-400",
      skills: ["User Interviews", "Usability Testing", "Personas", "Journey Mapping", "A/B Testing"]
    },
    {
      icon: BarChart,
      title: "Strategy",
      gradient: "from-purple-500 to-accent-primary",
      skills: ["Information Architecture", "Wireframing", "Prototyping", "User Flows", "Competitive Analysis"]
    },
    {
      icon: Code,
      title: "Development",
      gradient: "from-accent-secondary to-accent-primary",
      skills: ["HTML/CSS", "React Basics", "Tailwind CSS", "Design Handoff", "Git/GitHub"]
    }
  ];

  return (
    <section id="skills" className="px-6 py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in-50 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>

              {/* Skills List */}
              <ul className="space-y-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-foreground-secondary"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-2xl glass border border-border-light text-center">
          <p className="text-lg text-foreground-secondary">
            Always learning and expanding my skillset. Currently exploring{" "}
            <span className="text-accent-primary font-semibold">Motion Design</span> and{" "}
            <span className="text-accent-secondary font-semibold">3D UI Elements</span>
          </p>
        </div>
      </div>
    </section>
  );
}

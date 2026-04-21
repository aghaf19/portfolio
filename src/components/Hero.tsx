import image_cf59af76f0b8abc91be0ffafe2097114d95c8349 from 'figma:asset/cf59af76f0b8abc91be0ffafe2097114d95c8349.png';
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = '../public/Muhammad_Faizan_CV.pdf'; // Ensure this path is correct
    link.download = "Muhammad_Faizan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Gradient background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent-primary" />
              <span className="text-sm font-medium text-foreground">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Muhammad
                <br />
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  Faizan
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground-secondary">
                UI/UX Designer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-lg">
              Creating clear, efficient, and human-centered digital products. 
              Specializing in SaaS, healthcare, and e-commerce design solutions.
            </p>

            {/* Stats Badge */}
            <div className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-card border border-border shadow-lg">
              <div>
                <p className="text-3xl font-bold text-accent-primary">2+</p>
                <p className="text-sm text-foreground-secondary">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-accent-secondary">20+</p>
                <p className="text-sm text-foreground-secondary">Projects Completed</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleScrollToProjects}
                size="lg" 
                className="bg-accent-primary hover:bg-accent-primary-light text-white rounded-xl px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={downloadCV}
                variant="outline" 
                size="lg" 
                className="rounded-xl px-8 border-2 hover:bg-accent hover:scale-105 transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-in slide-in-from-right duration-700 delay-200">
            <div className="relative z-10">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-tr from-accent-secondary to-accent-tertiary rounded-full opacity-20 blur-2xl" />
              
              {/* Profile Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                <ImageWithFallback
                  src={image_cf59af76f0b8abc91be0ffafe2097114d95c8349}
                  alt="Muhammad Faizan - UI/UX Designer"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full shadow-xl border border-white/20">
                <p className="text-sm font-semibold whitespace-nowrap">
                  <span className="text-accent-success">●</span> Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and see how I can help
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* CTA Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">Ready to start a project?</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Let's create something amazing together. I'm available for freelance work, 
              collaborations, and full-time opportunities.
            </p>
            <Button 
              variant="secondary" 
              className="bg-white text-accent-primary hover:bg-white/90 shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Write an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
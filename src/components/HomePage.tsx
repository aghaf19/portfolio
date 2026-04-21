import { Hero } from "./Hero";
import { About } from "./About";
import { ProjectCard } from "./ProjectCard";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

const projects = [
  {
    title: "Parking Management System",
    description: "A clear and efficient interface for managing parking slots, entries, and digital payments.",
    image: "https://images.unsplash.com/photo-1772385850004-3037a20f9c2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwbWFuYWdlbWVudCUyMGRpZ2l0YWwlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc2MjU3NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["SaaS", "Dashboard", "IoT"],
    link: "/case-study/parking-management"
  },
  {
    title: "Pharmacy Application",
    description: "A simple and intuitive way for users to order medicines and manage prescriptions.",
    image: "https://images.unsplash.com/photo-1712617146928-51ab5aabc341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3NjI1NzQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Healthcare", "Mobile App", "E-commerce"],
    link: "/case-study/pharmacy-app"
  },
  {
    title: "FairPlay Gaming Dashboard",
    description: "A clean, data-driven dashboard that visualizes key gaming analytics and user activity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc2MjU3NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Gaming", "Dashboard", "Analytics"],
    link: "/case-study/fairplay-gaming"
  },
  {
    title: "Food Delivery Application",
    description: "A streamlined ordering flow with easy menu browsing, fast checkout, and real-time tracking.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc2MTk0MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Food", "Mobile App", "Delivery"],
    link: "/case-study/food-delivery"
  },
  {
    title: "IT Solutions Company Website",
    description: "A modern service-focused website showcasing IT solutions with clarity and structure.",
    image: "https://images.unsplash.com/photo-1764123108291-0f48d2c7e563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHRlY2hub2xvZ3klMjBzb2x1dGlvbnMlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzYyNTc0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Corporate", "Web Design", "B2B"],
    link: "/case-study/it-solutions"
  },
  {
    title: "Multimedia Company Website",
    description: "A visually engaging website that highlights creative services and portfolio work.",
    image: "https://images.unsplash.com/photo-1767126600705-b40408eabd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG11bHRpbWVkaWElMjBzdHVkaW98ZW58MXx8fHwxNzc2MjU3NDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Creative", "Web Design", "Portfolio"],
    link: "/case-study/multimedia-company"
  },
  {
    title: "Live Streaming Application",
    description: "A smooth, intuitive interface for discovering, watching, and interacting with live streams.",
    image: "https://images.unsplash.com/photo-1764162051244-1391c41122ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nJTIwdmlkZW8lMjBicm9hZGNhc3R8ZW58MXx8fHwxNzc2MjU3NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Entertainment", "Streaming", "Mobile"],
    link: "/case-study/live-streaming"
  },
  {
    title: "Commercial Air Conditioning Website",
    description: "A professional website presenting products and services with a clean corporate layout.",
    image: "https://images.unsplash.com/photo-1758545814875-c2f0a0c89943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWlyJTIwY29uZGl0aW9uaW5nJTIwc3lzdGVtfGVufDF8fHx8MTc3NjI1NzQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Corporate", "Web Design", "B2B"],
    link: "/case-study/air-conditioning"
  },
  {
    title: "Healthcare Application",
    description: "A user-friendly health management experience with accessible navigation and key features.",
    image: "https://images.unsplash.com/photo-1758691463000-08b98131daf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2VsbG5lc3MlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc2MjU3NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Healthcare", "Mobile App", "Wellness"],
    link: "/case-study/healthcare-app"
  },
  {
    title: "Massage Service Website",
    description: "A minimal, calming booking experience for exploring services and scheduling appointments.",
    image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3NjI1NzQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Wellness", "Booking", "Web Design"],
    link: "/case-study/massage-service"
  },
  {
    title: "Clothing E-commerce Website",
    description: "A modern shopping interface with clear product presentation and a simple checkout flow.",
    image: "https://images.unsplash.com/photo-1558234200-3efd43232f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBlY29tbWVyY2UlMjBzaG9wfGVufDF8fHx8MTc3NjI1NzQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["E-commerce", "Fashion", "Web App"],
    link: "/case-study/clothing-ecommerce"
  },
  {
    title: "Real Estate Application",
    description: "A clean property search experience with easy filters and intuitive browsing.",
    image: "https://images.unsplash.com/photo-1769776400238-cd24612240ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBzZWFyY2h8ZW58MXx8fHwxNzc2MTk1ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Real Estate", "Mobile App", "Search"],
    link: "/case-study/real-estate"
  }
];

export function HomePage() {
  return (
    <>
      <div id="#home">
        <Hero />
      </div>

      <section id="projects" className="px-6 py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              A selection of recent work showcasing my design process and problem-solving approach
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="aspect-video overflow-hidden bg-muted relative group/image">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          {link && (
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary group-hover:scale-110 transition-all">
              <ArrowUpRight className="h-4 w-4 text-accent-primary group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          )}
        </div>
        <p className="text-foreground-secondary leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium bg-accent/50 border border-border rounded-lg text-foreground-secondary hover:border-accent-primary/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        <Card className="group cursor-pointer overflow-hidden border-border hover:border-accent-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
          {cardContent}
        </Card>
      </Link>
    );
  }

  return (
    <Card className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 bg-card">
      {cardContent}
    </Card>
  );
}

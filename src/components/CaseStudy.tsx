import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, TrendingUp } from "lucide-react";

interface CaseStudyProps {
  id?: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  image: string;
  tags: string[];
  duration: string;
  role: string;
}

export function CaseStudy({
  id,
  title,
  client,
  description,
  challenge,
  solution,
  impact,
  image,
  tags,
  duration,
  role,
}: CaseStudyProps) {
  return (
    <Card id={id} className="overflow-hidden scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="aspect-square lg:aspect-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-8 space-y-6">
          <div>
            <div className="text-purple-600 dark:text-purple-400 mb-2">{client}</div>
            <h3 className="text-3xl mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">{role}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-gray-900 dark:text-gray-100">Challenge</h4>
              <p className="text-gray-600 dark:text-gray-400">{challenge}</p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900 dark:text-gray-100">Solution</h4>
              <p className="text-gray-600 dark:text-gray-400">{solution}</p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900 dark:text-gray-100">Impact</h4>
              <ul className="space-y-2">
                {impact.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button className="w-full lg:w-auto">View Full Case Study</Button>
        </CardContent>
      </div>
    </Card>
  );
}

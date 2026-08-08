import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-background border-t border-primary/10"
    >
      <div className="container-width">
        <SectionHeading
          centered
          subtitle="A selection of my recent works where functionality meets aesthetics."
        >
          Featured Projects
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="aspect-3/2 p-2 bg-accent/30 relative overflow-hidden group">

                  {project.imageSrc ? (
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  ) :
                    (<div className="absolute inset-0 flex items-center justify-center text-primary/40 font-medium italic group-hover:opacity-100 transition-opacity bg-primary/10">
                      Preview coming soon
                    </div>)
                  }
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <div key={tech}>
                        <Badge variant="accent">
                          {tech}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-size-body-lg font-bold text-primary mb-3">
                    {project.title}
                  </h3>

                  <p className="text-text-muted text-size-body-sm mb-6 flex-grow">
                    {project.descriptionWhy}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-primary/5">
                    {project.liveDemoUrl && project.repositoryUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary font-semibold hover:text-emphasis transition-colors text-size-body-sm"
                        aria-label={`Live demo of ${project.title} (opens in a new tab)`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden />
                        Live Demo
                      </a>
                      ) : <span>Not live yet</span>
                    }
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-muted font-medium hover:text-primary transition-colors text-size-body-sm"
                      aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                    >
                      <Github className="w-4 h-4" aria-hidden />
                      View Code
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

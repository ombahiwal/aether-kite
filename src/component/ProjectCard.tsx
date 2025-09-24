import React from "react";

interface ProjectCardProps {
  title: string;
  tag: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tag, image }) => (
  <article className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white/70 dark:bg-neutral-900/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
    <div className="aspect-[16/10] w-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : null}
    </div>
    <div className="p-4 md:p-5">
      <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-neutral-500">
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" /> {tag}
        </span>
      </div>
      <h3 className="mt-2 text-lg md:text-xl font-medium group-hover:underline underline-offset-4 decoration-neutral-300">
        {title}
      </h3>
    </div>
  </article>
);

export default ProjectCard;

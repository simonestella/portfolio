"use client";

import { motion } from "framer-motion";
import { MouseEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
};

function Icon({ type }: { type: ProjectItem["icon"] }) {
  const baseClasses = "h-6 w-6 text-[#0071e3]";

  if (type === "spark") {
    return (
      <svg className={baseClasses} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg className={baseClasses} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 8L4 12L8 16M16 8L20 12L16 16M14 6L10 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={baseClasses} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12H21M12 3C14.5 5.5 16 8.7 16 12C16 15.3 14.5 18.5 12 21C9.5 18.5 8 15.3 8 12C8 8.7 9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.article
      className="glass-card group"
      onMouseMove={onMouseMove}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <Card className="border-0 bg-transparent p-0 shadow-none backdrop-blur-0">
        <CardHeader>
          <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white/80 text-[#0071e3] shadow-sm">
            <Icon type={project.icon} />
          </div>
          <CardTitle className="text-lg text-[#1d1d1f]">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-[#5b5b60]">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

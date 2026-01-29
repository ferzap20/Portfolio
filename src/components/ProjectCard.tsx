/**
 * PROJECT CARD COMPONENT
 *
 * Reusable card for displaying case study preview
 * Shows hero image, title, role, year, and tags
 * Hover effect with lift animation
 *
 * EDITING GUIDE:
 *  - Adjust card styling: edit src/styles/components.css under "CARD COMPONENT"
 *  - Change displayed fields: modify JSX below
 *  - Change image aspect ratio: update aspect-ratio in CSS
 *  - Add additional fields: modify the CaseStudy type in hooks and display them here
 */

import { Link } from 'react-router-dom';
import { CaseStudy } from '../hooks/useFetchData';

interface ProjectCardProps {
  caseStudy: CaseStudy;
}

export function ProjectCard({ caseStudy }: ProjectCardProps) {
  return (
    <Link to={`/project/${caseStudy.slug}`} className="card">
      <img
        src={caseStudy.hero_image_url}
        alt={caseStudy.title}
        className="card__image"
        loading="lazy"
      />
      <div className="card__content">
        <div>
          <h3 className="card__title">{caseStudy.title}</h3>
          <p className="card__subtitle">
            {caseStudy.year} • {caseStudy.role}
          </p>
        </div>
        <p className="card__description">{caseStudy.blurb}</p>
        <div className="card__tags">
          {caseStudy.tools.map((tool) => (
            <span key={tool} className="card__tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/**
 * PROJECT DETAIL PAGE
 *
 * Full case study page showing complete project information
 * Dynamically loaded based on slug parameter from URL
 *
 * STRUCTURE:
 *  1. Hero image (full width)
 *  2. Project header (title, year, role, tools)
 *  3. Problem statement
 *  4. Approach section (phases)
 *  5. Outcome
 *  6. Gallery with lightbox
 *  7. Process steps
 *  8. Related projects navigation
 *
 * EDITING GUIDE:
 *  - Modify layout: change section structure below
 *  - Add new sections: duplicate existing section div and customize
 *  - Change styling: modify inline styles or update CSS files
 *  - Add new fields to case study: edit database schema and hooks
 *
 * DATABASE EDITING:
 *  - To add a new case study:
 *    1. Go to Supabase dashboard > case_studies table
 *    2. Click "Insert Row"
 *    3. Fill in all fields: slug, title, year, role, tools (JSON), problem, approach (JSON), etc.
 *    4. Save and refresh page
 *  - To edit existing: just update fields in Supabase dashboard
 *  - JSON format for "tools": ["Figma", "React", "Tailwind"]
 *  - JSON format for "approach": ["Phase 1 description", "Phase 2 description", ...]
 *  - JSON format for "gallery_urls": ["url1", "url2", "url3"]
 *  - JSON format for "process_steps": ["Step 1", "Step 2", ...]
 */

import { useParams, Link } from 'react-router-dom';
import { useCaseStudy, useCaseStudies } from '../hooks/useFetchData';
import BentoGallery from '../components/BentoGallery';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: currentCase, loading: caseLoading, error: caseError } = useCaseStudy(slug || '');
  const { data: allCases } = useCaseStudies();

  if (!slug || caseLoading) {
    return (
      <div className="container mx-auto" style={{ padding: 'var(--space-6)' }}>
        Loading project...
      </div>
    );
  }

  if (caseError || !currentCase) {
    return (
      <div className="container mx-auto" style={{ padding: 'var(--space-6)' }}>
        <h1 className="text-h2">Project not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  // Get related projects (other cases)
  const relatedProjects = allCases.filter((c) => c.slug !== slug).slice(0, 2);

  const galleryImages = currentCase.gallery_urls.map((url) => ({
    src: url,
    alt: `${currentCase.title} gallery image`
  }));

  return (
    <div className="container mx-auto">
      {/* Hero Image */}
      <section style={{ marginTop: 'var(--space-4)' }}>
        <img
          src={currentCase.hero_image_url}
          alt={currentCase.title}
          style={{
            width: '100%',
            aspectRatio: '16/10',
            objectFit: 'cover',
            borderRadius: 'var(--radius-lg)',
          }}
        />
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="article">
          <h1 className="text-h1">{currentCase.title}</h1>

          <div style={{
            display: 'flex',
            gap: 'var(--space-4)',
            marginTop: 'var(--space-4)',
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--color-border)',
          }}>
            <div>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                Year
              </p>
              <p className="font-bold">{currentCase.year}</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                Role
              </p>
              <p className="font-bold">{currentCase.role}</p>
            </div>
            <div>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                Tools
              </p>
              <p className="font-bold">{currentCase.tools.join(', ')}</p>
            </div>
          </div>

          {/* Problem */}
          <section style={{ marginTop: 'var(--space-6)' }}>
            <h2 className="text-h2">Problem</h2>
            <p className="text-body">{currentCase.problem}</p>
          </section>

          {/* Approach */}
          <section style={{ marginTop: 'var(--space-6)' }}>
            <h2 className="text-h2">Approach</h2>
            <ol style={{ paddingLeft: 'var(--space-4)' }}>
              {currentCase.approach.map((phase, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-2)', lineHeight: 'var(--line-height-body)' }}>
                  {phase}
                </li>
              ))}
            </ol>
          </section>

          {/* Outcome */}
          <section style={{ marginTop: 'var(--space-6)' }}>
            <h2 className="text-h2">Outcome</h2>
            <p className="text-body">{currentCase.outcome}</p>
          </section>

          {/* Gallery */}
          {galleryImages.length > 0 && (
            <section style={{ marginTop: 'var(--space-6)' }}>
              <h2 className="text-h2">Gallery</h2>
              <BentoGallery images={galleryImages} />
            </section>
          )}

          {/* Process Steps */}
          {currentCase.process_steps.length > 0 && (
            <section style={{ marginTop: 'var(--space-6)' }}>
              <h2 className="text-h2">Process</h2>
              <ol style={{ paddingLeft: 'var(--space-4)' }}>
                {currentCase.process_steps.map((step, index) => (
                  <li key={index} style={{ marginBottom: 'var(--space-2)', lineHeight: 'var(--line-height-body)' }}>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section">
          <h2 className="text-h2" style={{ marginBottom: 'var(--space-4)' }}>Related Projects</h2>
          <div className="grid--2cols">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.slug}`}
                className="card"
              >
                <img
                  src={project.hero_image_url}
                  alt={project.title}
                  className="card__image"
                />
                <div className="card__content">
                  <h3 className="card__title">{project.title}</h3>
                  <p className="card__description">{project.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <section style={{ textAlign: 'center', paddingBottom: 'var(--space-6)' }}>
        <Link to="/" className="button button--secondary">
          Back to Projects
        </Link>
      </section>
    </div>
  );
}

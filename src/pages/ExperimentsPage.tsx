/**
 * EXPERIMENTS PAGE
 *
 * Displays IA Product Design tests and experiments
 * Simple expandable list of experiment titles with external links
 *
 * EDITING GUIDE - ADDING NEW EXPERIMENTS:
 *  1. Go to Supabase dashboard > ia_experiments table
 *  2. Click "Insert Row"
 *  3. Fill fields:
 *     - title: Experiment name (e.g., "VR Hand Tracking Gesture Library")
 *     - summary: 1-line description
 *     - external_link: URL to view the experiment (optional)
 *     - order_index: number for sorting (1, 2, 3, etc.)
 *  4. Save and refresh page
 *
 * TO MODIFY STYLING:
 *  - Edit src/styles/components.css under "CARD COMPONENT" for card styling
 *  - Edit src/styles/layout.css for spacing and grid layout
 *  - Change section title styling in this file
 */

import { useExperiments } from '../hooks/useFetchData';
import { ExternalLink } from 'lucide-react';

export function ExperimentsPage() {
  const { data: experiments, loading, error } = useExperiments();

  return (
    <div className="container mx-auto">
      <section className="section--header">
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          IA Product Design Tests
        </h1>
        <p className="text-body" style={{
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-6)',
          maxWidth: '700px',
        }}>
          Exploring interaction design patterns, prototyping methodologies, and user research findings
          through systematic experimentation and testing.
        </p>

        {error && (
          <div style={{
            padding: 'var(--space-4)',
            backgroundColor: 'var(--color-error)',
            color: 'white',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--space-4)',
          }}>
            Error loading experiments. Please try again later.
          </div>
        )}

        {loading ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-6)',
            color: 'var(--color-text-secondary)',
          }}>
            Loading experiments...
          </div>
        ) : experiments.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-6)',
            color: 'var(--color-text-secondary)',
          }}>
            No experiments yet
          </div>
        ) : (
          <div style={{ maxWidth: '700px' }}>
            {experiments.map((experiment, index) => (
              <a
                key={experiment.id}
                href={experiment.external_link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  display: 'block',
                  marginBottom: index < experiments.length - 1 ? 'var(--space-3)' : '0',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div className="card__content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 'var(--space-2)' }}>
                    <div>
                      <h3 className="card__title" style={{ marginBottom: 'var(--space-1)' }}>
                        {experiment.title}
                      </h3>
                      <p className="card__description">{experiment.summary}</p>
                    </div>
                    {experiment.external_link && (
                      <ExternalLink
                        size={20}
                        style={{
                          color: 'var(--color-accent)',
                          flexShrink: 0,
                          marginTop: 'var(--space-1)',
                        }}
                      />
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

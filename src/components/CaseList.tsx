import CaseCard from './CaseCard';
import { CaseStudy } from '../types/content';

interface CaseListProps {
  cases: CaseStudy[];
}

export default function CaseList({ cases }: CaseListProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'var(--space-lg)'
    }} className="case-list">
      <style>{`
        /* Tablet: 2 columns */
        @media (min-width: 768px) {
          .case-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        /* Desktop: 3 columns in one horizontal line */
        @media (min-width: 1024px) {
          .case-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      {cases.map((caseStudy) => (
        <CaseCard key={caseStudy.slug} {...caseStudy} />
      ))}
    </div>
  );
}

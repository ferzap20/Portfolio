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
        @media (min-width: 768px) {
          .case-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1200px) {
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

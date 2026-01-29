/**
 * EXPANDABLE CARD COMPONENT
 *
 * Reusable collapsible card for blog posts, processes, and research
 * Click header to expand/collapse content
 * Smooth animation with chevron icon rotation
 *
 * FEATURES:
 *  - Collapsed state: shows title and description
 *  - Expanded state: shows full content
 *  - Smooth expand/collapse animation
 *  - Chevron icon rotates on toggle
 *  - Arrow decoration for list items
 *
 * EDITING GUIDE:
 *  - Adjust animation timing: edit src/styles/components.css (--transition-normal)
 *  - Change chevron rotation angle: modify CSS .expandable__chevron--open
 *  - Add new content sections: add more items to children JSX
 *  - Style list items differently: modify expandable__list-item styling in CSS
 *
 * USAGE:
 *  <ExpandableCard
 *    title="Process Title"
 *    description="Short description"
 *    isOpen={isOpen}
 *    onToggle={() => setIsOpen(!isOpen)}
 *  >
 *    <div className="expandable__section">
 *      <h4 className="expandable__section-title">Steps</h4>
 *      <ul className="expandable__list">
 *        <li className="expandable__list-item">Step 1</li>
 *        <li className="expandable__list-item">Step 2</li>
 *      </ul>
 *    </div>
 *  </ExpandableCard>
 */

import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface ExpandableCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function ExpandableCard({
  title,
  description,
  isOpen,
  onToggle,
  children,
}: ExpandableCardProps) {
  return (
    <div className="expandable">
      <button
        className="expandable__header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`content-${title}`}
      >
        <div>
          <h3 className="expandable__title">{title}</h3>
          <p className="expandable__description">{description}</p>
        </div>
        <ChevronDown
          size={24}
          className={`expandable__chevron ${isOpen ? 'expandable__chevron--open' : ''}`}
        />
      </button>

      <div
        id={`content-${title}`}
        className={`expandable__content ${isOpen ? 'expandable__content--open' : ''}`}
      >
        <div className="expandable__body">{children}</div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion-item"
          data-expanded={openIndex === index}
        >
          <button
            className="accordion-trigger"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>
            <ChevronDown
              className="accordion-icon"
              size={24}
            />
          </button>
          {openIndex === index && (
            <div className="accordion-content open">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

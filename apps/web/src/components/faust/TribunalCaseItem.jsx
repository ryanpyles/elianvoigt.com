import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion.jsx';

export default function TribunalCaseItem({ tribunalCase }) {
  return (
    <AccordionItem value={tribunalCase.docket} className="tou-docket-item border-b-0">
      <AccordionTrigger className="tou-docket-trigger no-underline hover:no-underline">
        <span>
          <span className="tou-docket-title tou-mono" style={{ display: 'block', marginBottom: 4 }}>
            {tribunalCase.docket}
          </span>
          {tribunalCase.title}
        </span>
      </AccordionTrigger>
      <AccordionContent className="tou-docket-body">
        {tribunalCase.charge && (
          <p className="tou-muted tou-sm" style={{ marginBottom: '0.75rem' }}>{tribunalCase.charge}</p>
        )}
        <p>{tribunalCase.body}</p>
      </AccordionContent>
    </AccordionItem>
  );
}

import React, { forwardRef } from 'react';
import { allTopics } from '../data/summaries';

interface MainContentProps {
  activeTopicId: string;
}

const MainContent = forwardRef<HTMLDivElement, MainContentProps>(({ activeTopicId }, ref) => {
  return (
    <main
      className="flex-1 overflow-y-auto bg-slate-50/40 p-6 lg:p-8 print:bg-white print:overflow-visible print:h-auto print:p-12"
      id="main-content"
      ref={ref}
    >
      {allTopics.map(topic => {
        const isActive = topic.id === activeTopicId;
        return (
          <div
            key={topic.id}
            className={`content-section ${
              isActive ? 'block print:block' : 'hidden print:block'
            } mx-auto max-w-4xl rounded-xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-100 print:mx-0 print:max-w-none print:rounded-none print:border print:border-slate-200 print:shadow-none print:ring-0 print:px-0 print:py-10`}
            data-topic-id={topic.id}
            data-specialty={topic.specialty}
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />
        );
      })}
    </main>
  );
});

export default MainContent;

import React, { forwardRef } from 'react';
import { allTopics } from '../data/summaries';

interface MainContentProps {
  activeTopicId: string;
}

const MainContent = forwardRef<HTMLDivElement, MainContentProps>(({ activeTopicId }, ref) => {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-50/40 p-6 lg:p-8" id="main-content" ref={ref}>
      {allTopics.map(topic => (
        <div
          key={topic.id}
          className={`content-section ${topic.id === activeTopicId ? 'block' : 'hidden'} mx-auto max-w-4xl rounded-xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-100`}
          data-topic-id={topic.id}
          dangerouslySetInnerHTML={{ __html: topic.content }}
        />
      ))}
    </main>
  );
});

export default MainContent;

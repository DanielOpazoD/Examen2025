import React, { forwardRef } from 'react';
import { allTopics } from '../data/summaries';

interface MainContentProps {
  activeTopicId: string;
}

const MainContent = forwardRef<HTMLDivElement, MainContentProps>(({ activeTopicId }, ref) => {
  return (
    <main className="flex-1 p-6 lg:p-8 overflow-y-auto" id="main-content" ref={ref}>
      {allTopics.map(topic => (
        <div
          key={topic.id}
          className={`content-section ${topic.id === activeTopicId ? '' : 'hidden'}`}
          data-topic-id={topic.id}
          dangerouslySetInnerHTML={{ __html: topic.content }}
        />
      ))}
    </main>
  );
});

export default MainContent;

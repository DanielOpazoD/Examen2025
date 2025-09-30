import React, { useState, useMemo, useRef } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { allTopics, orderedSpecialties, summaries } from './data/summaries';

const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(allTopics[0]?.id || '1');
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleTopicSelect = (topicId: string) => {
    setActiveTopicId(topicId);
    if (window.innerWidth < 640) {
      setSidebarOpen(false);
    }
    mainContentRef.current?.scrollTo(0, 0);
  };
  
  const applyPrintStyles = (css: string) => {
    const existingStyle = document.getElementById('print-style');
    if (existingStyle) {
      existingStyle.remove();
    }
    const style = document.createElement('style');
    style.id = 'print-style';
    style.innerHTML = css;
    document.head.appendChild(style);
    window.print();
    setTimeout(() => {
      const styleTag = document.getElementById('print-style');
      if (styleTag) styleTag.remove();
    }, 1000);
  };

  const handlePrintTopic = () => {
    if (!activeTopicId) return;
    const printCss = `@media print { .content-section { display: none !important; } .content-section[data-topic-id="${activeTopicId}"] { display: block !important; page-break-before: auto !important; } }`;
    applyPrintStyles(printCss);
  };

  const handlePrintSection = () => {
    const activeTopic = allTopics.find(t => t.id === activeTopicId);
    if (!activeTopic) return;

    const topicIdsInSection = allTopics
      .filter(t => t.specialty === activeTopic.specialty)
      .map(t => t.id);
      
    const selectors = topicIdsInSection.map(id => `.content-section[data-topic-id="${id}"]`).join(', ');
    
    const printCss = `@media print { .content-section { display: none !important; } ${selectors} { display: block !important; } }`;
    applyPrintStyles(printCss);
  };

  const handlePrintAll = () => {
    const existingStyle = document.getElementById('print-style');
    if (existingStyle) {
      existingStyle.remove();
    }
    window.print();
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        activeTopicId={activeTopicId}
        onTopicSelect={handleTopicSelect}
        searchTerm={searchTerm}
      />
      <div id="main-container" className={`flex-1 flex flex-col h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? 'sm:ml-56' : 'sm:ml-0'}`}>
        <Header
          onSidebarToggle={() => setSidebarOpen(!isSidebarOpen)}
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onPrintTopic={handlePrintTopic}
          onPrintSection={handlePrintSection}
          onPrintAll={handlePrintAll}
        />
        <MainContent 
          ref={mainContentRef}
          activeTopicId={activeTopicId} 
        />
      </div>
    </div>
  );
};

export default App;

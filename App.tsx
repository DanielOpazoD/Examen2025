import React, { useState, useMemo, useRef } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { allTopics } from './data/summaries';

const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(allTopics[0]?.id || '1');
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const mainContentRef = useRef<HTMLDivElement>(null);

  const activeTopic = useMemo(() => allTopics.find(t => t.id === activeTopicId), [activeTopicId]);

  const handleTopicSelect = (topicId: string) => {
    setActiveTopicId(topicId);
    if (window.innerWidth < 640) {
      setSidebarOpen(false);
    }
    mainContentRef.current?.scrollTo(0, 0);
  };
  
  const applyPrintStyles = (extraPrintCss = '') => {
    const existingStyle = document.getElementById('print-style');
    if (existingStyle) {
      existingStyle.remove();
    }
    const style = document.createElement('style');
    style.id = 'print-style';
    const basePrintCss = `
      body {
        background: #ffffff !important;
        color: #0f172a;
      }
      #header,
      #sidebar {
        display: none !important;
      }
      .app-shell,
      #main-container,
      main {
        height: auto !important;
        min-height: auto !important;
        overflow: visible !important;
      }
      .app-shell {
        display: block !important;
      }
      #main-container {
        margin: 0 !important;
        width: 100% !important;
      }
      main {
        background: #ffffff !important;
        padding: 0 1.25in !important;
        box-shadow: none !important;
        border: none !important;
      }
      .content-section {
        margin: 0 auto 1.5rem !important;
        max-width: 100% !important;
        box-shadow: none !important;
        border: none !important;
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .content-section + .content-section {
        page-break-before: always;
      }
      .content-section:first-of-type {
        page-break-before: auto;
      }
      .content-section:last-of-type {
        margin-bottom: 0 !important;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        page-break-after: avoid;
      }
    `;

    style.innerHTML = `@media print { ${basePrintCss} ${extraPrintCss} }`;
    document.head.appendChild(style);
    window.print();
    setTimeout(() => {
      const styleTag = document.getElementById('print-style');
      if (styleTag) styleTag.remove();
    }, 1000);
  };

  const handlePrintTopic = () => {
    if (!activeTopicId) return;
    const extraPrintCss = `
      .content-section {
        display: none !important;
      }
      .content-section[data-topic-id="${activeTopicId}"] {
        display: block !important;
        page-break-before: auto !important;
      }
    `;
    applyPrintStyles(extraPrintCss);
  };

  const handlePrintSection = () => {
    if (!activeTopic) return;

    const topicIdsInSection = allTopics
      .filter(t => t.specialty === activeTopic.specialty)
      .map(t => t.id);
      
    const selectors = topicIdsInSection.map(id => `.content-section[data-topic-id="${id}"]`).join(', ');
    
    const extraPrintCss = `
      .content-section {
        display: none !important;
      }
      ${selectors} {
        display: block !important;
      }
    `;
    applyPrintStyles(extraPrintCss);
  };

  const handlePrintAll = () => {
    applyPrintStyles();
  };

  return (
    <div className="app-shell flex h-screen print:block print:h-auto">
      <Sidebar
        isOpen={isSidebarOpen}
        activeTopicId={activeTopicId}
        onTopicSelect={handleTopicSelect}
        searchTerm={searchTerm}
      />
      <div
        id="main-container"
        className={`flex-1 flex flex-col h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? 'sm:ml-56' : 'sm:ml-0'} print:h-auto print:w-full print:ml-0`}
      >
        <Header
          onSidebarToggle={() => setSidebarOpen(!isSidebarOpen)}
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onPrintTopic={handlePrintTopic}
          onPrintSection={handlePrintSection}
          onPrintAll={handlePrintAll}
          activeTopicTitle={activeTopic?.fullTitle ?? ''}
          activeSpecialty={activeTopic?.specialty ?? ''}
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

import React from 'react';

interface HeaderProps {
  onSidebarToggle: () => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrintTopic: () => void;
  onPrintSection: () => void;
  onPrintAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle, searchTerm, onSearchChange, onPrintTopic, onPrintSection, onPrintAll }) => {
  return (
    <header id="header" className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm p-3 flex items-center justify-between z-30 flex-shrink-0">
      <button id="sidebar-toggle-button" type="button" onClick={onSidebarToggle} className="inline-flex items-center p-2 text-sm text-slate-500 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200">
        <span className="sr-only">Alternar menú</span>
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className="relative flex-1 max-w-xl mx-4">
        <input 
          type="search" 
          id="search-input" 
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full pl-10 pr-4 py-2 border rounded-full bg-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Buscar temas..."
        />
        <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <div className="flex items-center space-x-2">
        <button id="print-topic-btn" onClick={onPrintTopic} className="px-3 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors flex items-center text-sm" title="Imprimir tema actual">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.075.73.224 1.053.442a.75.75 0 01.272 1.088l-1.33 2.034a.75.75 0 01-1.11.125c-.322-.24-.702-.403-1.115-.465V14.5a.75.75 0 01-1.5 0V9.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-1.25a2.25 2.25 0 104.5 0h-1.25a.75.75 0 010-1.5h2.5a.75.75 0 01.75.75v4.75a.75.75 0 01-1.5 0v-2.005c-.413.062-.793.225-1.115.465a.75.75 0 01-1.11-.125l-1.33-2.034a.75.75 0 01.272-1.088 2.25 2.25 0 001.053-.442V2.75zM8.5 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /><path d="M4.586 12.586a2 2 0 00-2.828 2.828l3.172 3.172a2 2 0 002.828 0l3.172-3.172a2 2 0 10-2.828-2.828L9 14.172l-1.586-1.586z" /></svg>
        </button>
        <button id="print-section-btn" onClick={onPrintSection} className="px-3 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors flex items-center text-sm" title="Imprimir sección completa">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 2A2.5 2.5 0 003 4.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.879a2.5 2.5 0 000-3.535l-6.5-6.5A2.5 2.5 0 009.38 2H5.5zM5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" /><path d="M17 2.5a.75.75 0 01.75.75v12.5a.75.75 0 01-1.5 0V3.25a.75.75 0 01.75-.75z" /></svg>
        </button>
        <button id="print-all-btn" onClick={onPrintAll} className="pl-3 pr-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm" title="Guardar todo como PDF">
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6 3.369m0 0c1.12 0 2.15.11 3.12.322m-3.12-.322c-.652.263-1.233.585-1.735.956m1.735-.956V3.37m0 13.172c-.24.03-.48.062-.72.096m.72-.096c.24.03.48.062.72.096m1.152 0c.422.053.834.12 1.23.194m-1.23-.194c-.389.072-.77.16-1.134.258m-1.134-.258c-.265.068-.52.148-.768.238m.768-.238c-.38.122-.74.274-1.08.448m1.08-.448c-.29.142-.56.304-.812.484m-.812-.484c-.25.18-.48.376-.69.59m.69-.59c-.21.214-.4.44-.57.682m.57-.682c-.17.24-.32.502-.45.784m.45-.784c-.13.282-.24.578-.34.888m-.34-.888c-.1.31-.18.634-.25.972m.25-.972c-.07.338-.13.688-.18 1.048m.18-1.048c-.05.36-.09.732-.12 1.11m-1.488.525c.343.433.72.822 1.128 1.172 1.29.962 2.724 1.623 4.293 2.012m-4.293-2.012c-.443.12-.897.224-1.355.312m1.355-.312c-.25.056-.5.1-.74.14m.74-.14c-.4.07-.79.128-1.17.174m-1.17-.174c-.38.046-.74.082-1.09.108m-1.09-.108c-.35.026-.68.042-1 .05m-1-.05c-.32-.008-.63-.026-.92-.05m-.92-.05c-.29-.024-.56-.056-.82-.096m-1.176 3.292c.12-.1.23-.2.34-.32m.34-.32c.11-.12.2-.25.28-.4m.28-.4c.08-.15.15-.32.2-.5m.2-.5c.05-.18.08-.37.1-.58m.1-.58c.02-.21.03-.43.03-.65m0-.65c0-.22-.01-.44-.03-.65m-.03-.65c-.02-.21-.05-.4-.1-.58m-.1-.58c-.05-.18-.12-.35-.2-.5m-.2-.5c-.08-.15-.17-.28-.28-.4m-.28-.4c-.11-.12-.22-.22-.34-.32m0 0l-3.35-3.35m3.35 3.35l-3.35-3.35" />
          </svg>
          Guardar
        </button>
      </div>
    </header>
  );
};

export default Header;

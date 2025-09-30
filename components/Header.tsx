import React from 'react';

interface HeaderProps {
  onSidebarToggle: () => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrintTopic: () => void;
  onPrintSection: () => void;
  onPrintAll: () => void;
  activeTopicTitle: string;
  activeSpecialty: string;
}

const Header: React.FC<HeaderProps> = ({
  onSidebarToggle,
  searchTerm,
  onSearchChange,
  onPrintTopic,
  onPrintSection,
  onPrintAll,
  activeTopicTitle,
  activeSpecialty,
}) => {
  const hasTopic = Boolean(activeTopicTitle);
  const hasSpecialty = Boolean(activeSpecialty);

  return (
    <header
      id="header"
      className="sticky top-0 z-30 flex flex-shrink-0 items-center justify-between bg-white/80 px-3 py-1 shadow-sm backdrop-blur-md"
    >
      <button id="sidebar-toggle-button" type="button" onClick={onSidebarToggle} className="inline-flex items-center p-1.5 text-xs text-slate-500 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200">
        <span className="sr-only">Alternar menú</span>
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className="relative flex-1 max-w-xl mx-3">
        <input
          type="search"
          id="search-input"
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full pl-9 pr-3 py-1.5 border rounded-full bg-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Buscar temas..."
        />
        <svg className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          id="print-topic-btn"
          onClick={onPrintTopic}
          disabled={!hasTopic}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          title="Guardar el tema que estás leyendo"
        >
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 2A2.5 2.5 0 003 4.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.879a2.5 2.5 0 000-3.535l-6.5-6.5A2.5 2.5 0 009.38 2H5.5zM5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          <span className="hidden sm:inline">Guardar tema</span>
          <span className="sm:hidden">Tema</span>
        </button>
        <button
          id="print-section-btn"
          onClick={onPrintSection}
          disabled={!hasSpecialty}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          title={hasSpecialty ? `Guardar la sección completa de ${activeSpecialty}` : 'Guardar sección completa'}
        >
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l-6 6L9 18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l-6 6L12 18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 7.5l-6 6L15 18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5l-6 6L18 18" />
          </svg>
          <span className="hidden sm:inline">Guardar sección</span>
          {hasSpecialty && <span className="hidden lg:inline">({activeSpecialty})</span>}
          <span className="sm:hidden">Sección</span>
        </button>
        <button
          id="print-all-btn"
          onClick={onPrintAll}
          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title="Guardar todas las secciones y temas"
        >
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v-9A1.5 1.5 0 014.5 6h15A1.5 1.5 0 0121 7.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 16.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9h9M7.5 12h9M7.5 15h5.25" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.5h12" />
          </svg>
          <span className="hidden sm:inline">Guardar documento</span>
          <span className="sm:hidden">Todo</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

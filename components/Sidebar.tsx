// FIX: Imported `useMemo` from React to resolve reference errors.
import React, { useState, useEffect, useMemo } from 'react';
import { summaries, orderedSpecialties, allTopics } from '../data/summaries';

interface SidebarProps {
  isOpen: boolean;
  activeTopicId: string;
  onTopicSelect: (topicId: string) => void;
  searchTerm: string;
}

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTopicId, onTopicSelect, searchTerm }) => {
  const [openSpecialties, setOpenSpecialties] = useState<Record<string, boolean>>({ [orderedSpecialties[0]]: true });
  const [areAllCollapsed, setAreAllCollapsed] = useState(false);

  const toggleSpecialty = (specialty: string) => {
    setOpenSpecialties(prev => ({ ...prev, [specialty]: !prev[specialty] }));
  };
  
  const toggleAll = () => {
    const nextState = !areAllCollapsed;
    const allSpecialtiesState: Record<string, boolean> = {};
    if (!nextState) { // If expanding all
        orderedSpecialties.forEach(name => allSpecialtiesState[name] = true);
    } // If collapsing, all will be false (default)
    setOpenSpecialties(allSpecialtiesState);
    setAreAllCollapsed(nextState);
  };
  
  const filteredTopics = useMemo(() => {
    if (!searchTerm) {
      return allTopics;
    }
    return allTopics.filter(topic =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.fullTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const visibleSpecialties = useMemo(() => {
      if (!searchTerm) return orderedSpecialties;
      const visibleSpecialtyNames = new Set(filteredTopics.map(t => t.specialty));
      return orderedSpecialties.filter(name => visibleSpecialtyNames.has(name));
  }, [searchTerm, filteredTopics]);


  useEffect(() => {
    // Expand sections that have search results
    if (searchTerm) {
      const specialtiesWithResults = new Set(filteredTopics.map(topic => topic.specialty));
      const newOpenState: Record<string, boolean> = {};
      // FIX: The type of `specialty` was being inferred as `unknown` when iterating directly over the Set.
      // Converting the Set to an Array before iterating ensures `specialty` is correctly typed as `string`.
      for (const specialty of Array.from(specialtiesWithResults)) {
        newOpenState[specialty] = true;
      }
      setOpenSpecialties(newOpenState);
      setAreAllCollapsed(false);
    }
  }, [searchTerm, filteredTopics]);

  return (
    <aside id="sidebar" className={`fixed top-0 left-0 z-40 w-56 h-screen bg-white shadow-lg transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="h-full px-2 py-4 overflow-y-auto">
        <div className="flex justify-between items-center px-2 mb-3">
          <h2 className="text-xl font-bold text-blue-700">Especialidades</h2>
          <button onClick={toggleAll} title="Colapsar/Expandir todo" className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-800">
             <svg id="icon-collapse" className={`w-5 h-5 ${areAllCollapsed ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.25 4.5h13.5" />
            </svg>
            <svg id="icon-expand" className={`w-5 h-5 ${areAllCollapsed ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
        <ul className="space-y-1 font-medium" id="nav-menu">
          {visibleSpecialties.map((specialtyName, index) => {
            const specialtyData = summaries[specialtyName];
            const specialtyTopics = allTopics.filter(t => t.specialty === specialtyName);
            const isVisible = openSpecialties[specialtyName] || false;
            
            const topicsForThisSpecialty = searchTerm 
              ? specialtyTopics.filter(t => filteredTopics.some(ft => ft.id === t.id)) 
              : specialtyTopics;

            if (topicsForThisSpecialty.length === 0) return null;

            return (
              <li key={specialtyName}>
                <button type="button" onClick={() => toggleSpecialty(specialtyName)} className="flex items-center w-full py-1.5 px-2 text-sm text-slate-900 transition duration-75 rounded-lg group hover:bg-slate-100">
                  <span dangerouslySetInnerHTML={{ __html: specialtyData.icon }} />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">{romanNumerals[orderedSpecialties.indexOf(specialtyName)]}. {specialtyName}</span>
                  <svg className={`w-3 h-3 transition-transform ${isVisible ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
                </button>
                <ul className={`py-1 space-y-1 topic-list ${isVisible ? '' : 'hidden'}`}>
                  {topicsForThisSpecialty.map((topic) => (
                    <li key={topic.id}>
                      <a href="#" onClick={(e) => { e.preventDefault(); onTopicSelect(topic.id); }} className={`flex items-center w-full py-1 px-2 text-xs transition duration-75 rounded-lg pl-4 group hover:bg-slate-100 ${topic.id === activeTopicId ? 'bg-slate-100 font-semibold text-slate-900' : 'text-slate-700'}`}>
                        <span className="w-6 text-right mr-2 text-slate-500">{topic.id}.</span>
                        <span className="flex-1">{topic.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
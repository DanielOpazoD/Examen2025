import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { allTopics } from '../data/summaries';

interface MainContentProps {
  activeTopicId: string;
}

const MainContent = forwardRef<HTMLDivElement, MainContentProps>(({ activeTopicId }, ref) => {
  const [summaryTopicId, setSummaryTopicId] = useState<string | null>(null);

  const summaryTopic = useMemo(
    () => allTopics.find(topic => topic.id === summaryTopicId) ?? null,
    [summaryTopicId]
  );

  useEffect(() => {
    if (summaryTopicId && summaryTopicId !== activeTopicId) {
      setSummaryTopicId(null);
    }
  }, [activeTopicId, summaryTopicId]);

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
          >
            <div className="mb-6 flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-blue-800">
                {topic.id}. {topic.fullTitle}
              </h2>
              <button
                type="button"
                className="inline-flex items-center gap-2 self-start rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 transition hover:border-blue-200 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setSummaryTopicId(topic.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="8" />
                </svg>
                Abrir resumen
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: topic.content }} />
          </div>
        );
      })}
      {summaryTopic && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/60 px-4 py-10 print:hidden">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Resumen hiperesquemático
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {summaryTopic.id}. {summaryTopic.fullTitle}
                </h3>
              </div>
              <button
                type="button"
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                aria-label="Cerrar resumen hiperesquemático"
                onClick={() => setSummaryTopicId(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <div
                className="space-y-3"
                dangerouslySetInnerHTML={{ __html: summaryTopic.summary }}
              />
            </div>
            <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-6 py-4">
              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setSummaryTopicId(null)}
              >
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
});

export default MainContent;

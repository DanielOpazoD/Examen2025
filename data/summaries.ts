import cardiologiaHtml from '../1. cardiologia_summary_final.html?raw';
import neumologiaHtml from '../2. neumologia_summary_final.html?raw';
import nefrologiaHtml from '../3. nefro_summary_final.html?raw';
import digestivoHtml from '../4. digestivo_summary_final.html?raw';
import endocrinologiaHtml from '../5. endocrino_summary_final.html?raw';
import hematologiaHtml from '../6. hematologia_summary_final.html?raw';
import neurologiaHtml from '../7. neurologia_summary_final.html?raw';
import reumatologiaHtml from '../8. reumatologia_summary_final.html?raw';
import infectologiaHtml from '../9. infectologia_resumen_final_numerado.html?raw';

export const orderedSpecialties = [
    "Cardiología",
    "Neumología",
    "Nefrología",
    "Digestivo",
    "Endocrinología",
    "Hematología",
    "Neurología",
    "Reumatología",
    "Infectología",
] as const;

type SpecialtyName = typeof orderedSpecialties[number];

type TopicDefinition = {
    fullTitle: string;
    content: string;
};

type SpecialtyDefinition = {
    icon: string;
    topics: Record<string, TopicDefinition>;
};

type SpecialtySource = {
    icon: string;
    html: string;
};

const specialtySources: Record<SpecialtyName, SpecialtySource> = {
    "Cardiología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
        html: cardiologiaHtml,
    },
    "Neumología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c-3.3 0-6-1.3-6-3s2.7-3 6-3 6 1.3 6 3-2.7 3-6 3Z"/><path d="M12 16c-4 0-4-1-4-2c0-2 4-2.5 4-4.5S8 5 8 5"/><path d="M16 14c0 1-1 2-4 2"/><path d="M16 9.5c0 2-4 2.5-4 4.5S16 19 16 19"/></svg>`,
        html: neumologiaHtml,
    },
    "Nefrología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.2 2.5c-.2-.3-.5-.5-.8-.5s-.7.2-.9.5L4 10.2V16c0 1.1.9 2 2 2h2.8l6.7-6.7c.2-.3.5-.5.8-.5s.7.2.9.5l4.5-4.5c.3-.3.5-.6.5-1s-.2-.7-.5-1L15.5.5c-.3-.3-.6-.5-1-.5s-.7.2-1 .5l-3.3 3.3Z"/><path d="m14.8 7.4 2.8-2.8"/><path d="M12 12.2 6.8 17.5c-.3.3-.5.6-.5 1s.2.7.5 1l2.8 2.8c.3.3.6.5 1 .5s.7-.2 1-.5l5.2-5.2"/><path d="m11.5 18.5 2.8-2.8"/></svg>`,
        html: nefrologiaHtml,
    },
    "Digestivo": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c-3.3 0-6-1.3-6-3s2.7-3 6-3 6 1.3 6 3-2.7 3-6 3Z"/><path d="M12 16c-4 0-4-1-4-2c0-2 4-2.5 4-4.5S8 5 8 5"/><path d="M16 14c0 1-1 2-4 2"/><path d="M16 9.5c0 2-4 2.5-4 4.5S16 19 16 19"/></svg>`,
        html: digestivoHtml,
    },
    "Endocrinología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        html: endocrinologiaHtml,
    },
    "Hematología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9.2 9.2 0 0 0-9.2 9.2c0 3.3 2.5 7.1 5.2 9.1.5.4 1.2.4 1.7 0l5.3-4.2c.4-.3.9-.3 1.2 0l1.8 1.4c.4.3.9.3 1.2 0l1.8-1.4c.3-.3.8-.3 1.2 0l1.3 1c.2.2.5.2.7 0l.5-.4c.3-.3.3-.8 0-1.2L16 12l2.7-2.7c.3-.3.3-.8 0-1.2l-4-4C14 3.3 13.1 2.8 12 2z"/><path d="m14 6 1 1"/></svg>`,
        html: hematologiaHtml,
    },
    "Neurología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5c0 1.54.64 2.92 1.68 3.82A6 6 0 0 0 6 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 6 6 0 0 0-2.68-5.18A4.95 4.95 0 0 0 17 7a5 5 0 0 0-5-5z"/><path d="M9.5 13a2.5 2.5 0 0 1 5 0"/><path d="M12 19v2"/></svg>`,
        html: neurologiaHtml,
    },
    "Reumatología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h1.4c.4 0 .8.2 1 .5l2.6 2.6c.3.3.7.5 1 .5h1c.3 0 .7-.2 1-.5l2.6-2.6c.2-.3.6-.5 1-.5h1.4c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-15Z"/><path d="M7 10.5V5c0-.8.7-1.5 1.5-1.5h1c.4 0 .8.2 1 .5l2 2c.3.3.7.5 1 .5h1c.8 0 1.5.7 1.5 1.5v1.5"/></svg>`,
        html: reumatologiaHtml,
    },
    "Infectología": {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10.4 16.6.9-2.1.9 2.1"/><path d="m14.2 16.6 1-2.1 1 2.1"/><path d="M12 10v10"/><path d="m10.1 11.6 1.9-1.9 1.9 1.9"/></svg>`,
        html: infectologiaHtml,
    },
};

const cleanText = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const createShortTitle = (fullTitle: string) => {
    const [firstPart] = fullTitle.split(/[:–—-]/);
    const candidate = firstPart?.trim();
    return candidate && candidate.length > 0 ? candidate : fullTitle;
};

const ensureUniqueTitle = (baseTitle: string, existing: Record<string, unknown>) => {
    if (!existing[baseTitle]) {
        return baseTitle;
    }
    let counter = 2;
    let candidate = `${baseTitle} (${counter})`;
    while (existing[candidate]) {
        counter += 1;
        candidate = `${baseTitle} (${counter})`;
    }
    return candidate;
};

const parseSpecialtyTopics = (html: string) => {
    const topics: { fullTitle: string; shortTitle: string; content: string }[] = [];
    const containerRegex = /<(?:section|div)[^>]*class=["']page["'][^>]*>([\s\S]*?)<\/(?:section|div)>/gi;
    let match: RegExpExecArray | null;

    while ((match = containerRegex.exec(html)) !== null) {
        const innerHtml = match[1]?.trim();
        if (!innerHtml) {
            continue;
        }

        const headingMatch = innerHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (!headingMatch) {
            continue;
        }

        const headingHtml = headingMatch[0];
        const rawTitle = cleanText(headingMatch[1] ?? '');
        const fullTitle = rawTitle.replace(/^\d+\.?\s*/, '').trim();
        if (!fullTitle) {
            continue;
        }

        const shortTitle = createShortTitle(fullTitle);
        const bodyHtml = innerHtml.replace(headingHtml, '').trim();
        const wrappedBody = bodyHtml
            ? `<div class="space-y-4 text-sm leading-relaxed">${bodyHtml}</div>`
            : '';

        topics.push({
            fullTitle,
            shortTitle,
            content: wrappedBody,
        });
    }

    return topics;
};

export const summaries: Record<SpecialtyName, SpecialtyDefinition> = orderedSpecialties.reduce((acc, specialty) => {
    const source = specialtySources[specialty];
    const parsedTopics = parseSpecialtyTopics(source.html);
    const topicsMap: Record<string, TopicDefinition> = {};

    parsedTopics.forEach(({ fullTitle, shortTitle, content }) => {
        const key = ensureUniqueTitle(shortTitle, topicsMap);
        topicsMap[key] = { fullTitle, content };
    });

    acc[specialty] = {
        icon: source.icon,
        topics: topicsMap,
    };

    return acc;
}, {} as Record<SpecialtyName, SpecialtyDefinition>);

const placeholderContent = (title: string, number: string) => `
    <div class="space-y-6 text-sm">
        <p class="text-slate-500 italic">Contenido para este tema (${title}) aún no disponible.</p>
    </div>`;

interface Topic {
    id: string;
    title: string;
    fullTitle: string;
    content: string;
    specialty: string;
}

const processSummaries = (): Topic[] => {
    const topics: Topic[] = [];
    let topicCounter = 1;

    orderedSpecialties.forEach(specialtyName => {
        const specialtyData = summaries[specialtyName];
        if (specialtyData && specialtyData.topics) {
            Object.keys(specialtyData.topics).forEach(topicKey => {
                const topicData = specialtyData.topics[topicKey];
                const id = String(topicCounter);

                let finalContent = topicData.content?.trim();
                if (!finalContent) {
                    finalContent = placeholderContent(topicData.fullTitle, id);
                }

                const fullContentHtml = `<h2 class="text-2xl font-bold mb-4 text-slate-900">${id}. ${topicData.fullTitle}</h2>${finalContent}`;

                topics.push({
                    id,
                    title: topicKey,
                    fullTitle: topicData.fullTitle,
                    content: fullContentHtml,
                    specialty: specialtyName,
                });
                topicCounter++;
            });
        }
    });

    return topics;
};

export const allTopics: Topic[] = processSummaries();

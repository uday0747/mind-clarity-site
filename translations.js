import portuguese from './translations/pt.json' with { type: 'json' };
import indonesian from './translations/id.json' with { type: 'json' };
import arabic from './translations/ar.json' with { type: 'json' };
import hindi from './translations/hi.json' with { type: 'json' };
import spanish from './translations/es.json' with { type: 'json' };
import french from './translations/fr.json' with { type: 'json' };
import telugu from './translations/te.json' with { type: 'json' };
export const translations = { hi: hindi, es: spanish, fr: french, te: telugu, pt: portuguese, id: indonesian, ar: arabic };
export function translateText(source, language) {
  if (language === 'en' || !source.trim()) return source;
  const result = translations[language]?.[source.trim()];
  if (!result) throw new Error(`Missing ${language} translation: ${source}`);
  return source.replace(source.trim(), result);
}

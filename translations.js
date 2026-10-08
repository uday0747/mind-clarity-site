import hindi from './translations/hi.json' with { type: 'json' };
import spanish from './translations/es.json' with { type: 'json' };
import french from './translations/fr.json' with { type: 'json' };
import telugu from './translations/te.json' with { type: 'json' };
export const translations = { hi: hindi, es: spanish, fr: french, te: telugu };
export function translateText(source, language) {
  if (language === 'en' || !source.trim()) return source;
  const result = translations[language]?.[source.trim()];
  if (!result) throw new Error(`Missing ${language} translation: ${source}`);
  return source.replace(source.trim(), result);
}

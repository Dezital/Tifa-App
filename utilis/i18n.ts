import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import Backend from 'i18next-locize-backend';

const locale = getLocales()[0].languageCode || 'en';

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    ns: ["BeforeAuth"], // Use namespaces
    defaultNS: "BeforeAuth",
    lng: "nl", // Your primary language
    fallbackLng: "en", // English as fallback
    saveMissing: true, // Enable saving of missing translations
    saveMissingTo: "all", // Save missing keys for all languages
    backend: {
      projectId: "5153f541-c0ff-496a-8675-b1d87de3a861", // Locize project ID
      apiKey: "9d261a52-5f06-42c9-a6a1-c0c140a71583", // API key for Locize
      referenceLng: "en", // Reference language
      version: "latest", // Latest version of translations
    },
  });

export default i18next;



/*
  .init({
    lng: locale,  // Device's language (e.g., 'en', 'es')
    fallbackLng: 'en',  // Fallback language if translation is missing
    saveMissing: true,  // Automatically add missing translations to Locize
    backend: {
      projectId: 'your-locize-project-id',  // Replace with your Locize project ID
      apiKey: 'your-locize-api-key',  // Replace with your Locize API key
      loadPath: 'https://cdn.locize.io/your-locize-project-id/{{lng}}.json',  // URL to fetch translations
      addPath: 'https://api.locize.io/your-locize-project-id/{{lng}}',  // API to add missing translations
    },
    react: {
      useSuspense: false,  // Disable suspense (helps with syncing translations in Expo)
    },
  });
  */
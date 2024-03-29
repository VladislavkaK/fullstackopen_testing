import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
const translationEN = require('./locales/en/translation.json');
const translationRU = require('./locales/ru/translation.json');

// the translations
const resources = {
  ru: {
    translation: translationRU
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';


import App from './App.vue'
import router from './router'

import './style/global.css'



// Language files
import English from './locales/en.json';
import French from './locales/fr.json';
import Brazilian from './locales/pt-BR.json';
import Spanish from './locales/es.json';
import Italian from './locales/it.json';
import Dutch from './locales/nl.json';
import German from './locales/de.json';



function loadLocaleMessages() {
    const locales = { English , French, Brazilian, Spanish, Italian, Dutch, German};
    const messages = {};
    for (const key in locales) {
      messages[key] = locales[key];
    }
    return messages;
  }
  
  const i18n = createI18n({
    legacy: false,
    locale: 'English',
    fallbackLocale: 'English',
    messages: loadLocaleMessages()
  });
  
//   nl.js (Dutch)
//   fr.js (French)
//   de.js (German)
//   es.js (Spanish)
//   en.js (English)
//   it.js (Italian)
//   pt-BR.js (Portuguese)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
    
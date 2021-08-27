import { createApp } from 'vue'
//import { createI18n } from 'vue-i18n'
//import messages from './i18n/i18nMessages'
import App from './App.vue'
import i18n from './i18n'

/*const i18n = createI18n({
    locale:navigator.language,
    fallbackLocale: 'en',
    messages
});*/

const app = createApp(App);
app.use(i18n);
app.mount('#app');

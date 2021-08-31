import { createApp } from 'vue';

import App from './App.vue';
import BaseDialog from "./components/layout/BaseDialog";

const app = createApp(App);

app.component('base-dialog',BaseDialog);

app.mount('#app');

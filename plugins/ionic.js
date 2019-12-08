import Vue from 'vue';
// import Ionic from '@ionic/vue';
import { defineCustomElements as Ionic } from "@ionic/core/loader"; // add a direct link to @ionic/core

Vue.use(Ionic);
Vue.config.ignoredElements = [/^ion-/];

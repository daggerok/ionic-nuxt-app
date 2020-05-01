# ionic-nuxt-app [![Build Status](https://travis-ci.org/daggerok/ionic-nuxt-app.svg?branch=master)](https://travis-ci.org/daggerok/ionic-nuxt-app) [![CI](https://github.com/daggerok/ionic-nuxt-app/workflows/CI/badge.svg)](https://github.com/daggerok/ionic-nuxt-app/actions?query=workflow%3ACI)
Ionic + Nuxt.js setup

## setup

create regular nuxt app:

```bash
npm i -g create-nuxt-app
create-nuxt-app ionic-nuxt-app
cd ionic-nuxt-app/
npm i -E @ionic/core @ionic/vue

# IMPORTANT:
npm i -ED jest@24.9.0
```

add `plugins/ionic.js` file:

```js
import Vue from 'vue';
// import Ionic from '@ionic/vue';
import { defineCustomElements as Ionic } from "@ionic/core/loader"; // add a direct link to @ionic/core

Vue.use(Ionic);
Vue.config.ignoredElements = [
  /^ion-/,
];
```

edit `layoutes/default.vue` file:

```vue
<template>
  <ion-app>
    <nuxt />
  </ion-app>
</template>
```

edit `pages/index.vue` file:

```vue
<template>
  <!-- Add some ionic markup... -->
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Ionic Nuxt App</ion-title>
      </ion-toolbar>
    </ion-header>
    <Logo/>
    <ion-content class="content">
      <ion-card>
        <ion-card-subtitle>Ololo</ion-card-subtitle>
        <ion-card-title>Trololo</ion-card-title>
        <ion-card-content>
          <h1>Hololo!</h1>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
  import Logo from '~/components/Logo.vue';

  export default {
    components: {
      Logo,
    },
  };
</script>
```

finally, edit `nuxt.config.js` file:

```js
// let's pick <base href="/ionic-nuxt-app/" /> when GitHub pages:
const baseHref = process.env.BASE_HREF || '/';
export default {
  head: {
    link: [
      // favicon for GitBub pages base href
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' }
    ]
  },
  css: [
    // add required css:
    '../node_modules/@ionic/core/css/core.css',
    '../node_modules/@ionic/core/css/normalize.css',
    '../node_modules/@ionic/core/css/structure.css',
    '../node_modules/@ionic/core/css/typography.css',
    '../node_modules/@ionic/core/css/ionic.bundle.css',
  ],
  plugins: [
    // add created plugin:
    { src: '~/plugins/ionic.js', mode: 'client' },
  ],
  generate: {
    routes: [
      '/',
    ],
  },
  router: {
    // router with correct public path
    base: baseHref,
    mode: 'history',
  },
  // skipped others...
}
```

## build, test and run

```bash
rm -rf node_modules package-lock.json dist ; npm i ; npm audit fix ; npm t
npm start
http :3000
```

## resources

* https://forum.ionicframework.com/t/is-it-possible-to-use-ionic-with-nuxt/163202/3
* https://ionicframework.com/docs/installation/cdn
* [Nuxt.js docs](https://nuxtjs.org)
* https://github.com/daggerok/webflux-kotlin-ionic-nuxt-mono-app
* https://github.com/daggerok/typescript-ionic-nuxt-app
* https://github.com/daggerok/spring-boot-nuxt-spa
* https://github.com/daggerok/vue-ionic-example
* https://github.com/daggerok/nuxt-examples
* https://github.com/daggerok/vue-examples
* https://alligator.io/vuejs/vue-ionic/

<template>
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
      Logo
    }
  };
</script>

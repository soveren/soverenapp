<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Purchases</ion-title>
<!--        <ion-buttons slot="end">
          <ion-button @click="editProfile()">
            <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
          </ion-button>
        </ion-buttons>-->
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Purchases</ion-title>
        </ion-toolbar>
      </ion-header>

<!--      <ion-searchbar></ion-searchbar>-->

      <ion-list>

        <ion-item>
          <ion-thumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
          </ion-thumbnail>
          <ion-label>
            <h2>H2 Title Text</h2>
            <p>Button on right</p>
          </ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-item button @click="testClick()">
          <ion-thumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
          </ion-thumbnail>
          <ion-label>
            <h3>H3 Title Text</h3>
            <p>Icon on right</p>
          </ion-label>
          <ion-icon :icon="storefront" slot="end"></ion-icon>
        </ion-item>

      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { createOutline, heart, basket, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return { segment:'wishes' }
  },
  methods: {
    segmentChanged(e: any) {
      console.log('segmentChanged', e)
      this.segment = e.detail.value
    },
    editProfile() {
      console.log('editProfile clicked!');
    }
  },
  setup() {
    return { createOutline, heart, basket, star, storefront };
  }
})
</script>
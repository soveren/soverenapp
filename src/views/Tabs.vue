<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="planetOutline" />
          <ion-label>News</ion-label>
        </ion-tab-button>


        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>Shops</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="bagAddOutline" />
          <ion-label>Sell</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="heartOutline" />
          <ion-label>Purchases</ion-label>
        </ion-tab-button>


        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>Storefront</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { planetOutline, bagAddOutline, search, heartOutline, personCircleOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      planetOutline, bagAddOutline, search, heartOutline, personCircleOutline
    }
  }
}
</script>
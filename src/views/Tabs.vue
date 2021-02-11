<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="(currentTab==='tab1') ? planet : planetOutline" />
          <ion-label>Updates</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="(currentTab==='tab2') ? search : searchOutline" />
          <ion-label>Shops</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="(currentTab==='tab3') ? bagAdd : bagAddOutline" />
          <ion-label>Add</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="(currentTab==='tab4') ? storefront : storefrontOutline" />
          <ion-label>Store</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon :icon="(currentTab==='tab5') ? personCircle : personCircleOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { planet, planetOutline, bagAdd, bagAddOutline, search, searchOutline, storefront, storefrontOutline,
  personCircle, personCircleOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  data() {
    return { currentTab: '' }
  },
  methods: {
    afterTabChange(e: any) {
      this.currentTab = e.tab
    }
  },
  setup() {
    return {
      planet, planetOutline, bagAdd, bagAddOutline, search, searchOutline, personCircle, personCircleOutline, storefront, storefrontOutline
    }
  }
})
</script>
<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="(currentTab==='tab1') ? newspaper : newspaperOutline" />
          <ion-label>News</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="(currentTab==='tab2') ? search : searchOutline" />
          <ion-label>Shops</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="(currentTab==='tab3') ? bagAdd : bagAddOutline" />
          <ion-label>Add</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="purchases" href="/tabs/purchases">
          <ion-icon :icon="(currentTab==='purchases') ? basket : basketOutline" />
          <ion-label>Purchases</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="store" href="/tabs/store">
          <ion-icon :icon="(currentTab==='store') ? storefront : storefrontOutline" />
          <ion-label>Your Store</ion-label>
        </ion-tab-button>

<!--        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="(currentTab==='profile') ? personCircle : personCircleOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>-->

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { newspaper, newspaperOutline, planet, planetOutline, bagAdd, bagAddOutline, search,
  searchOutline, storefront, storefrontOutline, basket, basketOutline,
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
      console.log('e.tab', e.tab);
    }
  },
  setup() {
    return {
      newspaper, newspaperOutline, planet, planetOutline, bagAdd, bagAddOutline, basket, basketOutline, search, searchOutline, personCircle, personCircleOutline, storefront, storefrontOutline
    }
  }
})
</script>
<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="news" href="/tabs/news">
          <ion-icon :icon="(currentTab==='news') ? newspaper : newspaperOutline" />
          <ion-label>News</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="stores" href="/tabs/stores">
          <ion-icon :icon="(currentTab==='stores') ? search : searchOutline" />
          <ion-label>Stores</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="add" href="/tabs/add">
          <ion-icon :icon="(currentTab==='add') ? bagAdd : bagAddOutline" />
          <ion-label>Add</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="inventory" href="/tabs/inventory">
          <ion-icon :icon="(currentTab==='inventory') ? basket : basketOutline" />
          <ion-label>Inventory</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="store" href="/tabs/my">
          <ion-icon :icon="(currentTab==='my') ? storefront : storefrontOutline" />
          <ion-label>My Store</ion-label>
        </ion-tab-button>

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
      newspaper, newspaperOutline, planet, planetOutline, bagAdd, bagAddOutline,
      basket, basketOutline, search, searchOutline, personCircle, personCircleOutline,
      storefront, storefrontOutline
    }
  }
})
</script>
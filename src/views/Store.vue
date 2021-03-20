<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Storefront</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="copyStoreLink()">
            <ion-icon slot="icon-only" :icon="linkOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Storefront</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-progress-bar v-if="loading" type="indeterminate"></ion-progress-bar>

      <div v-if="!loading" class="center-horizontal ion-padding-top">

        <ion-avatar>
          <img :src="store.avatar || 'https://cdn.pixabay.com/photo/2017/06/02/19/12/broken-link-2367103_1280.png'" alt="">
        </ion-avatar>

        <h3>{{store.name || '404 Not Found'}}</h3>

        <div :style="{'background-image': 'url('+(store.cover||'https://cdn.pixabay.com/photo/2020/08/03/20/07/flowers-5461025__340.jpg')+')'}" class="sv-store-cover"></div>

        <v-md-preview :text="store.description || 'Please check the store link you entered'" class="no-padding"></v-md-preview>

<!--        <ion-segment @ionChange="segmentChanged($event)" value="products" >

          <ion-segment-button value="products">
            <ion-label>Products</ion-label>
          </ion-segment-button>

          <ion-segment-button value="categories">
            <ion-label>Categories</ion-label>
          </ion-segment-button>

          <ion-segment-button value="about">
            <ion-label>About store</ion-label>
          </ion-segment-button>

        </ion-segment>

        <div>{{segment}}</div>-->
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonProgressBar, toastController, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonImg, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { linkOutline, createOutline, informationCircle, basket, heart, list, star, storefront  } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import { getStore, uidToStoreLink } from "@/soveren";
import { copyTextToClipboard } from "@/tools";
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'profile',
  components: { IonProgressBar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonAvatar, IonIcon, IonImg,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  data() {
    return {

      // segment:'products',
    }
  },
  methods: {
    /*segmentChanged(e: any) {
      console.log('segmentChanged', e)
      this.segment = e.detail.value
    },*/
    async copyStoreLink() {
      const link = uidToStoreLink(this.uid)
      copyTextToClipboard(link)
      const toast = await toastController
          .create({
            message: 'Link to store was copied to clipboard',
            duration: 2000,
            position: 'top'
          })
      return toast.present();
    },
  },
  setup() {
    // function later(delay) {
    //   return new Promise(function(resolve) {
    //     setTimeout(resolve, delay);
    //   });
    // }
    const route = useRoute();
    const { uid } = route.params;

    const store = ref({})
    const loading = ref(true)

    async function loadData() {
      try {
        const ms = await getStore(uid)
        store.value = await ms.getProfileFields()
      } finally {
        loading.value = false
      }
    }
    loadData().then()

    return {
      uid, store, loading, linkOutline, createOutline, basket, heart, list, star, storefront, informationCircle,
    };
  }
})
</script>
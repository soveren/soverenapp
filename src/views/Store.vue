<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Your Storefront</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="copyStoreLink()">
            <ion-icon slot="icon-only" :icon="linkOutline"></ion-icon>
          </ion-button>
          <ion-button router-link="/tabs/edit-store">
            <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Your Storefront</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-progress-bar v-if="loading" type="indeterminate"></ion-progress-bar>

      <div v-if="!loading" class="center-horizontal ion-padding-top">

        <ion-avatar>
          <img :src="store.avatar || 'data:image/png;base64,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'" alt="">
        </ion-avatar>

        <h3>{{store.name || 'Set Your Store Name'}}</h3>

        <div :style="{'background-image': 'url('+(store.cover||'https://cdn.pixabay.com/photo/2020/08/03/20/07/flowers-5461025__340.jpg')+')'}" class="sv-store-cover"></div>

        <v-md-preview :text="store.description || 'Please set your store description'" class="no-padding"></v-md-preview>

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
import { myStore, uidToStoreLink } from "@/soveren";
import { copyTextToClipboard } from "@/tools";

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
      console.log('copyStoreLink clicked!')
      const ms = await myStore()
      const uid = await ms.getUid()
      const link = uidToStoreLink(uid)
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

    const store = ref({})
    const loading = ref(true)

    async function loadData() {
      try {
        const ms = await myStore()
        store.value = await ms.getProfileFields()
      } finally {
        loading.value = false
      }
    }
    loadData().then()

    return {
      store, loading, linkOutline, createOutline, basket, heart, list, star, storefront, informationCircle,
    };
  }
})
</script>
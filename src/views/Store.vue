<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Your Storefront</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="copyStoreLink()">
            <ion-icon slot="icon-only" :icon="linkOutline"></ion-icon>
          </ion-button>
<!--          <ion-button @click="editStore()">
            <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
          </ion-button>-->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Your Storefront</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="center-horizontal">

        <h3>{{store.name}}</h3>
        <div style="width:100%;height: 128px; overflow: hidden;background-size: cover; background-position: center; background-image: url('https://nation.com.pk/digital_images/large/2018-04-09/the-unicorn-land-1523279289-2062.jpg')">
        </div>

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
import { toastController, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonImg, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { linkOutline, createOutline, informationCircle, basket, heart, list, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonAvatar, IonIcon, IonImg,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  data() {
    return {
      store : {
        name:'Digital Magic Store'
      },
      // segment:'products',
    }
  },
  methods: {
    /*segmentChanged(e: any) {
      console.log('segmentChanged', e)
      this.segment = e.detail.value
    },*/
    editStore() {
      console.log('editStore clicked!');
    },
    async copyStoreLink() {
      console.log('copyStoreLink clicked!')
      //TODO copy link to clipboard
      const toast = await toastController
          .create({
            message: 'Link to your store was copied to clipboard',
            duration: 2000,
            position: 'top'
          })
      return toast.present();
    },
  },
  setup() {
    return {
      linkOutline, createOutline, basket, heart, list, star, storefront, informationCircle,
    };
  }
})
</script>
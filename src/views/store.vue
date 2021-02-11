<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Your Storefront</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="editProfile()">
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

      <div class="center-horizontal">

        <h3>Digital Magic Store</h3>
        <div style="width:100%;height: 128px; overflow: hidden;background-size: cover; background-position: center; background-image: url('https://nation.com.pk/digital_images/large/2018-04-09/the-unicorn-land-1523279289-2062.jpg')">
        </div>

        <ion-segment @ionChange="segmentChanged($event)" value="products" >

          <ion-segment-button value="products">
            <ion-label>Products</ion-label>
            <ion-icon :icon="basket"></ion-icon>
          </ion-segment-button>

          <ion-segment-button value="categories">
            <ion-label>Categories</ion-label>
            <ion-icon :icon="list"></ion-icon>
          </ion-segment-button>

          <ion-segment-button value="about">
            <ion-label>About store</ion-label>
            <ion-icon :icon="informationCircle"></ion-icon>
          </ion-segment-button>

        </ion-segment>

      </div>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonImg, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { createOutline, informationCircle, basket, heart, list, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonAvatar, IonIcon, IonImg,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const editProfile = () => {
      console.log('editProfile clicked!');
    }
    const segmentChanged = (e: any) => {
      console.log('segmentChanged', e);
    }
    return { createOutline, basket, heart, list, star, storefront, informationCircle,
      editProfile, segmentChanged };
  }
})
</script>
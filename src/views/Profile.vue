<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
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
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="center-horizontal">
        <ion-avatar style="width:25%;height:25%" class="ion-margin-top">
          <img src="https://image.freepik.com/free-vector/silhouette-unicorn-hologram-gradient-background_1048-12923.jpg">
        </ion-avatar>
        <h3>Sovereign Unicorn</h3>

        <ion-segment @ionChange="segmentChanged($event)" value="products" class="ion-margin-top">

<!--          <ion-segment-button value="wishes">-->
<!--            <ion-label>Liked</ion-label>-->
<!--            <ion-icon :icon="heart"></ion-icon>-->
<!--          </ion-segment-button>-->

          <ion-segment-button value="products">
            <ion-label>Products</ion-label>
            <ion-icon :icon="basket"></ion-icon>
          </ion-segment-button>

<!--          <ion-segment-button value="favorites">-->
<!--            <ion-label>Favorites</ion-label>-->
<!--            <ion-icon :icon="star"></ion-icon>-->
<!--          </ion-segment-button>-->

          <ion-segment-button value="reselling">
            <ion-label>Reselling</ion-label>
            <ion-icon :icon="storefront"></ion-icon>
          </ion-segment-button>

        </ion-segment>

        <div>{{segment}}</div>

      </div>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { createOutline, heart, basket, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
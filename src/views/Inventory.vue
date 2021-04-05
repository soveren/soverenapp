<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inventory</ion-title>
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
          <ion-title size="large">Inventory</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-searchbar></ion-searchbar>

        <ion-segment @ionChange="segmentChanged($event)" value="bought" >

          <ion-segment-button value="bought">
            <ion-label>Bought</ion-label>
          </ion-segment-button>

          <ion-segment-button value="created">
            <ion-label>Created</ion-label>
          </ion-segment-button>

          <ion-segment-button value="resale">
            <ion-label>Resale</ion-label>
          </ion-segment-button>

          <ion-segment-button value="starred">
            <ion-label>Starred</ion-label>
          </ion-segment-button>

        </ion-segment>

      <ion-list>

        <ion-item v-for="(product) in products" v-bind:key="product.id" button
                  router-link="/tabs/product">
          <ion-thumbnail slot="start">
            <img :src="product.metadata.image" alt="">
          </ion-thumbnail>
          <ion-label>
            <h2>{{ product.metadata.name }}</h2>
            <p>{{ product.metadata.description }}</p>
          </ion-label>
          <ion-icon :icon="product.starred? star : starOutline" slot="end"></ion-icon>
        </ion-item>

      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { starOutline, createOutline, heart, basket, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      segment: 'purchased',
      products: [{
        id: 0,
        starred: false,
        metadata: { // https://docs.opensea.io/docs/metadata-standards
          name: 'Big Buck Bunny',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Big_Buck_Bunny_medium.ogv/600px-seek%3D26-Big_Buck_Bunny_medium.ogv.jpg',
          description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\nLicensed under the Creative Commons Attribution license",
          external_url: 'http://www.bigbuckbunny.org',
          background_color: null,
          animation_url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          youtube_url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // let's use animation_url
          attributes_json: null,
          attributes: null, // parsed attributes_json
          category: 'cartoons', // subcategories can be separated by back slash
          tags: ['movie','cartoon','big','buck','bunny','open source'],
          language: 'en-US',
        },
        contract: {
          published: true,
          owned: 1,
          price: 0.01,
          old_price: 0.02, // previous price (when gt current price discount will be shown)
          bulk_prices: false,
          price10: null,
          price100: null,
          price1000: null,
          reseller_interest: 50,
          amount: 15,
        }
      }]
    }
  },
  methods: {
    segmentChanged(e: any) {
      console.log('segmentChanged', e)
      this.segment = e.detail.value
    },

  },
  setup() {
    return { createOutline, heart, basket, star, starOutline, storefront };
  }
})
</script>
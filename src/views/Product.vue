<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Product</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="buyProduct()">
            <ion-icon slot="icon-only" :icon="basketOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Product</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <img :src="product.metadata.image"/>

        <ion-card-header>
          <ion-card-title>{{ product.metadata.name }}</ion-card-title>
          <ion-card-subtitle><ion-grid>
            <ion-row>
              <ion-col>Price:
              <span v-if="product.contract.old_price" class="old-price">
                {{ product.contract.old_price }}</span>
              {{ product.contract.price }}
              </ion-col>
              <ion-col class="ion-text-right">
              Resell for {{product.contract.reseller_interest}}%
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <span v-if="product.contract.owned"><ion-icon :icon="basket"></ion-icon> owned {{product.contract.owned}}</span>
              </ion-col>
              <ion-col v-if="product.contract.amount<1001" class="ion-text-right">
                {{product.contract.amount}} piece{{product.contract.amount>1?'s':''}} left
              </ion-col>

            </ion-row></ion-grid>
          </ion-card-subtitle>

        </ion-card-header>

        <ion-card-content>
          <v-md-preview :text="product.metadata.description" class="no-padding"></v-md-preview>
          <ion-card-subtitle class="ion-padding-vertical">
            <ion-icon :icon="open"></ion-icon>&nbsp;
            <a :href="product.metadata.external_url" target="_blank">
            {{product.metadata.external_url}}</a>
          </ion-card-subtitle>

          <video :src="product.metadata.animation_url" controls class="video-animation-url"></video>

          <ion-card-subtitle >
            <ion-icon :icon="logoYoutube"></ion-icon>&nbsp;
            <a :href="product.metadata.youtube_url" target="_blank">Watch on YouTube</a>
          </ion-card-subtitle>

        </ion-card-content>

      </ion-card>

      <!--      <ion-button @click="publishProduct()" expand="full" >Publish Product</ion-button>-->


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonGrid, IonRow, IonCol,
  IonCard,  IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonList,  IonItem,  IonThumbnail,  IonButtons,  IonButton,  IonLabel,  IonIcon,  IonAvatar,
  IonPage,  IonHeader,  IonToolbar,  IonTitle,  IonContent} from '@ionic/vue';
import {open, logoYoutube, bagCheckOutline, createOutline, heart, basket, basketOutline, star, storefront} from 'ionicons/icons';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonList, IonItem, IonThumbnail,
    IonGrid, IonRow, IonCol,
    IonButtons, IonButton, IonLabel, IonIcon, IonAvatar,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  },
  data() {
    return {
      product: {
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
      }
    }
  },
  methods: {
    buyProduct() {
      console.log('buyProduct clicked!');
    }
  },
  setup() {
    return {logoYoutube, bagCheckOutline, open, createOutline, heart, basket, basketOutline, star, storefront};
  }
})
</script>
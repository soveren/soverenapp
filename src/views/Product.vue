<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Product</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="copyProductLink()">
            <ion-icon slot="icon-only" :icon="linkOutline"></ion-icon>
          </ion-button>
          <ion-button @click="starProduct()">
            <ion-icon slot="icon-only" :icon="product.starred? star : starOutline"></ion-icon>
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
        <img :src="product.metadata.image" style="width:100%" alt="cover"/>

        <ion-card-header>
          <ion-card-title>{{ product.metadata.name }}</ion-card-title>
          <ion-card-subtitle><ion-grid>
            <ion-row>
              <ion-col>
                <ion-button size="small" color="success">Buy for&nbsp;
                  <span v-if="product.contract.old_price" class="old-price">
                    {{ product.contract.old_price }}&nbsp;</span>
                    {{ product.contract.price }}
                </ion-button>
              </ion-col>
              <ion-col class="ion-text-right">
                <ion-button v-if="product.contract.reseller_interest" size="small" color="">
                  Resell for {{product.contract.reseller_interest}}%
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <span v-if="product.contract.owned"><ion-icon :icon="basket"></ion-icon> owned {{product.contract.owned>1?product.contract.owned:''}}</span>
              </ion-col>
              <ion-col class="ion-text-right">
                <span v-if="product.contract.amount<1001">
                {{product.contract.amount}} piece{{product.contract.amount>1?'s':''}} left
                </span>
              </ion-col>
            </ion-row>
          </ion-grid>
          </ion-card-subtitle>

        </ion-card-header>

        <ion-card-content>
          <v-md-preview :text="product.metadata.description" class="no-padding"></v-md-preview>
          <ion-card-subtitle class="ion-padding-vertical">
            <ion-icon :icon="open"></ion-icon>&nbsp;
            <a :href="product.metadata.external_url" target="_blank">
            {{product.metadata.external_url}}</a>
          </ion-card-subtitle>

          <video :src="product.metadata.animation_url" controls class="video-animation-url"
                 onclick="this.paused ? this.play() : this.pause();"></video>

          <ion-card-subtitle v-if="product.metadata.youtube_url">
            <ion-icon :icon="logoYoutube"></ion-icon>&nbsp;
            <a :href="product.metadata.youtube_url" target="_blank">YouTube video</a>
          </ion-card-subtitle>

          <ion-grid class="ion-padding-top">
            <ion-row>
              <ion-col>
                <ion-badge v-for="tag in product.metadata.tags" v-bind:key="tag" class="sv-tag" color="medium">
                  {{ tag }}</ion-badge>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col v-if="product.metadata.category">
                Category: <span class="sv-category">{{product.metadata.category}}</span>
              </ion-col>
              <ion-col v-if="product.metadata.language" class="ion-text-right">
                Language: <span class="sv-category">{{product.metadata.language}}</span>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card-content>

      </ion-card>

      <!--      <ion-button @click="publishProduct()" expand="full" >Publish Product</ion-button>-->


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonGrid, IonRow, IonCol, IonBadge, IonBackButton,
  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonList, IonItem, IonThumbnail, IonButtons, IonButton, IonLabel, IonIcon, IonAvatar,
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, toastController
} from '@ionic/vue';
import {open, linkOutline, listCircle, logoYoutube, bagCheckOutline, createOutline, heart, basket, basketOutline, star, starOutline, storefront} from 'ionicons/icons';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonList, IonItem, IonThumbnail, IonBackButton,
    IonGrid, IonRow, IonCol, IonBadge,
    IonButtons, IonButton, IonLabel, IonIcon, IonAvatar,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  },
  data() {
    return {
      product: {
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
      }
    }
  },
  methods: {
    async starProduct() {
      //TODO star/un star product to clipboard
      this.product.starred = !this.product.starred
      const toast = await toastController
          .create({
            message: this.product.starred ? 'The product has been added to favorites.' : 'The product has been removed from favorites.',
            duration: 2000,
            position: 'top'
          })
      return toast.present();
    },
    async copyProductLink() {
      //TODO copy link to clipboard
      const toast = await toastController
          .create({
            message: 'Product link copied to clipboard.',
            duration: 2000,
            position: 'top'
          })
      return toast.present();
    },
  },
  setup() {
    return {linkOutline, listCircle, logoYoutube, bagCheckOutline, open, createOutline, heart, basket, basketOutline, star, starOutline, storefront};
  }
})
</script>
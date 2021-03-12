<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Product</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="publishProduct()">
            <ion-icon slot="icon-only" :icon="bagCheckOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Product</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>

      <ion-item>
        <ion-label position="stacked">Product Name</ion-label>
        <ion-input v-model="product.metadata.name" placeholder="Type Your Amazing Product Name Here"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Image</ion-label>
        <ion-input v-model="product.metadata.image" placeholder="ipfs://"></ion-input>
      </ion-item>

<!--      <ion-item>
        <ion-label position="stacked" class="ion-padding-bottom">Markdown Description</ion-label>
        <v-md-editor v-model="product.metadata.description" height="300px"
                     left-toolbar="undo redo | h bold italic quote | ol ul hr | link image emoji"
                     right-toolbar="preview" />
      </ion-item>

      <ion-item>
        <v-md-preview :text="product.metadata.description"></v-md-preview>
      </ion-item>-->

      <ion-item>
        <ion-label position="stacked">Description</ion-label>
        <ion-input v-model="product.metadata.description" placeholder=""></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Preview Media URL</ion-label>
        <ion-input v-model="product.metadata.animation_url" placeholder="ipfs:// link to video, audio or another file"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">External URL</ion-label>
        <ion-input v-model="product.metadata.external_url" placeholder="ipfs:// or https:// link to external webpage"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">YouTube URL</ion-label>
        <ion-input v-model="product.metadata.youtube_url" placeholder="https://"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Attributes JSON</ion-label>
        <ion-input v-model="product.metadata.attributes_json"
                   placeholder="[ { 'value': 'Happy' }, ]"></ion-input>
        <small>* Attributes editor will be available later.
          <a target="_blank" href="https://docs.opensea.io/docs/metadata-standards#section-attributes">
            Click here for Documentation.
          </a></small>
      </ion-item>


      <ion-item-divider>
        <ion-label>Contract</ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label >Price ETH</ion-label>
        <ion-input v-model="product.contract.price"
                   align="right" type="number" placeholder="0.0000"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Enable bulk prices for resellers</ion-label>
        <ion-toggle v-model="product.contract.bulk_prices"></ion-toggle>
      </ion-item>

      <ion-item v-if="product.contract.bulk_prices">
        <ion-label >10 pieces and more</ion-label>
        <ion-input v-model="product.contract.price10"
                   align="right" type="number" placeholder="0.0000"></ion-input>
      </ion-item>

      <ion-item v-if="product.contract.bulk_prices">
        <ion-label >100 pieces and more</ion-label>
        <ion-input v-model="product.contract.price100"
                   align="right" type="number" placeholder="0.0000"></ion-input>
      </ion-item>

      <ion-item v-if="product.contract.bulk_prices">
        <ion-label >1000 pieces and more</ion-label>
        <ion-input v-model="product.contract.price1000"
                   align="right" type="number" placeholder="0.0000"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label >Amount</ion-label>
        <ion-input v-model="product.contract.mint_amount"
                   align="right" type="number" placeholder="leave empty for unlimited"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Private URL</ion-label>
        <ion-input v-model="product.contract.private_url"
                   placeholder="ipfs://"></ion-input>
        <small>* url to private file or folder, accessible to buyers only (simple DRM)</small>
      </ion-item>

      </ion-list>

<!--      <ion-button @click="publishProduct()" expand="full" >Publish Product</ion-button>-->


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonToggle, IonItemDivider, IonInput, IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { bagCheckOutline, createOutline, heart, basket, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonToggle, IonItemDivider, IonInput, IonList, IonItem, IonThumbnail, IonSearchbar,
    IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      product: {
        metadata: { // https://docs.opensea.io/docs/metadata-standards
          name: '',
          image: '',
          description: '# Hello :grinning:',
          external_url: '',
          background_color: null,
          animation_url: '',
          youtube_url:'', // let's do not use http(s) but use ipfs
          attributes_json: null,
          attributes: null, // parsed attributes_json

        },
        contract: {
          status: 'draft',
          price: null,
          bulk_prices:false,
          price10: null,
          price100: null,
          price1000: null,
          mint_amount: null,
          private_url: '' // url to private data, accessible to token owners only (simple DRM)
        }
      }
    }
  },
  methods: {
    publishProduct() {
      console.log('publishProduct clicked!');
    }
  },
  setup() {
    return { bagCheckOutline, createOutline, heart, basket, star, storefront };
  }
})
</script>
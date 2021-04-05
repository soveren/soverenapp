<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Product</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="addProduct()">
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
          <ion-button slot="end" shape="round" fill="outline" class="ion-margin-top">
            <ion-icon :icon="cloudUpload"></ion-icon>&nbsp;Upload</ion-button>
        </ion-item>
        <div v-if="product.metadata.image" class="center ion-padding-vertical">
          <ion-img class="center preview-image" :src="product.metadata.image"/>
        </div>

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
          <ion-textarea v-model="product.metadata.description" placeholder=""></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Preview Media URL</ion-label>
          <ion-input v-model="product.metadata.animation_url"
                     placeholder="ipfs:// link to video, audio or another file"></ion-input>
          <ion-button slot="end" shape="round" fill="outline" class="ion-margin-top">
            <ion-icon :icon="cloudUpload"></ion-icon>&nbsp;Upload</ion-button>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">External URL</ion-label>
          <ion-input v-model="product.metadata.external_url"
                     placeholder="ipfs:// or https:// link to external webpage"></ion-input>
        </ion-item>
<!--
        <ion-item>
          <ion-label position="stacked">YouTube URL</ion-label>
          <ion-input v-model="product.metadata.youtube_url" placeholder="https://"></ion-input>
        </ion-item>-->

        <ion-item>
          <ion-label position="stacked">Attributes JSON</ion-label>
          <ion-input v-model="product.metadata.attributes_json"
                     placeholder="[ { 'value': 'Happy' }, ]"></ion-input>
          <small>* Attributes editor will be available later.
            <a target="_blank" href="https://docs.opensea.io/docs/metadata-standards#section-attributes">
              Click here for Documentation.
            </a></small>
        </ion-item>

        <ion-item>
          <ion-label>Sell by one<br/>
          <small>* The app will sell one token at a time</small></ion-label>
          <ion-toggle v-model="product.contract.sell_by_one"></ion-toggle>
        </ion-item>


<!--
        <ion-item-divider>
          <ion-label>Cataloging</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label>Category</ion-label>
          <ion-input v-model="product.metadata.category" class="ion-text-right"
                     placeholder="leave empty for uncategorized"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Tags</ion-label>
          <ion-input v-model="product.metadata.tags" class="ion-text-right"
                     placeholder="separated by comma. ex: 'movie,science,biology'"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Language</ion-label>
          <ion-input v-model="product.metadata.language" class="ion-text-right"
                     placeholder="example: 'en-US'"></ion-input>
        </ion-item>
-->


        <ion-item-divider>
          <h6>Contract</h6>
        </ion-item-divider>

        <ion-item>
          <ion-label position="stacked">Private URI of Paid Content</ion-label>
          <ion-input v-model="product.contract.privateUri"
                     placeholder="ipfs://"></ion-input>
          <small>* url to private file, accessible to buyers only (simple DRM)</small>
          <ion-button slot="end" shape="round" fill="outline" class="ion-margin-top">
            <ion-icon :icon="cloudUpload"></ion-icon>&nbsp;Upload</ion-button>

        </ion-item>

        <ion-item>
          <ion-label>Mint Amount</ion-label>
          <ion-input v-model="product.contract.amount" class="ion-text-right"
                     type="number" placeholder="leave empty for maximum"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Can mint more</ion-label>
          <ion-toggle v-model="product.contract.canMintMore"></ion-toggle>
        </ion-item>


        <ion-item-divider>
          <h6>Offer</h6>
        </ion-item-divider>

        <ion-item>
          <ion-label>List a token for sale</ion-label>
          <ion-toggle v-model="product.offer.makeOffer"></ion-toggle>
        </ion-item>

        <div v-if="product.offer.makeOffer" class="ion-no-padding">
        <ion-item>
          <ion-label>Price ETH</ion-label>
          <ion-input v-model="product.offer.price" class="ion-text-right"
                     type="number" placeholder="0.0000"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Reserve amount
            <br/><small>* do not sell specified amount</small>
          </ion-label>
          <ion-input v-model="product.offer.reserve" class="ion-text-right"
                     type="number" placeholder="0"></ion-input>
        </ion-item>


        <ion-item>
          <ion-label>Enable bulk discounts
            <br/><small>* from price, in percents</small>
          </ion-label>
          <ion-toggle v-model="product.offer.bulkDiscounts"></ion-toggle>
        </ion-item>

        <ion-item v-if="product.offer.bulkDiscounts">
          <ion-label class="ion-padding-start">10 pieces and more</ion-label>
          <ion-input v-model="product.offer.discount10"
                     align="right" type="number" placeholder="5"></ion-input>&nbsp;%
        </ion-item>

        <ion-item v-if="product.offer.bulkDiscounts">
          <ion-label class="ion-padding-start">100 pieces and more</ion-label>
          <ion-input v-model="product.offer.discount100"
                     align="right" type="number" placeholder="10"></ion-input>&nbsp;%
        </ion-item>

        <ion-item v-if="product.offer.bulkDiscounts">
          <ion-label class="ion-padding-start">1000 pieces and more</ion-label>
          <ion-input v-model="product.offer.discount1000"
                     align="right" type="number" placeholder="20"></ion-input>&nbsp;%
        </ion-item>


        <ion-item>
          <ion-label>Affiliate interest
            <br/><small>* how much partners will receive</small>
          </ion-label>
          <ion-input v-model="product.offer.affiliateInterest" class="ion-text-right"
                     type="number" placeholder="0"></ion-input>&nbsp;%
        </ion-item>

        <ion-item>
          <ion-label>Donation
            <br/><small>* from clear profit</small>
          </ion-label>
          <ion-input v-model="product.offer.donation" class="ion-text-right"
                     type="number" placeholder="5"></ion-input>&nbsp;%

        </ion-item>
        </div>

      </ion-list>

      <ion-button @click="addProduct()" shape="round" expand="full" >Mint Product</ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonToggle,  IonItemDivider,  IonInput,  IonList,  IonItem,  IonThumbnail,
  IonSearchbar,  IonButtons,  IonButton,  IonSegment,  IonSegmentButton,
  IonLabel,  IonIcon,  IonAvatar,  IonPage,  IonHeader,  IonToolbar,
  IonTitle,  IonContent, IonTextarea, IonImg,
} from '@ionic/vue';
import {cloudUpload, bagCheckOutline, createOutline, heart, basket, star, storefront} from 'ionicons/icons';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'profile',
  components: {
    IonToggle, IonItemDivider, IonInput, IonList, IonItem, IonThumbnail, IonSearchbar,
    IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea, IonImg,
  },
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
          youtube_url: '', // let's do not use http(s) but use ipfs
          attributes_json: null,
          attributes: null, // parsed attributes_json
          category: '',
          tags: '',
          language: ''
        },
        contract: {
          status: 'draft',
          price: null,
          old_price: null, // previous price (when gt current price discount will be shown)
          sell_by_one: true,
          // bulk_prices: false,
          // price10: null,
          // price100: null,
          // price1000: null,
          reseller_interest: null,
          amount: null,
          canMintMore: true,
          private_url: '' // url of private data, accessible to token owners only (simple DRM)
        },
        offer: {
          makeOffer: true,
        }
      }
    }
  },
  methods: {
    async addProduct() {
      console.log('publishProduct clicked!', );


    }
  },
  setup() {
    return {cloudUpload, bagCheckOutline, createOutline, heart, basket, star, storefront};
  }
})
</script>
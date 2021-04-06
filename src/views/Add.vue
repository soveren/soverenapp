<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Product {{previewMode?'- Preview':'- Edit'}}</ion-title>
        <ion-buttons slot="end">
          <ion-button v-show="!previewMode" @click="preview()">
            <ion-icon slot="icon-only" :icon="eyeOutline"></ion-icon>
          </ion-button>
          <ion-button v-show="previewMode" @click="edit()">
            <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
          </ion-button>
          <ion-button @click="add()">
            <ion-icon slot="icon-only" :icon="bagCheckOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Product </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list v-show="!previewMode" >

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
        <div v-show="product.metadata.image" class="center ion-padding-vertical">
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
          <ion-textarea v-model="product.metadata.description" rows="3" placeholder=""></ion-textarea>
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
          <ion-toggle v-model="product.contract.sellByOne"></ion-toggle>
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

        <div v-show="product.offer.makeOffer" class="ion-no-padding">
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

        <ion-item v-show="product.offer.bulkDiscounts">
          <ion-label class="ion-padding-start">10 pieces and more</ion-label>
          <ion-input v-model="product.offer.discount10"
                     align="right" type="number" placeholder="5"></ion-input>&nbsp;%
        </ion-item>

        <ion-item v-show="product.offer.bulkDiscounts">
          <ion-label class="ion-padding-start">100 pieces and more</ion-label>
          <ion-input v-model="product.offer.discount100"
                     align="right" type="number" placeholder="10"></ion-input>&nbsp;%
        </ion-item>

        <ion-item v-show="product.offer.bulkDiscounts">
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
          <ion-label>Donation to developers
            <br/><small>* from clear profit</small>
          </ion-label>
          <ion-input v-model="product.offer.donation" class="ion-text-right"
                     type="number" placeholder="5"></ion-input>&nbsp;%

        </ion-item></div>
      </ion-list>


      <ion-card v-show="previewMode" >
        <img :src="product.metadata.image" style="width:100%" alt="cover"/>

        <ion-card-header>
          <ion-card-title>{{ product.metadata.name }}
            <ion-button v-show="!product.offer.makeOffer" size="small" shape="round" fill="outline"
                        color="medium" class="ion-float-right">Not for Sale</ion-button>
          </ion-card-title>
          <ion-card-subtitle>
            <ion-grid v-show="product.offer.makeOffer">
            <ion-row>
              <ion-col>
                <ion-button size="small" shape="round" color="success">Buy for&nbsp;
                  {{ product.offer.price }}
                </ion-button>
              </ion-col>
              <ion-col class="ion-text-right">
                <ion-button v-show="product.offer.affiliateInterest" size="small" shape="round">
                  Resell for {{product.offer.affiliateInterest}}%
                </ion-button>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col><div v-show="product.offer.bulkDiscounts">
                Bulk discounts:
                <ion-grid class="bulk-discounts">
                  <ion-row v-show="product.offer.discount10"  ><ion-col>10+:  </ion-col> <ion-col class="ion-text-right">{{product.offer.discount10}}%</ion-col></ion-row>
                  <ion-row v-show="product.offer.discount100" ><ion-col>100+: </ion-col> <ion-col class="ion-text-right">{{product.offer.discount100}}%</ion-col></ion-row>
                  <ion-row v-show="product.offer.discount1000"><ion-col>1000+:</ion-col> <ion-col class="ion-text-right">{{product.offer.discount1000}}%</ion-col></ion-row>
                </ion-grid>

              </div></ion-col>
              <ion-col class="ion-text-right">
                <div v-show="product.contract.amount<1001">
                {{product.contract.amount-product.offer.reserve}} piece{{ (product.contract.amount-product.offer.reserve)>1?'s':''}} left
                </div>
                <span v-show="product.contract.amount"><ion-icon :icon="basket"></ion-icon> owned {{product.contract.amount>1?product.contract.amount:''}}</span>
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

          <ion-card-subtitle v-show="product.metadata.youtube_url">
            <ion-icon :icon="logoYoutube"></ion-icon>&nbsp;
            <a :href="product.metadata.youtube_url" target="_blank">YouTube video</a>
          </ion-card-subtitle>

          <ion-grid class="ion-padding-top">
            <ion-row>
              <ion-col>
<!--                <ion-badge color="light" class="sv-tag" >Tags:</ion-badge>-->
                <ion-badge v-for="tag in product.metadata.tags?.split(',')"
                           v-bind:key="tag" class="sv-tag" color="medium">
                  {{ tag }}</ion-badge>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col v-show="product.metadata.category">
                Category: <span class="sv-category">{{product.metadata.category}}</span>
              </ion-col>
              <ion-col v-show="product.metadata.language" class="ion-text-right">
                Language: <span class="sv-category">{{product.metadata.language}}</span>
              </ion-col>
            </ion-row>
          </ion-grid>

        </ion-card-content>

      </ion-card>




      <ion-button v-show="!previewMode" @click="preview()" shape="round" expand="full" fill="outline" class="ion-margin">
        <ion-icon :icon="eyeOutline"></ion-icon>&nbsp;Preview</ion-button>

      <ion-button v-show="previewMode" @click="edit()" shape="round" expand="full" fill="outline" class="ion-margin">
        <ion-icon :icon="createOutline"></ion-icon>&nbsp;Edit</ion-button>

      <ion-button @click="add()" shape="round" expand="full" class="ion-margin">
        <ion-icon :icon="bagCheckOutline"></ion-icon>&nbsp;Publish</ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonGrid, IonRow, IonCol, IonBadge,
  IonToggle, IonItemDivider, IonInput, IonList, IonItem, IonThumbnail,
  IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton,
  IonLabel, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar,
  IonTitle, IonContent, IonTextarea, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
} from '@ionic/vue';
import {open, logoYoutube, eyeOutline, cloudUpload, bagCheckOutline, createOutline, heart, basket, star, storefront} from 'ionicons/icons';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'profile',
  components: {
    IonGrid, IonRow, IonCol, IonBadge,
    IonToggle, IonItemDivider, IonInput, IonList, IonItem, IonThumbnail, IonSearchbar,
    IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea, IonImg,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
  },
  setup() {
    return {open, logoYoutube, eyeOutline, cloudUpload, bagCheckOutline, createOutline, heart, basket, star, storefront};
  },
  data() {
    return {
      previewMode: false,
      product: {
        metadata: { // https://docs.opensea.io/docs/metadata-standards
          name: 'My Amazing Product',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Big_Buck_Bunny_medium.ogv/600px-seek%3D26-Big_Buck_Bunny_medium.ogv.jpg',
          description: `
# Hello :grinning:
this is **markdown** description
`,
          external_url: 'http://google.com',
          background_color: null,
          animation_url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          youtube_url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // let's do not use http(s) but use ipfs
          attributes_json: null,
          attributes: null, // parsed attributes_json
          category: 'Video',
          tags: 'test,example,video',
          language: 'en-US'
        },
        contract: {
          amount: 1000,
          sellByOne: true,
          canMintMore: true,
          privateUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' // url of private data, accessible to token owners only (simple DRM)
        },
        offer: {
          makeOffer: true,
          price: 0.01,
          bulkDiscounts: true,
          discount10: 5,
          discount100: 10,
          discount1000: 20,
          affiliateInterest: 25,
          donation: 5,

        }
      }
    }
  },
  methods: {
    async preview() {
      this.previewMode = true
    },
    async edit() {
      this.previewMode = false
    },
    async add() {
      console.log('add clicked!', );

    }
  },

})
</script>
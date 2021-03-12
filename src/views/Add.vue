<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Product</ion-title>
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
          <ion-title size="large">Add Product</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-label position="stacked">Product Name</ion-label>
        <ion-input v-model="product.name" placeholder="Type Your Amazing Product Name Here"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked" class="ion-padding-bottom">Markdown Description</ion-label>
        <v-md-editor v-model="product.description" height="300px"
                     left-toolbar="undo redo | h bold italic quote | ol ul hr | link image emoji"
                     right-toolbar="preview" />

      </ion-item>
      <ion-item>
        <v-md-preview :text="product.description"></v-md-preview>
      </ion-item>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { createOutline, heart, basket, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonInput, IonList, IonItem, IonThumbnail, IonSearchbar,
    IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      product: {
        name:'',
        image:'',
        description:'# Hello :grinning:',
        media:'',
        price:null,
        amount:null,
      }
    }
  },
  methods: {
    editProfile() {
      console.log('editProfile clicked!');
    }
  },
  setup() {
    return { createOutline, heart, basket, star, storefront };
  }
})
</script>
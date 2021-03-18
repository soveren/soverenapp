<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Edit Your Storefront</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="saveStore()">
            <ion-icon slot="icon-only" :icon="checkmark"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Edit Your Storefront</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Store Name</ion-label>
          <ion-input v-model="store.name" placeholder="Type Your Amazing Store Name Here"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Store Avatar</ion-label>
          <ion-input v-model="store.avatar" placeholder="ipfs://"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Cover Image</ion-label>
          <ion-input v-model="store.cover"
                     placeholder="ipfs:// link to wide image"></ion-input>
        </ion-item>

<!--        <ion-item>
          <ion-label position="stacked" class="ion-padding-bottom">Store Description</ion-label>
          <v-md-editor v-model="store.description" height="300px"
                       left-toolbar="undo redo | h bold italic quote | ol ul hr | link image emoji"
                       right-toolbar="preview" />
        </ion-item>-->

<!--        <ion-item>
          <v-md-preview :text="store.description"></v-md-preview>
        </ion-item>-->

        <ion-item>
          <ion-label position="stacked">Description</ion-label>
          <ion-input v-model="store.description" placeholder=""></ion-input>
        </ion-item>


        <ion-item>
          <ion-label>Donation to developers</ion-label>
          <ion-input v-model="store.donation" class="ion-text-right"
                     type="number" placeholder=""></ion-input>&nbsp;%
        </ion-item>


      </ion-list>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  toastController, IonBackButton,  IonButtons,  IonButton,  IonSegment,  IonSegmentButton,
  IonLabel,  IonIcon,  IonAvatar,  IonImg,  IonPage,  IonHeader,  IonToolbar,
  IonTitle,  IonContent, IonList, IonInput, IonItem,
} from '@ionic/vue';
import { linkOutline, checkmark, createOutline, informationCircle, basket, heart, list, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonBackButton,IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonAvatar, IonIcon, IonImg,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonInput, IonItem, },
  data() {
    return {
      store : {
        name:'Digital Magic Store',
        avatar: 'https://i.pinimg.com/originals/f9/2e/ab/f92eab3755a5003dc0f639bda476573e.png',
        cover: 'https://nation.com.pk/digital_images/large/2018-04-09/the-unicorn-land-1523279289-2062.jpg',
        description: 'We sell best magical goods only!',
        donation: null,
      },
      // segment:'products',
    }
  },
  methods: {
    saveStore() {
      console.log('saveStore clicked!');
    },

  },
  setup() {
    return {
      linkOutline, checkmark, createOutline, basket, heart, list, star, storefront, informationCircle,
    };
  }
})
</script>
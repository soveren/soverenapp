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
      <ion-progress-bar v-if="loading" type="indeterminate"></ion-progress-bar>

      <ion-list v-if="!loading">
        <ion-item>
          <ion-label position="stacked">Store Name</ion-label>
          <ion-input v-model="storeForm.name" placeholder="Type Your Amazing Store Name Here"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Store Avatar</ion-label>
          <ion-input v-model="storeForm.avatar" placeholder="ipfs://"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Cover Image</ion-label>
          <ion-input v-model="storeForm.cover"
                     placeholder="ipfs:// link to wide image"></ion-input>
        </ion-item>

<!--        <ion-item>
          <ion-label position="stacked" class="ion-padding-bottom">Store Description</ion-label>
          <v-md-editor v-model="storeForm.description" height="300px"
                       left-toolbar="undo redo | h bold italic quote | ol ul hr | link image emoji"
                       right-toolbar="preview" />
        </ion-item>-->

<!--        <ion-item>
          <v-md-preview :text="storeForm.description"></v-md-preview>
        </ion-item>-->

        <ion-item>
          <ion-label position="stacked">Description</ion-label>
          <ion-input v-model="storeForm.description" placeholder=""></ion-input>
        </ion-item>


        <ion-item>
          <ion-label>Donation to developers</ion-label>
          <ion-input v-model="storeForm.donation" class="ion-text-right"
                     type="number" placeholder=""></ion-input>&nbsp;%
        </ion-item>


      </ion-list>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonProgressBar, IonBackButton,  IonButtons,  IonButton,  IonSegment,  IonSegmentButton,
  IonLabel,  IonIcon,  IonAvatar,  IonImg,  IonPage,  IonHeader,  IonToolbar,
  IonTitle,  IonContent, IonList, IonInput, IonItem,
} from '@ionic/vue';
import { linkOutline, checkmark, createOutline, informationCircle, basket, heart, list, star, storefront  } from 'ionicons/icons';
import {defineComponent, ref} from 'vue';
import {myStore} from "@/soveren";

export default defineComponent({
  name: 'profile',
  components: { IonProgressBar, IonBackButton,IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonAvatar, IonIcon, IonImg,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonInput, IonItem, },
  data() {
    return {
      // store : {
      //   name:'Digital Magic Store',
      //   avatar: 'https://i.pinimg.com/originals/f9/2e/ab/f92eab3755a5003dc0f639bda476573e.png',
      //   cover: 'https://nation.com.pk/digital_images/large/2018-04-09/the-unicorn-land-1523279289-2062.jpg',
      //   description: 'We sell best magical goods only!',
      //   donation: null,
      // },
      // segment:'products',
    }
  },
  methods: {
    async saveStore() {
      await (await myStore()).setProfileFields(this.storeForm)
      this.$router.go(-1)
    },

  },
  setup() {
    const storeForm = ref({})
    const loading = ref(true)

    async function loadData() {
      try {
        const ms = await myStore()
        storeForm.value = await ms.getProfileFields()
      } finally {
        loading.value = false
      }
    }
    loadData().then()

    return {
      storeForm, loading, linkOutline, checkmark, createOutline, basket, heart, list, star, storefront, informationCircle,
    };
  }
})
</script>
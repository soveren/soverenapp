<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Stores</ion-title>
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
          <ion-title size="large">Stores</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-searchbar></ion-searchbar>

      <ion-list>

        <ion-item v-for="store in stores" v-bind:key="store.id"
                  :router-link="'/tabs/store/'+store.id">
<!--          <router-link :to="'/tabs/store/'+store.id">-->
          <ion-avatar slot="start">
            <img :src="store.avatar">
          </ion-avatar>
          <ion-label>
            <h2>{{ store.name }}</h2>
            <p>{{ store.description }}</p>
          </ion-label>
<!--          <ion-button fill="outline" slot="end">View</ion-button>-->
<!--          </router-link>-->
        </ion-item>

<!--        <ion-item button @click="testClick()">
          <ion-avatar slot="start">
            <img src="">
          </ion-avatar>
          <ion-label>
            <h2>Game Start</h2>
&lt;!&ndash;            <p>Icon on right</p>&ndash;&gt;
          </ion-label>
          <ion-icon :icon="heart" slot="end"></ion-icon>
        </ion-item>-->

      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { createOutline, heart, basket, star, storefront  } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'profile',
  components: { IonList, IonItem, IonThumbnail, IonSearchbar, IonButtons, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      segment:'wishes',
      stores: [
        {
          id: 'zdpuAmUpNSRe2rgPbJuPwURu85oVWfUMSovXY1sTh4vC3DMev',
          name:'Digital Magic Store',
          avatar: 'https://i.pinimg.com/originals/f9/2e/ab/f92eab3755a5003dc0f639bda476573e.png',
          cover: 'https://nation.com.pk/digital_images/large/2018-04-09/the-unicorn-land-1523279289-2062.jpg',
          description: 'We sell best magical goods only!',
        },
        {
          id: 2,
          name:'Game Start',
          avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX///8zMzPg4OCEm4d3pL30fmD4smolJSUwMDCgoKArKyseHh7j4+Pm5ubLy8uxsbF1dXVGRkYaGhooKCgWFhZ7qsQcHBz+gmP/uW0SEhL5+fmcnJwsKSyJoYxra2vx8fEbJy+IiIgcLTAuKSW4uLjU1NTExMRQUFCoqKg7OzstMDJ7e3uRkZFZWVl7kH5wmK/kpWRlZWVXYlhuf3BIOjc5P0GOVEbYclnDalNkhpmqX01bd4dJQDiQbUvGkVtZSjxjcWVNVU5UXlVYQDpRZnPpel11SkBIWGFBTFOwYk+CT0M9NjWieVDtq2d3XUQiKjCzhFVrmbrbAAAHE0lEQVR4nO2ceXvaRhDGkcDWouWUZBmBDcbmEuCDXM7VJG2SNq2bJt//0xSDMZKR2Fld0D7v71/pYXi1O7Mze+VyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP8HTbVSbXVrtdqkOx0N+p2UzHT6g9G0O5nb6baqFbWZkpmnlHuToWFxTTP1OaapccNRaiM1YTPqqK04BtfMpRlN45YxnPTKCZvZoNSqW9xkyhOYrhl6t5+YmX7XNDR904zJrXorTZG9oaVtmF2bt9xiEh2pU3StzY/4aEazhr0ErAQZnlo81O7KujMpxTSjTpzwr/hghhut5F2/OeXadrtLTKs9iGFm0LZMihmNtxKTtmSkkfTdo3N7Nm0V5WlNZzbXqWY0s5qgPnXIqYaXIuehLwImWd49zB7G9YhHRo7AMXaE7owS0dec2buWEordTkBgySW5/o4w3dijY8XYzx66gvGYecZgT11wDbMq8QTuWgABJ8YAXPkvCJxLjNyKqrXvXXQJMyIWNk1Rfrg3MDNaxn8plWLsFP0yisCuXKaWFuxEcV12IuhOvCsvcD+iDDt5dpU/Pc0/r59sf1E+2jTZPjghU65O8wtOP22XyHRZV5wIczWmL0lMTpCNq/wKkURzIiewL+qjTJ+1F8yU9Br75Plpfi3x1+2GHLn0TRRHmdIvP6AO05LI6h6B+fyVoJ8OZQRWLIFxrVhWHyj1yOW/JCeffApP3e2f0pDJ3oTNolVLjworaQ0rJ1d5n8Lftv8rVk+wCXej8Jngu9v0RpwJA+Q+tqGEJ5bFg30mCnU5P5yHU2oGXhSHjkwUysXSOSY1d6uLw38mCuXGwzmM0QSqwjiTlUKFeQQKcpoFNi07JXTSzBS61Lx0CbGbXhJylIwU0muLh9dNkkJK2ZSVQmp9uMKiTPT3DcIvpalwLH4lVC+nLC1WKWlmWgrH58qLu/H5VpHsQnnpsotAlSRH7IZUhroXw6vQ8T2KUWmw81e3B8fHX19/Pt+i78t14eio8ObbRdBTyoRNcOHE9HbNQ3vwqFDt+57U3Mg18fju9vhgwfHbMIlMuT4qLDh6FyCRMUKpHzjee+rBJWuBqup/Um5HlTj+erAiVCK7LqwIlGiJl7+bgZ3UUw+KKA0i+uX56+ODtcTfA33x4s1RYS3xj83GsMWVfjMwo/FEFqHCiJFn/Nkj8ODga1Ajsm8egYXC9WYjcnEF1dmVwvM/fQqPXwR4y8U7n8KjlxvvEIaL3Sm8PfAp/Cugm15cF3wKv2wo1MQL353AlGYHCl9FUyjehbIzP0yoDQkKA/9fFgrfPvHDgHfEfkjopcHT+dnH0tuIsZSQmAaO+OaUPB6WSYltAImMh4TRIqQ8NHuhOU3J/2QgnDAKg5TTeAQG5TQGYW5/Epx0aW7dg+vNvH1P6tFXjkl5qbs1L6VkbaGTGMwL9yo0fI+i6lMSqS0UscAcKa3c1/pQnxEUEuaDM67xN/tFaEcxpwSFufAdyGuym6f5caa8vxufEaY27qGE0tBQ4yMrheOzX24OG43vHz6ekd53SLuje4R/nJHC8d1N43BB42+KROLaTIcw2ZaVwu+HKxo/CRIJWekCwlahbBSefThc0/hH7IsWcfGpKv7LmSgcf2x4FB7eCBuRvAocXED5yEThj59egYeN96JG1Mjb98OmTL2/lYHCsxu/wl9ECi3yriHx+tpuFP7Y/j55gTRHWMjPRuEHuTY0JHa1C7dEeerFyPWgEEk/lNv3JZy3NnulB6LXgyIkYymlcFojTr/5Q1Xoig60xUBqPNRISfeaqbDrJVAPCpHIaUiVoY/U+p4MEnmp/BZadS/2CJNrCy3CNuhWYoMACz2sR1hOpdWHzJUXOB8UEznSxbh92S1Wgxi1ai7lyCjB1+1oJy4ScEVmXG6vuktTnsCHjHowqBx7IDAVsf93JoQ9WNuxitEEzlObmMeCOGXmK5frxZRoS46EXiqxDudxahrVj2XGltyl/8R2jI5q0QN4P8Y5TitGC96jRj1QwRwZ51DlznF7kDITSGcYqXTQaTOXcc0wqQ36YUSJdVpd+gTyJEJYi2AmkIEt2YWYEyGHyvXoFyrEMRNIpy31fbkb7Xx1ZyZlRnOT6KErBvQyULOj33Qw0Mmrj6YTM4ZuMGIkjZoxjXVHTdEkaTStSQr3t4wUQ+AoOnemcV2/OdJE/sg0p5vYpR9+KjUebl3XrMtkLv8ZtLfc4nJ/x1A1xTuxmr0237zBiemabcyqyfWbTnVm20FmuDUsptR8HvqjWt0xOF8WsZxbjtsuVpL+rM1Kse2uzWjcdpRZq5LWxWmb9tVKb1RsTVujXpr3qK3NVNO7FQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQOf8C3TXYF6Y0pnAAAAAASUVORK5CYII=',
          cover: 'https://cdn.vox-cdn.com/thumbor/6I-IQtvx29OSQp0nZscVi7Ev9rA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68510166/jbareham_201201_ecl1050_goty_2020_top_50_02.0.jpg',
          description: 'Super games you can buy here!',
        },
      ]
    }
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
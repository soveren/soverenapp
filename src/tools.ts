import { loadingController } from '@ionic/vue';

const loading = await loadingController
    .create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        // duration: this.timeout,
    });

export {loading }

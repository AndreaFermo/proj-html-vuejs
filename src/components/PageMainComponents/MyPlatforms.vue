<template>
    <div class="pltaforms-container">
        <a href="#" v-for="(image, index) in images" :kei="index"><img :src="getImagePath(image)" :alt="image"></a>
    </div>
</template>
<script>
export default {
    name: 'MyPlatforms',
    data() {
        return {
            images: ['ebay-logotan', 'audible-logotan', 'bb-logotan', 'kindlefire-logotan']
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../../assets/images/${img}-2x-200x66.png`, import.meta.url).href;
        }
    }
}
</script>
<style scoped lang="scss">
@use '../../styles/partials/variables';

.pltaforms-container {
    display: flex;
    justify-content: center;

    img {
        height: 44px;
        margin: 30px 15px;

    }
}
</style>
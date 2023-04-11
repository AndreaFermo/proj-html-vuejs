<template>
    <div class="pltaforms-container">
        <a href="#"><img src="../../assets/images/ebay-logotan-2x-200x66.png" alt="logo ebay"></a>
        <a href="#"><img src="../../assets/images/audible-logotan-2x-200x66.png" alt="logo audible"></a>
        <a href="#"><img src="../../assets/images/bb-logotan-2x-200x66.png" alt="logo baners & nobles"></a>
        <a href="#"><img src="../../assets/images/kindlefire-logotan-2x-200x66.png" alt="logo kindle fire"></a>
    </div>
</template>
<script>
export default {
    name: 'MyPlatforms'
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
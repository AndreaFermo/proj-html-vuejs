<template>
    <a href="#">Buy on Amazon</a>
</template>
<script>
export default {
    name: 'BuyButton'
}
</script>
<style scoped lang="scss">
@use '../styles/partials/variables';

a {
    text-decoration: none;
    color: variables.$color-black;
    padding: 10px 35px;
}
</style>
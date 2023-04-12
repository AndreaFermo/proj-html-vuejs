<template>
    <div class="newsletter-container">
        <h3>Subscribe To My Newsletter</h3>
        <h4>BE NOTIFIED ABOUT BOOK SIGNIN TOUR DATES</h4>
        <input type="text" placeholder="Insert your email...*">
        <button>Subscribe</button>
        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt.</p>
    </div>
</template>
<script>
export default {
    name: 'MyNewsletter'
}
</script>

<style scoped lang="scss">
@use '../../styles/partials/variables';

.newsletter-container {
    width: 100%;
    text-align: center;
    padding: 80px 0px;
    background-image: url(../../assets/images/banner-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    h3 {
        color: variables.$color-white;
        font-size: 40px;
        width: 400px;
        margin: auto;
    }

    h4 {
        color: variables.$color-saffron;
        font-weight: 400;
        padding: 20px 0px 30px;
    }

    input {
        padding: 12px 40px 12px 12px;
        margin-right: 15px;
        border: none;
        border-radius: 5px;
    }

    button {
        background-color: variables.$color-green;
        color: variables.$color-white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        padding: 10px 20px;

        &:hover {
            cursor: pointer;
        }
    }

    p {
        color: variables.$color-suva-gray;
        width: 400px;
        margin: auto;
        padding-top: 20px
    }

}
</style>
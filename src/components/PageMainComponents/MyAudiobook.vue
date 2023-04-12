<template>
    <div class="audiobook-container">
        <div class="audible-left">
            <img src="../../assets/images/audible-app-2x-400x418.png" alt="audible app image">
        </div>
        <div class="audible-right">
            <h3>New Audiobook</h3>
            <p class="listen-it">NO TIME TO READ? NO PROBLEM. LISTEN TO IT</p>
            <p class="text">Donec fringilla nunc eu turpis dignissim, at euismod sapien ticidunt. Maecenas eleifend congue
                cursus.
            </p>
            <div class="logos-container">
                <img src="../../assets/images/audible-logo.png" alt="logo audible">
                <img src="../../assets/images/bn-logo-tall.png" alt="logo barnes & noble">
                <img src="../../assets/images/kindle-logo-tall.png" alt="logo kindle fire">
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: 'MyAudiobook'
}
</script>
<style scoped lang="scss">
@use '../../styles/partials/variables';

.audiobook-container {
    width: 100%;
    height: 380px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 50px;
    background-image: url(../../assets/images/banner.jpg);
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .audible-left {
        height: 340px;

        img {
            height: 100%;
        }

    }

    .audible-right {
        width: 280px;
        text-align: center;
        margin-bottom: 120px;
        margin-left: 30px;

        h3 {
            color: variables.$color-white;
            font-size: 25px;
            margin-bottom: 10px;

        }

        .listen-it {
            color: variables.$color-saffron;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .text {
            color: variables.$color-suva-gray;
            font-size: 12px;
        }

        .logos-container {
            display: flex;
            justify-content: center;

            img {
                width: 90px;
                padding: 10px;
            }
        }
    }
}
</style>
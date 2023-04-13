<template>
    <h3>Dig A Little Dipper Into Damon Vaughn</h3>
    <h4>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h4>
    <div class="cards-container">
        <div class="card" v-for="(card, index) in cards" :kei="index">
            <img :src="getImagePath(card.image)" :alt="card.image">
            <div class="filter">
                <div class="card-info">
                    <h5>{{ card.name }}</h5>
                    <div class="line"></div>
                    <p>{{ card.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyAuthorInfo',
    data() {
        return {
            cards: [
                {
                    name: 'Abot Me',
                    text: 'Vestibulum ante ipsum primis',
                    image: '1'
                },
                {
                    name: 'My Latest Book',
                    text: 'Vestibulum ante ipsum primis',
                    image: '4'
                },
                {
                    name: 'Book Signing',
                    text: 'Vestibulum ante ipsum primis',
                    image: '3'
                }
            ]
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../../assets/images/box-${img}.jpg`, import.meta.url).href;
        }
    }
}
</script>
<style scoped lang="scss">
@use '../../styles/partials/variables';

h3 {
    font-size: 28px;
    padding: 50px 0px 5px;
}

h4 {
    color: variables.$color-green;
    font-size: 12px;
    padding-bottom: 30px;
}

.cards-container {
    display: flex;

    .card {
        margin: 15px;
        width: calc((100% / 3) - 30px);
        height: 340px;
        overflow: hidden;
        border-bottom-right-radius: 50px;
        position: relative;
        transition: transform .3s;

        &:hover {
            filter: drop-shadow(8px 8px 10px gray);
            transform: scale(1.05);
        }

        .filter {
            background-image: linear-gradient(rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.542));
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
        }

        img {
            width: 360px;
        }

        .card-info {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translate(-50%, 0);

            h5 {
                color: variables.$color-white;
                font-size: 18px;
                padding-bottom: 5px;
            }

            .line {
                border-top: 2px solid rgba(255, 255, 255, 0.346);
                width: 30px;
                margin: auto;
            }

            p {
                color: variables.$color-saffron;
                padding-top: 5px;
                font-size: 10px;
            }

        }
    }
}
</style>
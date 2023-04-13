<template>
    <h3>Upcoming Events</h3>
    <h4>MEET THE AUTHOR IN PERSON</h4>
    <div class="cards-container">
        <div class="card" v-for="(card, index) in cards" :kei="index">
            <img :src="getImagePath(card.image)" alt="chicago">
            <h5>{{ card.name }}</h5>
            <div class="event-container">
                <p>{{ card.text }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyEvents',
    data() {
        return {
            cards: [
                {
                    name: 'Chicago Book Signing',
                    text: 'Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
                    image: '5'
                },
                {
                    name: 'Meet & Greet With Amanda',
                    text: 'Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
                    image: '4'
                },
                {
                    name: 'Open Book: Dialogues',
                    text: 'Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
                    image: '7'
                }
            ]
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../../assets/images/event-0${img}-400x240.jpg`, import.meta.url).href;
        }
    }
}
</script>

<style scoped lang="scss">
@use '../../styles/partials/variables';

h3 {
    font-size: 28px;
    padding: 30px 0px 5px;
}

h4 {
    color: variables.$color-saffron;
    font-size: 12px;
    padding-bottom: 30px;
}

.cards-container {
    display: flex;
    width: 900px;
    margin: auto;
    padding-bottom: 30px;

    .card {
        background-color: variables.$color-white;
        margin: 15px;
        width: calc((100% / 3) - 30px);

        &:hover img {
            filter: brightness(1.4) opacity(0.7);
        }

        img {
            width: 100%;
            transition: filter .5s;
        }

        h5 {
            font-size: 18px;
            font-weight: 500;
            padding: 15px 0;

        }

        .event-container {
            padding: 0px 20px 20px;

            p {
                padding-top: 15px;
                font-size: 12px;
                border-top: 1px solid rgba(0, 0, 0, 0.107);
            }
        }

    }
}
</style>
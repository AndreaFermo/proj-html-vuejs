<template>
    <h3>Upcoming Events</h3>
    <h4>MEET THE AUTHOR IN PERSON</h4>
    <div class="cards-container">
        <div class="card">
            <img src="../../assets/images/event-05-400x240.jpg" alt="chicago">
            <h5>Chicago Book Signing</h5>
            <div class="event-container">
                <p>Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt
                    nibh
                    pulvinar a nulla.</p>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/event-04-400x240.jpg" alt="chicago">
            <h5>Chicago Book Signing</h5>
            <div class="event-container">
                <p>Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt
                    nibh
                    pulvinar a nulla.</p>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/event-07-400x240.jpg" alt="chicago">
            <h5>Chicago Book Signing</h5>
            <div class="event-container">
                <p>Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt
                    nibh
                    pulvinar a nulla.</p>
            </div>


        </div>

    </div>
</template>
<script>
export default {
    name: 'MyEvents'
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

        img {
            width: 100%;
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
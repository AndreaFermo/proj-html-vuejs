<template>
    <h3>Dig A Little Dipper Into Damon Vaughn</h3>
    <h4>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h4>
    <div class="cards-container">
        <div class="card">
            <img src="../../assets/images/box-1.jpg" alt="">
            <div class="filter">
                <div class="card-info">
                    <h5>Abot Me</h5>
                    <div class="line"></div>
                    <p>Vestibulum ante ipsum primis</p>
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/box-4.jpg" alt="">
            <div class="filter">
                <div class="card-info">
                    <h5>My Latest Book</h5>
                    <div class="line"></div>
                    <p>Vestibulum ante ipsum primis</p>
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/box-3.jpg" alt="">
            <div class="filter">
                <div class="card-info">
                    <h5>Book Signing</h5>
                    <div class="line"></div>
                    <p>Vestibulum ante ipsum primis</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyAuthorInfo'
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
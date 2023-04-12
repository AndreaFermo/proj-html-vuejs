<template>
    <div class="critics-top">
        <div>
            <h3>What The Critics Say</h3>
            <p>TESTIMONIALS FROM AROUND THE WORLD</p>
        </div>
        <a href="#">Read All Testimonials</a>
    </div>
    <div class="critics-bot">
        <div class="left-wrapper">
            <div class="left">
                <h3>Best Author Of His Generation</h3>
                <p>This book will change your prospective on life</p>
                <p>Donec fragilla nunc eu turpis dignissim, at euismod sapien ticidunt. Maecenas eleifend congue cursus. In
                    vitae enim quis sem pharetra.Curabitur arcu erat, accumsan id imperdier et, porttitor at sem.</p>
                <p>Donec rutrum congue leo eget malesuada. Vivamus suscript tortor eget felis porttitor valutpat. Nulla quis
                    lorem ut liber. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas
                    non
                    nisi. Donec rutrum congue leo eget malesuada.</p>
                <div class="reporter">
                    <img src="../../assets/images/nytimes-logo-white-xsmall.png" alt="nytimes logo">
                    <span>Justin
                        Kilpatrick,</span> <span class="jurnal">The New York Times</span>
                </div>
            </div>

        </div>
        <div class="right">
            <div class="card">
                <div class="card-wrapper">
                    <h3>A True Masterpiece, Bravo!</h3>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectrtur sed,
                        convallis at tellus. Vivamus suscipit tortor eget felis porttitor volupat. Nulla quis lorem ut
                        libero
                        malesuada feug at.</p>
                </div>
                <p class="jurnalist">
                    <img src="../../assets/images/theguardian-xsmall.png" alt=""><span>Gerald Hendeley, The Guardian</span>
                </p>
            </div>
            <div class="card">
                <div class="card-wrapper">
                    <h3>A Unique View On the World</h3>
                    <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                        sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut
                        libero malesuada feugiat. Vestibulum ac diam sit amet</p>
                </div>
                <p class="jurnalist">
                    <img src="../../assets/images/globe-xsmall.png" alt=""><span>Mary Maxey, The Globe And Mail</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyCritics'
}
</script>
<style scoped lang="scss">
@use '../../styles/partials/variables';

.critics-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h3 {
        margin-bottom: 10px;
        font-size: 25px;
    }

    p {
        font-size: 12px;
        color: variables.$color-green;
    }


    a {
        text-decoration: none;
        color: variables.$color-white;
        background-color: variables.$color-saffron;
        padding: 10px 25px;
        font-size: 10px;
        border-radius: 5px;
    }
}

.critics-bot {
    display: flex;

    .left-wrapper {
        width: 60%;
        background-image: url(../../assets/images/testimonial2-2x.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        color: variables.$color-white;
        border-bottom-right-radius: 40px;
        margin-bottom: 32px;

        .left {
            padding: 50px;
            background-color: rgba(0, 0, 0, 0.334);
            border-bottom-right-radius: 40px;

            h3 {
                font-size: 25px;
                padding-bottom: 18px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.187);
                margin-bottom: 25px;
            }

            p {
                padding-bottom: 18px;
                font-size: 13px;
            }

            .reporter {
                padding: 15px 0 30px;
                font-weight: bold;
                font-size: 12px;

                img {
                    height: 18px;
                    margin-right: 15px;
                }

                .jurnal {
                    color: variables.$color-green;
                }
            }
        }
    }

    .right {
        width: 35%;
        margin-left: 5%;

        .card-wrapper {
            background-color: variables.$color-cream;
            text-align: center;
            padding: 30px 15px;

            h3 {
                font-size: 14px;
                margin-bottom: 4px;
            }

            p {
                font-size: 12px;
                line-height: 20px;
            }


        }

        .jurnalist {
            display: flex;
            align-items: center;
            font-size: 12px;
            padding: 5px 0px 20px;

            img {
                height: 20px;
                margin-right: 15px;
            }
        }

    }
}
</style>
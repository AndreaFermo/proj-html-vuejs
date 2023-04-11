<template>
    <div class="image-wrapper">
        <img src="../assets/images/hero-07-2x.jpg" alt="">
        <div class="image-filter">
        </div>
        <div class="container">
            <div class="logo-wrapper">LOGO</div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">My Blog</a></li>
                    <li><a href="#">Meetups</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact Me</a></li>
                    <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </nav>
            <div class="author">
                <h1 class="author-name">Damon Vaughn</h1>
                <p class="citation">Best-selling author and the most influential public intellectual in the western world
                    right
                    now.</p>
                <p class="source">- The New York Times</p>
            </div>
            <div class="ads">
                <div class="ads-container">
                    <div class="ads-in">
                        <div class="left">IMMAGINE</div>
                        <div class="right">
                            <h5>Latest Book Release</h5>
                            <h6>D.VAUGHN AUTOBIOGRAPHY</h6>
                            <p>Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum voutpat. Lorem
                                ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div class="buttons">
                        <BuyButton />
                        <BuyButton />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import BuyButton from './BuyButton.vue';
export default {
    name: 'PageHeader',
    components: {
        BuyButton,
    }
}
</script>
<style scoped lang="scss">
@use '../styles/partials/variables';

.image-wrapper {
    width: 1100px;
    margin: auto;
    position: relative;
    overflow-y: hidden;
    height: 450px;

    img {
        width: 100%;
        height: 500px;
        transform: translate(0px, -30px);
    }

    .image-filter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(0, 0, 0, 0), black);
    }


    .container {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;

        .logo-wrapper {
            height: 80px;
            width: 80px;
            background-color: pink;
            position: absolute;
            left: 100px;
            top: 20px;

        }

        nav {
            margin-right: 70px;

            ul {
                list-style: none;
                display: flex;
                justify-content: flex-end;

                li {
                    padding: 0px 10px;

                    a {
                        text-decoration: none;
                        color: variables.$color-white;
                        font-size: 12px;
                        padding-top: 20px;
                        display: block;
                        border-top: 3px solid rgba($color: #000000, $alpha: 0);

                        &:hover {
                            color: variables.$color-saffron;
                            border-top: 3px solid variables.$color-saffron;
                        }
                    }
                }
            }
        }

        .author {
            padding-top: 80px;
            padding-left: 140px;
            width: 580px;

            .author-name {
                font-family: 'Kristi', cursive;
                font-weight: 400;
                font-size: 54px;
                color: variables.$color-saffron;

            }

            .citation {
                color: variables.$color-white;
                font-size: 26px;
                line-height: 36px;
                font-family: 'DM Serif Display', serif;
            }

            .source {
                color: variables.$color-suva-gray;
                font-size: 14px;
                margin-top: 15px;
            }
        }

        .ads {
            height: 230px;
            width: 395px;
            background-color: white;
            position: absolute;
            right: 0;
            bottom: 0;

            .ads-container {
                background-color: pink;
                height: 92%;
                width: 92%;
                margin: 8% 0px 0px 8%;

                .ads-in {
                    height: 130px;
                    width: 100%;
                    display: flex;

                    .left {
                        width: 50%;
                    }

                    .right {
                        width: 50%;

                        h5 {
                            font-size: 16px;
                            margin: 10px 0px;
                        }

                        h6 {
                            color: variables.$color-saffron;
                            margin: 5px 0px 10px;
                        }

                        p {
                            font-size: 12px;
                        }
                    }

                }

                .buttons {
                    display: flex;
                    margin-top: 5px;
                    justify-content: center;

                    border-radius: 5px;

                    &:first-child {
                        border: 1px solid variables.$color-kappel-dark-vibrant;
                    }
                }
            }


        }


    }
}
</style>
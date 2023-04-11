<template>
    <div class="image-wrapper">
        <img class="bg-image" src="../assets/images/hero-07-2x.jpg" alt="author image">
        <div class="image-filter">
        </div>
        <div class="container">
            <div class="logo-wrapper"><img src="../assets/images/author-logo-round.png" alt="author logo" class="logo">
            </div>
            <nav>
                <ul>
                    <li v-for="element in navbarSelections"><a href="#"> {{ element }}</a></li>
                    <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </nav>
            <div class="author">
                <h1 class="author-name">Damon Vaughn</h1>
                <p class="citation">Best-selling author and the most influential public intellectual in the western world
                    right
                    now.</p>
                <p class="source">- The New York Times</p>.
                <div>
                    <button class="prev-button"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="next-button"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="side-squares">
                <div class="side-square"><i class="fa-solid fa-folder-open"></i><span> Demos</span></div>
                <div class="side-square"><span class="dollar">$</span><span class="price">39</span>
                    <p>On Sale</p>
                </div>
            </div>
            <div class="ads">
                <div class="ads-container">
                    <div class="ads-in">
                        <div class="left"></div>
                        <div class="right">
                            <h5>Latest Book Release</h5>
                            <h6>D.VAUGHN AUTOBIOGRAPHY</h6>
                            <p>Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum voutpat. Lorem
                                ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div class="buttons">
                        <a href="#"><i class="fa-brands fa-amazon"></i><span>Buy on Amazon</span></a>
                        <a href="#"><i class="fa-brands fa-apple"></i><span> Buy on AppStore</span></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PageHeader',
    props: {
        navbarSelections: Array
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

    .bg-image {
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
            height: 110px;
            width: 110px;
            position: absolute;
            left: 80px;
            top: 15px;

            .logo {
                height: 100%;
            }
        }

        nav {
            margin-right: 80px;

            ul {
                list-style: none;
                display: flex;
                justify-content: flex-end;

                li {
                    padding: 0px 9px;

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

        .side-squares {
            width: 40px;
            position: absolute;
            top: 80px;
            right: 5px;

            .side-square {
                width: 100%;
                aspect-ratio: 1;
                margin-bottom: 10px;
                background-color: variables.$color-white;
                font-size: 10px;
                border-radius: 3px;
                text-align: center;


                &:hover {
                    cursor: pointer;
                }

                i {
                    font-size: 16px;
                    margin: 4px 0px;
                    color: variables.$color-tundora;
                }

                .dollar {
                    display: inline-block;
                    transform: translate(0px, -10px);
                    top: 3px;
                    left: 3px;
                }

                .price {
                    font-size: 25px;
                }

                .dollar,
                .price {
                    color: variables.$color-light-green;
                }

                p {
                    font-size: 10px;
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

            .prev-button,
            .next-button {
                height: 30px;
                aspect-ratio: 1;
                background-color: variables.$color-black;
                color: white;
                border: none;
                margin-right: 3px;
                font-size: 10px;

                &:hover {
                    cursor: pointer;
                }
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

                height: 92%;
                width: 90%;
                margin: 10% 0px 0px 10%;
                padding-right: 35px;

                .ads-in {
                    width: 100%;
                    display: flex;

                    .left {
                        width: 50%;
                        height: 140px;
                        background-image: url(../assets/images/book-widget.png);
                        background-repeat: no-repeat;
                        background-size: contain;


                    }

                    .right {
                        width: 50%;

                        h5 {
                            font-size: 15px;
                            margin: 10px 0px;
                        }

                        h6 {
                            color: variables.$color-saffron;
                            margin: 5px 0px 10px;
                            font-size: 10px;
                        }

                        p {
                            font-size: 11px;
                            color: variables.$color-tundora;
                        }
                    }

                }

                .buttons {
                    display: flex;
                    margin-top: 5px;
                    justify-content: center;

                    a {
                        text-decoration: none;
                        color: variables.$color-black;
                        padding: 7px 0px;
                        display: block;
                        width: 50%;
                        text-align: center;
                        border: 1px solid variables.$color-kappel-dark-vibrant;
                        font-size: 12px;

                        span {
                            margin-left: 5px;
                        }
                    }

                    a:first-child {

                        border-bottom-left-radius: 5px;
                        border-top-left-radius: 5px;
                    }

                    a:nth-child(2) {

                        border-bottom-right-radius: 5px;
                        border-top-right-radius: 5px;
                    }
                }
            }


        }


    }
}
</style>
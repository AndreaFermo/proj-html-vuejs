<template>
    <div class="footer-container">
        <img src="../assets/images/author-logo-round-200x205.png" alt="">
        <div class="ultilityes-contaier">
            <div class="col">
                <h3>ABOUT ME</h3>
                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem it libero malesuada feugiat.
                    Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            </div>
            <div class="col">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li v-for="(element, index) in links" :key="index"><a href="#"><i class="fa-solid fa-angle-right"></i>{{
                        element }}</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>CONTACT INFO</h3>
                <ul class="contacts">
                    <li>63 E. Studebaker Street Bolingbrook, IL 60440</li>
                    <li>Phone: (800) 000-0000</li>
                    <li>Mobile: (800) 000-0000</li>
                    <li>Email: <a href="#" class="email">info@your-company.com</a></li>
                    <li>
                        <a href="#" v-for="(icon, index) in socialIcons" :key="index"><i
                                :class="generateIcon(icon)"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <p class="copyright"><i class="fa-regular fa-copyright"></i> Copyright 2012 - 2020 | Avada Theme by <a
                href="#">ThemeFusion</a> | All
            Rights Reserved | Powered by <a href="#">WordPress</a></p>
    </div>
</template>

<script>
export default {
    name: 'PageFooter',
    props: {
        links: Array,
        socialIcons: Array
    },

    methods: {
        generateIcon(element) {
            let faIcon = 'fa-brands fa-'
            return faIcon += element
        }
    }

}
</script>
<style scoped lang="scss">
@use '../styles/partials/variables';

.footer-container {
    background-image: url(../assets/images/footer-3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-position-y: 0px;
    height: 300px;
    width: 1100px;
    margin: auto;
    position: relative;



    img {
        position: absolute;
        width: 90px;
        left: 50px;
        top: 50px;
    }

    .ultilityes-contaier {
        color: variables.$color-white;
        display: flex;
        padding: 50px 50px 0px 200px;

        .col {
            width: calc(100% / 3);

            h3 {
                font-size: 12px;
                padding-bottom: 10px;
            }

            p {
                font-size: 10px;
                padding: 10px 100px 10px 0px;
                line-height: 20px;
                color: variables.$color-pewter;
            }

            ul {
                list-style: none;
                font-size: 10px;

                &.contacts {
                    color: variables.$color-pewter;

                    i {
                        color: variables.$color-pewter;
                    }
                }

                li {
                    padding: 6px 0px;

                    a {
                        color: variables.$color-white;
                        text-decoration: none;

                        .fa-brands {
                            padding-top: 20px;
                        }

                        &:hover {
                            color: variables.$color-saffron;
                        }

                        i {
                            padding-right: 15px;

                            &:hover {
                                color: variables.$color-saffron;
                            }
                        }

                    }
                }
            }
        }
    }

    .copyright {
        text-align: center;
        padding-top: 60px;
        font-size: 10px;
        color: variables.$color-pewter;

        a {
            text-decoration: none;
            color: variables.$color-white;

            &:hover {
                color: variables.$color-saffron;
            }
        }
    }
}
</style>
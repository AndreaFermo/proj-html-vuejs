<template>
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
                <li><a href="#">C</a></li>

            </ul>
        </nav>
        <div class="jumbotron"></div>
        <div class="jumbotron-right-section"></div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader'
}
</script>
<style scoped lang="scss">
@use '../styles/partials/variables';

.container {
    height: 450px;
    width: 1100px;
    margin: auto;
    background-image: url(../assets/images/hero-07-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

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
                    border-top: 3px solid variables.$color-saffron;
                }
            }
        }
    }
}
</style>
<template>
    <div class="articles-container">
        <div class="articles-top">
            <div>
                <h3>Recent Articles</h3>
                <p>READ THE LATEST ENTRIES</p>
            </div>
            <a href="#">All Articlses</a>
        </div>
        <div class="articles-bot">
            <div class="left">
                <div class="card">
                    <img src="../../assets/images/20-Tips-600x353.jpg" alt="">
                    <h5>20 Creativity Tips</h5>
                    <p>By admin | October 24th, 2019 | Categories: Events, Tips & tricks</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                        neque, auctor sit amet aliquam vel, ullamcorper sit amet.</p>
                </div>
            </div>
            <div class="right">
                <div class="card">
                    <img src="../../assets/images/thumb-13-2x-320x202.jpg" alt="">
                    <h5>What's On Your Booklist?</h5>
                    <p>October 24th, 2019 | 0 comments</p>
                </div>
                <div class="card">
                    <img src="../../assets/images/thumb-08-2x-320x202.jpg" alt="">
                    <h5>Instanbul Travel Guide</h5>
                    <p>October 24th, 2019 | 0 comments</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyRecentArticles'
}
</script>
<style scoped lang="scss">
@use '../../styles/partials/variables';

.articles-container {
    width: 900px;
    margin: auto;
    padding-bottom: 50px;

    .articles-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding-top: 50px;

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
            padding: 10px 50px;
            font-size: 10px;
            border-radius: 5px;

            &:hover {
                background-color: variables.$color-saffron-hover;
            }
        }
    }

    .articles-bot {
        width: 100%;
        display: flex;

        .left {
            width: 65%;
            background-color: variables.$color-white;
            padding: 30px;

            .card {
                img {
                    padding-bottom: 20px;
                }

                p {
                    padding-bottom: 10px;
                }
            }
        }

        .right {
            width: 30%;
            background-color: variables.$color-white;
            padding: 20px;
            margin-left: 5%;

            .card {
                img {
                    padding-bottom: 5px;
                }

                p {
                    padding-bottom: 30px;
                }

            }
        }

        .card {
            img {
                width: 100%;

            }

            h5 {
                font-size: 20px;
                font-weight: 400;
                padding-bottom: 5px;
            }

            p {
                font-size: 14px;
                width: 95%;
            }
        }
    }
}
</style>
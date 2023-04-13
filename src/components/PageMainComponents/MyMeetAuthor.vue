<template>
    <h2>More About Damon Vaughn</h2>
    <p>Damon Vaughn is a professor of psychology at the Univesity of Toronto, a clinical psychologist and the author of the
        multi-million copy bestseller "The story of my life."</p>
    <a href="#">Meet the Author</a>
</template>
<script>
export default {
    neme: 'MyMeetAuthor',

}
</script>
<style scoped lang="scss">
@use '../../styles/partials/variables';

h2 {
    font-family: variables.$font-kristi;
    color: variables.$color-saffron;
    font-size: 52px;
    font-weight: 400;
}

p {
    font-size: 20px;
    width: 40%;
    line-height: 30px;
    margin: 10px auto 35px;
}

a {
    text-decoration: none;
    font-size: 10px;
    color: variables.$color-white;
    background-color: variables.$color-green;
    padding: 10px 25px;
    border-radius: 5px;

    &:hover {
        background-color: variables.$color-green-hover;
    }
}
</style>
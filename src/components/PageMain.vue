<template>
    <section id="meet-author">
        <MyMeetAuthor />
    </section>

    <section id="platforms">
        <MyPlatforms />
    </section>

    <section id="audiobook">
        <MyAudiobook />
    </section>

    <section id="critics">
        <MyCritics />
    </section>

    <section id="events">
        <MyEvents />
    </section>

    <section id="newsletter">
        <MyNewsletter />
    </section>

    <section id="author-info"> <!-- simile alla section events-->

    </section>

    <section id="recent-articles"> <!-- simile alla section critics-->

    </section>
</template>

<script>
import MyMeetAuthor from './PageMainComponents/MyMeetAuthor.vue';
import MyPlatforms from './PageMainComponents/MyPlatforms.vue';
import MyAudiobook from './PageMainComponents/MyAudiobook.vue';
import MyCritics from './PageMainComponents/MyCritics.vue';
import MyEvents from './PageMainComponents/MyEvents.vue';
import MyNewsletter from './PageMainComponents/MyNewsletter.vue';
export default {
    name: 'PageMain',
    components: {
        MyMeetAuthor,
        MyPlatforms,
        MyAudiobook,
        MyCritics,
        MyEvents,
        MyNewsletter
    }
}
</script>
<style scoped lang="scss">
@use '../styles/partials/variables';

#meet-author {
    text-align: center;
    margin-top: 50px;
}

#platforms {
    background-color: variables.$color-cream;
    width: 1100px;
    margin: 80px auto 0px;
}

#audiobook {
    width: 1100px;
    margin: auto;
}

#critics {
    width: 750px;
    margin: auto;
    margin-bottom: 50px;
}

#events {
    width: 1100px;
    margin: auto;
    background-color: variables.$color-cream;
    text-align: center;
}

#newsletter {
    width: 1100px;
    margin: auto;
}
</style>


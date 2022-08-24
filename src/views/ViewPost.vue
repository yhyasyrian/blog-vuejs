<template>
    <section class="view-post container">
        <div class="view-post">
            <h2 class="title">{{ title }}</h2>
            <div class="img">
                <img :src="img" :alt="title" />
            </div>
            <div class="dis">{{ desc }}</div>
        </div>
    </section>
</template>
<script>
import Posts from "../posts.json";
export default {
    name: "ViewPost",
    data() {
        return {
            title: Posts[this.$route.params.id - 1].title,
            img: Posts[this.$route.params.id - 1].img,
            link: Posts[this.$route.params.id - 1].link,
            desc: Posts[this.$route.params.id - 1].des,
        };
    },
};
</script>

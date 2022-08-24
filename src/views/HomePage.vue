<template>
    <section class="welcome">
        <h2>Hello In Blog {{ Title }}</h2>
        <span class="icon" @click="scrolar"><i class="fa-solid fa-angles-down"></i></span>
    </section>
    <view-posts :posts="Posts"></view-posts>
    <about-me :des="des" :links="links" />
</template>
<script>
import ViewPosts from "../layouts/ViewPosts.vue";
import AboutMe from "./AboutMe.vue";
import Posts from "../posts.json";
export default {
    name: "HomePage",
    components: { ViewPosts, AboutMe },
    props: ["Title", "des", "links"],
    data() {
        return { Posts };
    },
    methods: {
        scrolar() {
            let postsOffest = document.getElementById("posts").offsetTop;
            window.scrollTo({
                behavior: "smooth",
                top: postsOffest,
            });
        },
    },
};
</script>

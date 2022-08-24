<template>
    <section id="posts" v-if="posts">
        <div class="container">
            <div class="post" v-for="post in posts" :key="post">
                <img :src="post.img" alt="post.title" />
                <a :href="post.link"
                    ><h2>{{ post.title }}</h2></a
                >
                <p>{{ post.des.substring(0, 65) }}...</p>
                <div class="fallow">
                    <button-click :link="post.link" text="Fallow Post"></button-click>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ButtonClick from "../components/ButtonClick.vue";
export default {
    name: "ViewPosts",
    props: ["posts"],
    components: {
        ButtonClick,
    },
};
</script>

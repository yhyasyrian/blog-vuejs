<template>
    <view-posts :posts="Posts"></view-posts>
</template>
<script>
export default {
    name: "HomePage",
    components: { ViewPosts },
    data() {
        return {
            Posts,
        };
    },
};
import ViewPosts from "../layouts/ViewPosts.vue";
import Posts from "../posts.json";
</script>

<template>
    <router-link :to="link" class="btn">{{ text }}</router-link>
</template>
<script>
export default {
    name: "ButtonClick",
    props: {
        link: {
            type: String,
            default() {
                return "/blog-vuejs/";
            },
        },
        text: {
            type: String,
            default() {
                return "Click Here";
            },
        },
    },
};
// ['link','text']
</script>

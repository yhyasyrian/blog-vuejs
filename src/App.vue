<template>
    <page-header :Title="Title" :Links="Links"></page-header>
    <router-view />
    <font-awesome-icon />
</template>
<script>
import PageHeader from "./components/PageHeader";
import { Title, Links } from "./data.json";
// Start Font Awesome
import FontAwesomeIcon from "./components/icon.js";
// End Font Awesome
export default {
    name: "App",
    components: {
        PageHeader,
        FontAwesomeIcon,
    },
    data() {
        return {
            Title,
            Links,
        };
    },
};
</script>
<style>
@import "./css/style.min.css";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600;1,700;1,800&display=swap");
</style>

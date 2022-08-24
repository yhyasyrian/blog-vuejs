<template>
    <header id="header">
        <main>
            <h1>{{ Title }}</h1>
            <span class="bars" @click="viewMenu"
                ><i class="fa-solid fa-bars fa-2x"></i
            ></span>
            <nav>
                <router-link
                    v-for="Link in Links"
                    :key="Link"
                    :to="Link.url"
                    ref="follow"
                    >{{ Link.title }}</router-link
                >
            </nav>
        </main>
    </header>
</template>
<script>
export default {
    name: "PageHeader",
    props: ["Title", "Links"],
    methods: {
        viewMenu() {
            document.querySelector("#header nav").classList.toggle("active");
        },
    },
};
</script>

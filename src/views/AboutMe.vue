<template>
    <secation id="AboutMe" v-if="des">
        <h3>About Me</h3>
        <p>{{ des ?? "Not Foudnd Description" }}</p>
        <nav v-if="links">
            <a
                v-for="link in links"
                :key="link"
                :href="link.href"
                v-html="link.icon"
                target="_black"
                ref="noref"
            ></a>
        </nav>
    </secation>
</template>

<script>
export default {
    name: "AboutMe",
    props: ["des", "links"],
};
</script>

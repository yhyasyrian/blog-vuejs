import { createRouter, createWebHistory} from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutMe from "../views/AboutMe.vue";
import ViewPosts from "../views/ViewPosts.vue";
import ViewPost from "../views/ViewPost.vue";
import { Title, LinkAbout } from "../data.json";
const routes = [
    {
        path:'/blog-vuejs/dist/',
        name:'Home',
        component:HomePage,
        props:{
            Title,
            des:"I have two years experience in php, I am good at doing electronic payment systems, converting HTML5 templates to WordPress, and the ability to do Web scraping using PHP. I started out as a Telegram bot programmer until I became a Back-End Devloper.",
            links:LinkAbout
        }
    },{
        path:'/blog-vuejs/dist/AboutMe',
        name:"AboutMe",
        component:AboutMe,
        props:{
            des:"I have two years experience in php, I am good at doing electronic payment systems, converting HTML5 templates to WordPress, and the ability to do Web scraping using PHP. I started out as a Telegram bot programmer until I became a Back-End Devloper.",
            links:LinkAbout
        }
    },{
        path:'/blog-vuejs/dist/Blog',
        name:"Blog",
        component:ViewPosts
    },
    {
        path:'/blog-vuejs/dist/Post/:id',
        component:ViewPost
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router
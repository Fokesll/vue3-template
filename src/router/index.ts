import { createRouter, createWebHashHistory  } from "vue-router";



const routes = [
    {name:'home',path:'/',component: () => import ('../view/home.vue')}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes

})

// router.beforeEach((to,from,next) => {
    
//     next();
// });

// router.afterEach((to,from,next) => {

// });

export default router;
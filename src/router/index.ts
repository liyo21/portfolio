import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BlogPostView from '@/views/BlogPostView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Dev Eliyonai Molero | Inicio',
        }
    },
    {
        path: '/project/:slug',
        name: 'project-detail',
        meta: {
            title: 'Dev Eliyonai Molero | Project',
        },
        component: BlogPostView
    }
];

const router = createRouter({
    history: createWebHistory('/portfolio/'),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0 };
    },
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string || 'Dev Eliyonai Molero';

  const description = document.querySelector('meta[name="description"]')

  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description as string)
  }

  next()
})

export default router;
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import OnboardingPage from '../views/OnboardingPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/onboarding'
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: OnboardingPage
  },
  // Sementara, supaya tombol "Lewati" dan tombol terakhir tidak error.
  // Ganti dengan halaman login Anda nanti.
  {
    path: '/login',
    name: 'Login',
    component: OnboardingPage
  },
  // Opsional: tetap simpan halaman home bawaan
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../views/HomePage.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
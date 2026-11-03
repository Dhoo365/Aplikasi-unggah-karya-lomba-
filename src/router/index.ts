import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import OnboardingPage from '../views/OnboardingPage.vue'
import OnBoardingSlide2 from '@/views/OnBoardingSlide2.vue';
import Beranda from '@/views/admin/Beranda.vue';
import Peserta from '@/views/admin/Peserta.vue';
import Juri from '@/views/admin/Juri.vue';
import Kriteria from '@/views/admin/Kriteria.vue';
import Talenta from '@/views/admin/Talenta.vue';

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
  {
    path: '/onboarding2',
    name: 'OnboardingSlide2',
    component: OnBoardingSlide2
  },
  {
    path: '/beranda',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/peserta',
    name: 'Peserta',
    component: Peserta
  },
  {
    path: '/juri',
    name: 'Juri',
    component: Juri
  },
  {
    path: '/kriteria',
    name: 'Kriteria',
    component: Kriteria
  },
  {
    path: '/talenta',
    name: 'Talenta',
    component: Talenta
  },

  // Slide 3: aktifkan setelah file-nya dibuat
  // {
  //   path: '/onboarding/3',
  //   name: 'OnboardingSlide3',
  //   component: () => import('../views/OnboardingSlide3.vue')
  // },

  // Sementara, supaya tombol "Lewati" dan tombol terakhir tidak error.
  {
    path: '/login',
    name: 'Login',
    component: OnboardingPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
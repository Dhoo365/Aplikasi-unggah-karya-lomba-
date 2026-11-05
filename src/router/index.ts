import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import OnboardingPage from '../views/OnboardingPage.vue'
import OnBoardingSlide2 from '@/views/OnBoardingSlide2.vue';
import AdminBeranda from '@/views/admin/AdminBeranda.vue';
import AdminPeserta from '@/views/admin/AdminPeserta.vue';
import AdminJuri from '@/views/admin/AdminJuri.vue';
import AdminKriteria from '@/views/admin/AdminKriteria.vue';
import AdminTalenta from '@/views/admin/AdminTalenta.vue';

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
    component: AdminBeranda
  },
  {
    path: '/peserta',
    name: 'Peserta',
    component: AdminPeserta
  },
  {
    path: '/juri',
    name: 'Juri',
    component: AdminJuri
  },
  {
    path: '/kriteria',
    name: 'Kriteria',
    component: AdminKriteria
  },
  {
    path: '/talenta',
    name: 'Talenta',
    component: AdminTalenta
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import HistoryPage from './pages/HistoryPage.vue'
import NotificationPage from './pages/NotificationPage.vue'
import QuizPage from './pages/QuizPage.vue'
import RatingPage from './pages/RatingPage.vue'
import SettingsPage from './pages/SettingsPage.vue'
import { pages } from './pages/index'

const routes = [
  { path: '/home', component: pages.HomePage, alias: '/' },
  { path: '/history', component: pages.HistoryPage },
  { path: '/settings', component: pages.SettingsPage },
  { path: '/rating', component: pages.RatingPage },
  { path: '/quiz', component: pages.QuizPage },
  { path: '/notification', component: pages.NotificationPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

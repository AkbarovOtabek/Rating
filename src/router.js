import { createRouter, createWebHistory } from 'vue-router'
import { pages } from './pages/index'

const routes = [
  { path: '/home', component: pages.HomePage, alias: '/' },
  { path: '/history', component: pages.HistoryPage },
  { path: '/settings', component: pages.SettingsPage },
  { path: '/rating', component: pages.RatingPage },
  { path: '/quiz', component: pages.QuizPage },
  { path: '/notification', component: pages.NotificationPage },
  { path: '/login', component: pages.LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

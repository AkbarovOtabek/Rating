import { createRouter, createWebHistory } from 'vue-router'
import { pages } from './pages/index'

const routes = [
  { path: '/login', component: pages.LoginPage },
  { path: '/home', component: pages.HomePage, alias: '/' },
  { path: '/history', component: pages.HistoryPage },
  { path: '/rating', component: pages.RatingPage },
  { path: '/quiz', component: pages.QuizPage },
  { path: '/notification', component: pages.NotificationPage },
  {
    path: '/home/lastPassed/:id',
    component: pages.LastPassedQuestons,
    name: 'lastPassedQuestions'
  },
  {
    path: '/history/lastQuarts/:id',
    component: pages.LastQuantsHistory,
    name: 'lastQuantsHistory'
  },
  {
    path: '/history/lastQuantsHistory/theme/:id',
    component: pages.ThemeQuestions,
    name: 'themeQuestions'
  },
  {
    path: '/quiz/questionType/:id',
    component: pages.QuestionType,
    name: 'questionType'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

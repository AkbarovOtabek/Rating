<script>
import { API } from '../questions'

export default {
  data() {
    return {
      theme: {}
    }
  },
  mounted() {
    const themeId = this.$route.params.id
    const theme = this.findThemeById(themeId)

    if (theme) {
      this.theme = theme
    } else {
      console.error('Theme with the given id not found.')
    }
  },
  methods: {
    findThemeById(id) {
      for (const yearData of API) {
        for (const quant of yearData.quants) {
          const theme = quant.themes.find((theme) => theme.id === Number(id))
          if (theme) {
            return theme
          }
        }
      }
      return null
    }
  }
}
</script>
<template>
  <div class="theme-questions">
    <h2>Вопросы по теме "{{ theme.name }}"</h2>
    <div v-for="(question, index) in theme.questions" :key="index" class="question-item">
      <p>Вопрос №{{ question.count }}</p>
      <h3>{{ question.question }}</h3>
      <p>Ответ: {{ question.checkbox || 'Нет ответа' }}</p>
      <p>Комментарий: {{ question.clientAnswer || 'Нет комментариев' }}</p>
      <span>Файл: {{ question.attachedFile || 'Файл не прикреплен' }}</span>
    </div>
  </div>
</template>
<style scoped>
.questionType {
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.question-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 30px;
}
</style>

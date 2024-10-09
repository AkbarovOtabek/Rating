<script>
import { latestYearAndQuant } from '../API.js'
export default {
  props: {
    ModeisActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      themes: latestYearAndQuant
    }
  },
  methods: {
    formatDeadline(date) {
      const deadline = new Date(date)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return deadline.toLocaleDateString(undefined, options)
    }
  }
}
</script>

<template>
  <div class="quiz" :class="{ darktheme: !ModeisActive }">
    <div class="cards">
      <h2>{{ $t('Quiz.Title', { year: themes.year, quant: themes.quant }) }}</h2>
      <div class="quiz-card-wrapper">
        <router-link
          class="card"
          :to="{ name: 'questionType', params: { id: questionTheme.id } }"
          :ModeisActive="ModeisActive"
          v-for="questionTheme in themes.themes"
          :key="questionTheme.id"
        >
          <div class="card-time">
            <p>{{ formatDeadline(questionTheme.data) }}</p>
          </div>
          <div class="procent-done-works">
            <p>оценка до {{ questionTheme.mark }}</p>
          </div>
          <img class="card-img" :src="questionTheme.image" alt="Card Image" />
          <div class="card-text">
            <h4>{{ questionTheme.theme }}</h4>
            <p>{{ questionTheme.description || 'Описание отсутствует' }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.quiz {
  border-radius: 15px;
  background-color: var(--sidebar-color);
  width: 98%;
  margin-top: 40px;
}
.quiz h2 {
  padding: 20px 0px 0px 20px;
  margin-bottom: 23px;
  font-size: 24px;
  font-weight: 600;
}

.quiz .cards {
  display: flex;
  flex-direction: column;
  padding: 23px;
}

.quiz-card-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  display: inline-block;
  cursor: pointer;
  position: relative;
  width: 442px;
  height: 346px;
  border-radius: 10px;
  border: 1px solid #7c8db5;
  text-align: center;
  overflow: hidden;
  text-align: start;
  font-size: 16px;
}
.card-text {
  padding: 15px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.671);
  border-radius: 5px;
  width: 70%;
  color: white;
}
.card-time {
  position: absolute;
  background: #ededed;
  color: blue;
  padding: 8px;
  border-radius: 12px;
  left: 10px;
  top: 10px;
}
.procent-done-works {
  position: absolute;
  background: #ededed;
  color: blue;
  padding: 8px;
  border-radius: 12px;
  right: 10px;
  top: 10px;
}

.quiz.darktheme {
  background: var(--primary-color-light-dark);
  color: var(--primary-color-light);
}
</style>

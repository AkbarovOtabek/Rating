<script>
import { API } from '../questions'
export default {
  data() {
    return {
      themes: API
    }
  },
  methods: {
    filterToTheLatest() {
      let latestItem = this.themes.reduce((latest, current) => {
        if (
          !latest ||
          current.year > latest.year ||
          (current.year === latest.year && current.quants > latest.quants)
        ) {
          return current
        }
        return latest
      }, null)

      return latestItem ? [latestItem] : []
    }
  }
}
</script>

<template>
  <div class="quiz">
    <div class="cards" v-for="theme in filterToTheLatest()" :key="theme.year + '-' + theme.quants">
      <h2>Вопросы для проверки безопасности {{ theme.year }} за {{ theme.quants }} квартал</h2>
      <div class="quiz-card-wrapper">
        <a
          class="card"
          v-for="questionTheme in theme.themes"
          :key="questionTheme.id"
          :href="`/quiz/questionType/${questionTheme.id}`"
        >
          <div class="card-time">
            <p>{{ questionTheme.dateline }} дней</p>
          </div>
          <img class="card-img" src="../assets/icons/123.png" alt="" />
          <div class="card-text">
            <h4>{{ questionTheme.name }}</h4>
            <p>{{ questionTheme.description || 'Описание отсутствует' }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.quiz {
  border-radius: 15px;
  background-color: var(--sidebar-color);
  width: 100%;
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
  padding: 34px;
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
</style>

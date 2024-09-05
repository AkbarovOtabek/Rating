<script>
import { latestYearAndQuant } from '../questions'
export default {
  data() {
    return {
      themes: latestYearAndQuant,
      timeForDeadline: '',
      procentToComplate: null
    }
  },
  mounted() {
    const currentDate = new Date()

    const datelineStr = this.themes.themes[0].dateline
    const formattedDateStr = datelineStr.replace(/:/g, '-')
    const datelineDate = new Date(formattedDateStr)

    const diffInMs = datelineDate - currentDate
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    const diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60))

    this.timeForDeadline = `${diffInDays}д : ${diffInHours}ч : ${diffInMinutes}м`
  }
}
</script>

<template>
  <div class="quiz">
    <div class="cards">
      <h2>Вопросы для проверки безопасности {{ themes.year }} за {{ themes.quant }} квартал</h2>
      <div class="quiz-card-wrapper">
        <a
          class="card"
          v-for="questionTheme in themes.themes"
          :key="questionTheme.id"
          :href="`/quiz/questionType/${questionTheme.id}`"
        >
          <div class="card-time">
            <p>{{ timeForDeadline }}</p>
          </div>
          <div class="procent-done-works">
            <p>выполнен на 99%</p>
          </div>
          <img class="card-img" :src="questionTheme.image" alt="" />
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
.procent-done-works {
  position: absolute;
  background: #ededed;
  color: blue;
  padding: 8px;
  border-radius: 12px;
  right: 10px;
  top: 10px;
}
</style>

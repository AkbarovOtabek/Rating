<script>
import { API } from '../questions'

export default {
  data() {
    return {
      themes: {}
    }
  },
  mounted() {
    const quantsId = this.$route.params.id
    const quant = this.findQuantById(quantsId)

    if (quant) {
      this.themes = quant
    } else {
      console.error('Quant with the given id not found.')
    }
  },
  methods: {
    findQuantById(id) {
      for (const yearData of API) {
        const quant = yearData.quants.find((quant) => quant.id === Number(id))
        if (quant) {
          return quant
        }
      }
      return null
    }
  }
}
</script>

<template>
  <div class="quiz">
    <div class="cards">
      <h2>Темы для проверки безопасности {{ themes.year }} за {{ themes.quant }} квартал</h2>
      <div class="quiz-card-wrapper">
        <a
          class="card"
          v-for="questionTheme in themes.themes"
          :key="questionTheme.id"
          :href="`/history/lastQuantsHistory/theme/${questionTheme.id}`"
        >
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
  width: 98%;
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
.card:hover::before {
  opacity: 0;
}
.card::before {
  transition: var(--tran-03);
  position: absolute;
  content: '';
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #868686ad;
}
.card-text {
  z-index: 2;
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
.procent-done-works {
  z-index: 2;
  position: absolute;
  background: #ededed;
  color: blue;
  padding: 8px;
  border-radius: 12px;
  right: 10px;
  top: 10px;
}
</style>

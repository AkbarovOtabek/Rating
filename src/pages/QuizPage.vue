<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      themesForQuestions: [
        { time: 15, name: 'тема 1', discription: 'документация на счет безопасноти ', id: 1 },
        { time: 15, name: 'тема 2', discription: 'документация на счет безопасноти ', id: 2 },
        { time: 15, name: 'тема 3', discription: 'документация на счет безопасноти ', id: 3 },
        { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 4 },
        { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 5 },
        { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 6 },
        { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 7 },
        { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 8 }
      ]
    }
  }
}
</script>

<template>
  <div class="quiz">
    <h2>Вопросы для проверки безопасности</h2>
    <div class="cards">
      <Card v-for="theme in themesForQuestions" :key="theme.id" :theme="theme" />
    </div>
  </div>
</template>
<style scoped>
.quiz {
  border-radius: 15px;
  background-color: var(--sidebar-color);
  width: 100%;
  margin-top: 100px;
}
.quiz h2 {
  padding: 20px 0px 0px 20px;
  margin-bottom: 0px;
}
.quiz .cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  min-height: 523px;
  padding: 34px;
}
</style>

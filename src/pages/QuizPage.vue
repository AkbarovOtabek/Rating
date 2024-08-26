<script>
export default {
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
      <a
        class="card"
        :href="`/quiz/questionType/${theme.id}`"
        v-for="theme in themesForQuestions"
        :key="theme.id"
      >
        <div class="card-time">
          <p>{{ theme.time }} min</p>
        </div>
        <img class="card-img" src="../assets/icons/123.png" alt="" />
        <div class="card-text">
          <h4>{{ theme.name }}</h4>
          <p>{{ theme.discription }}</p>
        </div>
      </a>
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

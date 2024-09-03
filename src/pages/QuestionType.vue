<script>
import AlertWindow from '@/components/AlertWindow.vue'

export default {
  components: { AlertWindow },
  data() {
    return {
      startButton: false
    }
  },
  methods: {
    changeFinishButton() {
      this.startButton = !this.startButton
    }
  }
}
</script>

<template>
  <div class="questionType-wrapper">
    <h3 class="questionType-header">Текущий опрос</h3>
    <div class="questionType">
      <img src="../assets/icons/123.png" alt="" />
      <div class="questionType_right">
        <div class="timer_of_date">
          <div class="timer-wrapper-for-date">
            <p>Дата добавления:</p>
            <p>28.08.2024</p>
          </div>
          <div class="timer-wrapper-for-date">
            <p>Время прохождения:</p>
            <p>14 дней</p>
          </div>
          <div class="timer-wrapper-for-date">
            <p>Количество вопросов:</p>
            <p>10</p>
          </div>
          <div class="timer-wrapper-for-date">
            <p>Баллы за опросник:</p>
            <p>10</p>
          </div>
        </div>
        <button type="submit" @click="changeFinishButton">Начать опрос</button>
      </div>
    </div>
    <div class="questionType-down">
      <h3>Название опросника</h3>
      <p>
        One of the most efficient ways to protect against cyber attacks and all types of data
        breaches is to train your employees on cyber attack prevention and
      </p>
      <p>
        The quiz consists of questions. To be successful with the quizzes, it’s important to
        conversant with the topic by paying attention to the short video
      </p>
      <p>To start, click the "Start" button. When finished, click the "Submit " button.</p>
    </div>
    <AlertWindow
      v-show="startButton"
      :changeFinishButton="changeFinishButton"
      :startButton="startButton"
    />
  </div>
</template>

<style scoped>
.questionType-wrapper {
  overflow: hidden;
  position: absolute;
  padding: 30px;
  width: 100%;
  border-radius: 17px;
  background-color: var(--sidebar-color);
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
.questionType-wrapper .questionType-header {
  font-size: 25px;
  color: var(--primary-color);
}
.questionType {
  margin-top: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 24px;
}
.questionType img {
  width: 780px;
  height: 420px;
  border-radius: 12px;
}
.questionType_right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.questionType_right button {
  width: 212px;
  height: 64px;
  font-size: 24px;
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--sidebar-color);
  background-color: var(--primary-color);
  cursor: pointer;
  transition: var(--tran-03);
}
.questionType_right button:hover {
  color: var(--primary-color);
  background-color: transparent;
  border: 1px solid var(--primary-color);
}
.timer_of_date {
  margin-left: 41px;
  display: flex;
  flex-direction: column;
  gap: 37px;
  font-size: 20px;
}
.timer-wrapper-for-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
}
.questionType-down {
  width: 780px;
}
.questionType-down h3 {
  font-size: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
  margin-bottom: 22px;
}
.questionType-down p {
  margin-bottom: 24px;
}
</style>

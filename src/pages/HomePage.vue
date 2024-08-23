<script>
export default {
  data() {
    return {
      quantityQuestions: 80,
      answered: 75,
      remainQuestions: 5,
      rating: 10
    }
  }
}
</script>

<template>
  <div class="home-content">
    <div class="statistics-bar">
      <div class="profile-statistics">
        <div>
          <h3>{{ this.quantityQuestions }}</h3>
          <span><img src="../assets/icons/totalIconQuestions.png" alt="" /></span>
        </div>
        <p>Количество Вопросов</p>
      </div>
      <div class="profile-statistics">
        <div>
          <h3>{{ this.answered }}</h3>
          <span><img src="../assets/icons/totalIconAnswered.png" alt="" /></span>
        </div>
        <p>Количество ответов</p>
      </div>
      <div class="profile-statistics">
        <div>
          <h3>{{ this.remainQuestions }}</h3>
          <span><img src="../assets/icons/totalIconRemain.png" alt="" /></span>
        </div>
        <p>Количество оставшихся</p>
      </div>
      <div class="profile-statistics">
        <div>
          <h3>{{ this.rating }}</h3>
          <span><img src="../assets/icons/totalIconRating.png" alt="" /></span>
        </div>
        <p>Рейтинг по безопасности</p>
      </div>
      <div class="border-line1"></div>
      <div class="border-line2"></div>
      <div class="border-line3"></div>
    </div>
    <div class="statistics-graphic">
      <div class="statistics-graphic-left">
        <h3>История изменения положения</h3>
        <ul>
          <li>прош</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="statistics-graphic-right"></div>
    </div>
    <div class="history-to-change"></div>
  </div>
</template>
<style scoped>
.statistics-bar {
  position: relative;
  margin-top: 40px;
  border-radius: 12px;
  background: var(--sidebar-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 142px;
}
.profile-statistics {
  flex-direction: column;
  display: flex;
  width: 240px;
  height: 100px;
}
.border-line1,
.border-line2,
.border-line3 {
  position: absolute;
  border-right: 1px solid #e6edff;
  height: 75%;
}
.border-line1 {
  left: 25%;
}
.border-line2 {
  left: 50%;
}
.border-line3 {
  left: 75%;
}
.profile-statistics > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.profile-statistics span {
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
.profile-statistics span img {
  width: 24px;
  height: 24px;
}
.profile-statistics > div h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 44px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
.profile-statistics p {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
</style>

<script>
import ChartsHomePage from '@/components/ChartsHomePage.vue'
export default {
  components: { ChartsHomePage },
  data() {
    return {
      quantityQuestions: 80,
      answered: 74,
      rating: 10,
      progress: 0,
      PersonInfo: [
        {
          name: 'Акбаров Отабек Рустам угли',
          position: 'главный эксперт',
          login: 'o.akbarov@cbu',
          status: false,
          userStatus: 'Пользователь',
          dateOfRegistration: '09.04.2024'
        },
        {
          name: 'Акбаров Отабек Рустам угли',
          position: 'главный эксперт',
          login: 'o.akbarov@cbu',
          status: true,
          userStatus: 'Пользователь',
          dateOfRegistration: '09.04.2024'
        },
        {
          name: 'Акбаров Отабек Рустам угли',
          position: 'главный эксперт',
          login: 'o.akbarov@cbu',
          status: true,
          userStatus: 'Пользователь',
          dateOfRegistration: '09.04.2024'
        },
        {
          name: 'Акбаров Отабек Рустам угли',
          position: 'главный эксперт',
          login: 'o.akbarov@cbu',
          status: false,
          userStatus: 'Пользователь',
          dateOfRegistration: '09.04.2024'
        }
      ]
    }
  },
  computed: {
    progressPercentage() {
      return ((100 * this.answered) / this.quantityQuestions).toFixed(1)
    },
    remainQuestions() {
      return this.quantityQuestions - this.answered
    },
    displayedQuestions() {
      return this.filteredQuestions.slice(0, this.visibleQuestions)
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
          <h3>{{ remainQuestions }}</h3>
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
        <ChartsHomePage />
      </div>
      <div class="statistics-graphic-right">
        <div
          class="progress-bar"
          :style="{
            background: `conic-gradient(var(--primary-color) ${progressPercentage * 3.6}deg, #e6e5e5 0deg)`
          }"
        >
          <span class="progress-value">{{ progressPercentage }}%</span>
        </div>
        <span class="progress-text">Статус выполненых задач</span>
      </div>
    </div>
    <div class="history-to-change">
      <div class="last-passed-questions">
        <div class="employees">
          <div class="employees-body">
            <h3 class="employees-header">Сотрудники организации</h3>
            <table class="employees-table">
              <tr class="employees-table-header">
                <th>Ф.И.О</th>
                <th>Должность</th>
                <th>Логин</th>
                <th>Статус</th>
                <th>Группа</th>
                <th>Дата регистрации</th>
              </tr>
              <tr class="employees-table-body" v-for="person in PersonInfo" :key="person">
                <td>{{ person.name }}</td>
                <td>{{ person.position }}</td>
                <td>{{ person.login }}</td>
                <td :class="{ statusBlocked: !person.status }">
                  {{ person.status ? 'активный' : 'пасивный' }}
                </td>
                <td>{{ person.userStatus }}</td>
                <td>{{ person.dateOfRegistration }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.statistics-bar {
  border: 1px solid #e6edff;
  position: relative;
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
.statistics-graphic {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.statistics-graphic-left {
  background-color: var(--sidebar-color);
  border-radius: 15px;
  border: 1px solid #e6edff;
  width: 73%;
  height: 500px;
  padding: 5px 40px;
}
.statistics-graphic-left h3 {
  margin: 15px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.statistics-graphic-right {
  background-color: var(--sidebar-color);
  border-radius: 15px;
  border: 1px solid #e6edff;
  width: 25%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}
.statistics-graphic-right .progress-bar {
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 260px;
  background: conic-gradient(var(--primary-color) 3.6deg, #e6e5e5 0deg);
}
.statistics-graphic-right .progress-bar::before {
  content: '';
  position: absolute;
  height: 240px;
  width: 240px;
  border-radius: 50%;
  background: #ffffff;
}
.progress-value {
  position: relative;
  z-index: 1;
  font-size: 50px;
  font-weight: 600;
  color: var(--primary-color);
}
.progress-text {
  font-size: 22px;
  font-weight: 600;
  width: 220px;
  text-align: center;
}
.employees-header {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}
.employees-body {
  gap: 20px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--sidebar-color);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}

.employees-table {
  text-align: left;
  width: 100%;
  overflow-x: auto;
}
.employees-table-header {
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  color: var(--sidebar-color);
  border-radius: 8px 8px 0px 0px;

  background-color: var(--primary-color);
}
.employees-table-header th {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid white;
}
.employees-table-header th:nth-child(6) {
  border-right: none;
}
.employees-table-body {
  border: 1px solid rgba(103, 174, 255, 0.336);
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
}

.employees-table-body td:nth-child(1),
.employees-table-header th:nth-child(1) {
  width: 340px;
}
.employees-table-body td:nth-child(2),
.employees-table-header th:nth-child(2) {
  width: 240px;
}
.employees-table-body td:nth-child(3),
.employees-table-header th:nth-child(3) {
  width: 220px;
}
.employees-table-body td:nth-child(4),
.employees-table-header th:nth-child(4) {
  width: 130px;
}

.employees-table-body td:nth-child(4) {
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.employees-table-body td:nth-child(5),
.employees-table-header th:nth-child(5) {
  width: 218px;
}
.employees-table-body td:nth-child(6),
.employees-table-header th:nth-child(6) {
  width: 180px;
}
.employees-table-body td {
  display: flex;
  justify-content: center;
}
.employees-table-body td.statusBlocked {
  background-color: var(--warning-color);
}
</style>

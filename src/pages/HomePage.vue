<script>
export default {
  data() {
    return {
      quantityQuestions: 80,
      answered: 74,
      remainQuestions: 5,
      rating: 10,
      progress: 0,
      visibleQuestions: 5,
      lastPassedQuestions: [
        { dateOfstart: 'January 1, 2021', dateOfFinish: 'January 15, 2021', quarters: 1, id: 1 },
        { dateOfstart: 'March 1, 2021', dateOfFinish: 'March 15, 2021', quarters: 2, id: 2 },
        { dateOfstart: 'Juny 1, 2021', dateOfFinish: 'Juny 15, 2021', quarters: 3, id: 3 },
        {
          dateOfstart: 'September 1, 2021',
          dateOfFinish: 'September 15, 2021',
          quarters: 4,
          id: 4
        },
        { dateOfstart: 'January 1, 2022', dateOfFinish: 'January 15, 2022', quarters: 1, id: 5 },
        { dateOfstart: 'March 1, 2022', dateOfFinish: 'March 15, 2022', quarters: 2, id: 6 },
        { dateOfstart: 'Juny 1, 2022', dateOfFinish: 'Juny 15, 2022', quarters: 3, id: 7 },
        {
          dateOfstart: 'September 1, 2022',
          dateOfFinish: 'September 15, 2022',
          quarters: 4,
          id: 8
        },
        { dateOfstart: 'January 1, 2023', dateOfFinish: 'January 15, 2023', quarters: 1, id: 9 },
        { dateOfstart: 'March 1, 2023', dateOfFinish: 'March 15, 2023', quarters: 2, id: 10 },
        { dateOfstart: 'Juny 1, 2023', dateOfFinish: 'Juny 15, 2023', quarters: 3, id: 11 },
        {
          dateOfstart: 'September 1, 2023',
          dateOfFinish: 'September 15, 2023',
          quarters: 4,
          id: 12
        },
        { dateOfstart: 'January 1, 2024', dateOfFinish: 'January 15, 2024', quarters: 1, id: 13 },
        { dateOfstart: 'March 1, 2024', dateOfFinish: 'March 15, 2024', quarters: 2, id: 14 },
        { dateOfstart: 'Juny 1, 2024', dateOfFinish: 'Juny 15, 2024', quarters: 3, id: 15 },
        {
          dateOfstart: 'September 1, 2024',
          dateOfFinish: 'September 15, 2024',
          quarters: 4,
          id: 16
        }
      ]
    }
  },
  computed: {
    progressPercentage() {
      return ((100 * this.answered) / this.quantityQuestions).toFixed(1)
    },
    displayedQuestions() {
      return this.lastPassedQuestions.slice(0, this.visibleQuestions)
    }
  },
  methods: {
    findingProgress() {
      return 100 - this.progressPercentage
    },
    loadMore() {
      this.visibleQuestions += 5
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
        <div class="passed-questions-top-section">
          <h3>Последне отвеченные ответы на вопросы</h3>
          <div class="passed-questions-top-filter">
            <div>
              <form action="" class="form-for-filter">
                <div>
                  <select class="form-select">
                    <option value="default">по четверти</option>
                    <option value="quarter-1">1 четверть</option>
                    <option value="quarter-1">2 четверть</option>
                    <option value="quarter-1">3 четверть</option>
                    <option value="quarter-1">4 четверть</option>
                  </select>
                </div>
                <div class="form-input-for-date">
                  <label for="date">По дате</label>
                  <input type="text" name="date" placeholder="January 1, 2022" />
                </div>
                <div class="form-input-for-id">
                  <label for="date">По ID</label>
                  <input type="number" name="date" placeholder="0" />
                </div>
                <button type="submit" class="find-by-filter">Найти</button>
              </form>
            </div>
          </div>
        </div>
        <table>
          <tr>
            <th>№</th>
            <th>Номер ID</th>
            <th>Начало добавления</th>
            <th>Конец добавления</th>
            <th>Четверть</th>
            <th>Действие</th>
          </tr>
          <tr v-for="(element, number) in displayedQuestions" :key="element.id">
            <td>{{ number + 1 }}</td>
            <td>{{ element.id }}</td>
            <td>{{ element.dateOfstart }}</td>
            <td>{{ element.dateOfFinish }}</td>
            <td>{{ element.quarters }}</td>
            <td><button class="check-last-question">Просмотреть</button></td>
          </tr>
        </table>
        <button
          class="download-more"
          v-if="visibleQuestions < lastPassedQuestions.length"
          @click="loadMore"
        >
          Загрузить больше
        </button>
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
  height: 344px;
}
.statistics-graphic-right {
  background-color: var(--sidebar-color);
  border-radius: 15px;
  border: 1px solid #e6edff;
  width: 25%;
  height: 344px;
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
  height: 225px;
  width: 225px;
  background: conic-gradient(var(--primary-color) 3.6deg, #e6e5e5 0deg);
}
.statistics-graphic-right .progress-bar::before {
  content: '';
  position: absolute;
  height: 200px;
  width: 200px;
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

/* Последние выполненые задачи */
.last-passed-questions {
  width: 100%;
  border: 1px solid #e6edff;
  border-radius: 15px;
  background-color: var(--sidebar-color);
  padding: 20px;
}
.last-passed-questions table {
  width: inherit;
  text-align: center;
}
.last-passed-questions table td {
  height: 54px;
  border-top: 1px solid #e6edff;
}
.last-passed-questions table th {
  height: 54px;
  font-weight: 700;
}
.last-passed-questions table td:first-child {
  padding-left: 25px;
}
.last-passed-questions table th:first-child {
  padding-left: 25px;
}
table .check-last-question {
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  border: 1px solid transparent;
  background-color: var(--primary-color);
  width: 100px;
  height: 32px;
  border-radius: 6px;
  color: var(--sidebar-color);
  cursor: pointer;
  transition: var(--tran-02);
}
table .check-last-question:hover {
  color: var(--primary-color);
  background-color: var(--sidebar-color);
  border: 1px solid var(--primary-color);
}
.passed-questions-top-section {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.passed-questions-top-section h3 {
  font-weight: 700;
  font-size: 25px;
}
.passed-questions-top-filter {
  margin-right: 20px;
  padding: 10px 15px;
  height: 50px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  width: 50%;
}
.passed-questions-top-filter .form-for-filter {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.passed-questions-top-filter .form-for-filter .form-input-for-date input {
  outline: none;
  border-radius: 3px;
  border: 1px solid grey;
  width: 140px;
  height: 30px;
  margin-left: 10px;
  padding: 1px 10px;
}
.passed-questions-top-filter .form-for-filter .form-input-for-id input {
  outline: none;
  border-radius: 3px;
  border: 1px solid grey;
  width: 50px;
  height: 30px;
  margin-left: 10px;
  padding: 1px 10px;
}
.form-select {
  outline: none;
  display: inline-block;
  border: 1px solid grey;
  border-radius: 3px;
  width: 140px;
  height: 30px;
  margin-left: 10px;
  padding: 1px 10px;
}
.find-by-filter {
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  border: 1px solid transparent;
  background-color: var(--primary-color);
  width: 100px;
  height: 32px;
  border-radius: 6px;
  color: var(--sidebar-color);
  cursor: pointer;
  transition: var(--tran-02);
}
.find-by-filter:hover,
.download-more:hover {
  color: var(--primary-color);
  background-color: var(--sidebar-color);
  border: 1px solid var(--primary-color);
}
.download-more {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 20px;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  border: 1px solid transparent;
  background-color: var(--primary-color);
  width: 200px;
  height: 40px;
  font-size: 18px;
  border-radius: 6px;
  color: var(--sidebar-color);
  cursor: pointer;
  transition: var(--tran-02);
}
</style>

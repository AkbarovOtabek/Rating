<script>
import { API } from '../questions'

export default {
  props: {
    ModeisActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      theme: {}
    }
  },
  mounted() {
    const themeId = this.$route.params.id
    const theme = this.findThemeById(themeId)

    if (theme) {
      this.theme = theme
    } else {
      console.error('Theme with the given id not found.')
    }
  },
  methods: {
    findThemeById(id) {
      for (const yearData of API) {
        for (const quant of yearData.quants) {
          const theme = quant.themes.find((theme) => theme.id === Number(id))
          if (theme) {
            return theme
          }
        }
      }
      return null
    }
  }
}
</script>
<template>
  <div class="theme-questions" :class="{ darktheme: !ModeisActive }">
    <h2>Вопросы по теме "{{ theme.name }}"</h2>
    <div class="table">
      <div class="table-header">
        <h3>Номер вопроса</h3>
        <h3>Вопрос</h3>
        <h3>макс. бал</h3>
        <h3>заработанный бал</h3>
      </div>

      <div v-for="(question, index) in theme.questions" :key="index" class="question-item">
        <div class="table-body">
          <h4>
            <span>{{ question.count }}</span>
          </h4>
          <h4>{{ question.question }}</h4>
          <h4>
            <span>{{ question.alo }}</span>
          </h4>
          <h4>
            <span>{{ question.earnedAlo || 0 }}</span>
          </h4>
        </div>
        <div class="table-body-middle">
          <div class="table-body-text">
            <p :class="{ BGRedAns: !question.checkbox }">
              Ответ: {{ question.checkbox || 'Нет ответа' }}
            </p>
            <p class="comments">Комментарий:</p>
            <p :class="{ BGRedCom: !question.clientAnswer }">
              {{ question.clientAnswer || 'Нет комментариев' }}
            </p>
          </div>
          <div class="table-body-download">
            <span>
              <a class="download" :href="question.attachedFile" download
                >Скачать загруженый файл <span><i class="bx bxs-download"></i></span
              ></a>
            </span>
            <!-- <span>Файл не прикреплен</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.questionType {
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  width: 98%;
}
.question-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 30px;
  margin-bottom: 30px;
}
.theme-questions h2 {
  margin-bottom: 30px;
}
.table {
  display: flex;
  flex-direction: column;
  width: 98%;
}
.table-header {
  text-align: center;
  padding: 30px;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  color: var(--sidebar-color);
  border: 1px solid #ccc;
  background-color: var(--primary-color);
  margin-bottom: 30px;
}
.table-header h3:nth-child(1),
.table-body h4:nth-child(1) {
  width: 134px;
}
.table-header h3:nth-child(2),
.table-body h4:nth-child(2) {
  width: 600px;
}
.table-header h3:nth-child(3),
.table-body h4:nth-child(3) {
  width: 84px;
}
.table-header h3:nth-child(4),
.table-body h4:nth-child(4) {
  width: 170px;
}
.table-body h4:nth-child(4) span,
.table-body h4:nth-child(3) span,
.table-body h4:nth-child(1) span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--sidebar-color);
  position: relative;
  background-color: var(--primary-color);
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 0 auto;
}

.table-body {
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #c9d3ec;
  padding-bottom: 25px;
}
.table-body-middle {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.table-body-download {
  font-size: 17px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.download {
  width: 240px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid transparent;
  color: var(--sidebar-color);
  background-color: var(--primary-color);
  transition: var(--tran-03);
}
.download:hover {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background-color: var(--sidebar-color);
}
.download .bxs-download {
  margin-left: 5px;
}
.table-body-text {
  width: 70%;
}
.table-body-text p:nth-child(1) {
  border-radius: 4px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  color: var(--sidebar-color);
  width: 100%;
  background-color: var(--primary-color);
  margin-bottom: 20px;
}
.table-body-text p:nth-child(3) {
  border-radius: 6px;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: #e2f3f8;
}
.table-body-text p:nth-child(2) {
  margin-bottom: 10px;
}
.comments {
  margin-left: 5px;
  font-weight: 600;
  font-size: 19px;
}
.table-body-middle .table-body-text .BGRedCom {
  background-color: #f3cbcb;
}
.table-body-middle .table-body-text .BGRedAns {
  background-color: var(--warning-color);
}
.theme-questions.darktheme h2 {
  color: var(--primary-color-light);
}
.theme-questions.darktheme .question-item {
  background: var(--primary-color-light-dark);
  color: var(--primary-color-light);
}
.theme-questions.darktheme .table-body-text p[data-v-7515f466]:nth-child(3) {
  background-color: #477e8f;
}
.theme-questions.darktheme
  .table-body-middle
  .table-body-text
  p[data-v-7515f466]:nth-child(3).BGRedCom {
  background-color: var(--dark-warning-color);
}
</style>

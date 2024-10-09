<script>
import { latestYearAndQuant } from '../API.js'

export default {
  props: {
    ModeisActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      questions: [],
      responses: {},
      innerResponses: {} // Добавлено для подвопросов
    }
  },
  mounted() {
    try {
      const themeId = parseInt(this.$route.params.id)
      const data = latestYearAndQuant
      const selectedTheme = data.themes.find((theme) => theme.id === themeId)

      if (selectedTheme && selectedTheme.question) {
        this.questions = selectedTheme.question
      } else {
        console.error('Темы или вопросы не найдены')
      }
    } catch (error) {
      console.error('Ошибка при получении данных', error)
    }
  },
  methods: {
    showInnerQuestion(question) {
      const response = this.responses[question.id]
      if (response === question.option[0]) {
        return question.innerQuestion[0]
      } else if (response === question.option[1]) {
        return question.innerQuestion[1]
      }
      return null
    }
  }
}
</script>

<template>
  <div class="questionType" :class="{ darktheme: !ModeisActive }">
    <div class="question-item" v-for="question in questions" :key="question.id">
      <div class="top-question">
        <span class="head-number">{{ question.id }}</span>
        <span class="head-question">{{ question.question }}</span>
      </div>
      <div class="comments">
        <em>{{ question.comments }}</em>
        <textarea v-if="question.textarea" cols="30" rows="10"></textarea>
        <div v-if="question.HasAttaching">
          <input type="file" multiple="multiple" />
        </div>
      </div>

      <!-- Основные варианты ответа -->
      <div v-for="(option, idx) in question.option" :key="idx">
        <label>
          <input
            type="radio"
            :value="option"
            v-model="responses[question.id]"
            :name="`option-${question.id}`"
          />
          {{ option }}
        </label>
      </div>

      <!-- Показ подвопроса в зависимости от выбранного ответа -->
      <div v-if="showInnerQuestion(question)">
        <div class="innerQuestion" :key="showInnerQuestion(question).id">
          <span
            >{{ question.id }}.{{ showInnerQuestion(question).id }}
            {{ showInnerQuestion(question).question }}</span
          >
          <textarea v-if="showInnerQuestion(question).textarea" cols="30" rows="10"></textarea>

          <!-- Варианты ответа на подвопрос -->
          <div v-for="(option, idx) in showInnerQuestion(question).option" :key="idx">
            <label>
              <input
                type="radio"
                :value="option"
                v-model="innerResponses[showInnerQuestion(question).id]"
                :name="`inner-option-${showInnerQuestion(question).id}`"
              />
              {{ option }}
            </label>
          </div>

          <div v-if="showInnerQuestion(question).HasAttaching">
            <input type="file" multiple="multiple" />
          </div>
          <div
            v-for="subInnerQuestion in showInnerQuestion(question).innerQuestion"
            :key="subInnerQuestion.id"
          >
            <span>{{ subInnerQuestion.question }}</span>
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
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 30px;
}
.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.question-header-span-wrapper {
  display: flex;
  align-items: center;
}
.question-header-point {
  margin-left: 10px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: var(--sidebar-color);
}
.question-item h3 {
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;

  font-size: 20px;
  margin-bottom: 5px;
}
.accordion-content {
  margin-top: 20px;
  overflow: hidden;
}
.accordion-enter,
.accordion-leave-to {
  max-height: 0;
}

.card-wrapper {
  background-color: var(--sidebar-color);
  border-radius: 12px;
  width: 100%;
  padding: 30px;
}
.card-wrapper form {
  display: flex;
  flex-direction: column;
}
.question-label {
  font-size: 20px;
  margin-bottom: 20px;
}
.checkbox-wrapper {
  padding-left: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkbox-wrapper > div {
  min-width: 100px;
  display: flex;
  justify-content: start;
  gap: 30px;
}
.checkbox-style {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.accordion-content {
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  max-height: 0;
}

.accordion-enter-to {
  max-height: 500px;
}

.checkbox-style > input {
  margin-right: 20px;
  transform: scale(2);
  accent-color: var(--primary-color);
}
form .textarea-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
form textarea {
  outline: none;
  font-size: 16px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;
}
form .textarea-wrapper button {
  height: 50px;
  border-radius: 8px;
  padding: 10px;
  font-weight: 700;
  width: 130px;
  font-size: 16px;
  border: 1px solid transparent;
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  transition: var(--tran-03);
  cursor: pointer;
}
form .textarea-wrapper button:hover {
  border: 1px solid var(--primary-color);
  background-color: var(--sidebar-color);
  color: var(--primary-color);
}

.field__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.field__file-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.field__file-fake {
  height: 50px;
  width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 15px;
  border: 1px solid #c7c7c7;
  border-radius: 3px 0 0 3px;
  border-right: none;
}

.field__file-button {
  width: 130px;
  height: 50px;
  background: var(--primary-color);
  color: #fff;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 0 7px 7px 0;
  cursor: pointer;
}
.answered {
  box-shadow: 0px 0px 5px var(--primary-color);
}
.questionType.darktheme .question-item {
  background: var(--primary-color-light-dark);
  color: var(--primary-color-light);
}
.questionType.darktheme .question-item textarea {
  background: var(--primary-color-light-dark);
  color: var(--primary-color-light);
}
.questionType.darktheme .answered {
  box-shadow: 0px 0px 15px var(--primary-color);
}
</style>

<script>
import { latestYearAndQuant } from '../questions'

export default {
  props: {
    ModeisActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      questions: []
    }
  },
  mounted() {
    const themeId = this.$route.params.id
    const theme = this.findThemeById(themeId)

    if (theme) {
      this.questions = theme.questions.map((question) => ({
        text: question.question,
        points: question.alo,
        isOpen: false,
        selectedOption: '',
        attachedFiles: [],
        comments: '',
        isAnswered: false,
        answerYasNo: question.answerYasNo
      }))
    }
  },

  methods: {
    findThemeById(id) {
      return latestYearAndQuant.themes.find((theme) => theme.id === Number(id)) || null
    },
    toggleAccordion(index) {
      this.questions[index].isOpen = !this.questions[index].isOpen
    },
    selectOption(index, option) {
      this.questions[index].selectedOption = option
    },
    submitForm(index, event) {
      event.preventDefault()

      const selectedOption = this.questions[index].selectedOption
      const attachedFiles = this.$refs[`fileInput${index}`][0].files
      const comments = this.questions[index].comments

      console.log('Вопрос:', this.questions[index].text)
      console.log('Выбранный ответ:', selectedOption)
      console.log('Прикрепленные файлы:', attachedFiles)
      console.log('Комментарии:', comments)

      this.questions[index].isAnswered = true
      this.questions[index].isOpen = false
    },
    updateFileLabel(index) {
      const input = this.$refs[`fileInput${index}`][0]
      const label = input.nextElementSibling.querySelector('.field__file-fake')
      const countFiles = input.files.length

      label.innerText = countFiles
        ? this.$t('QuestionType.ChooseTheFile2', { number: countFiles })
        : this.$t('QuestionType.ChooseTheFile1')
    }
  }
}
</script>

<template>
  <div class="questionType" :class="{ darktheme: !ModeisActive }">
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="question-item"
      :class="{ answered: question.isAnswered }"
    >
      <div class="question-header" @click="toggleAccordion(index)">
        <h3>{{ index + 1 }}. {{ question.text }}</h3>
        <span class="question-header-span-wrapper">
          <span>{{ $t('QuestionType.Elo') }} </span>
          <span class="question-header-point">{{ question.points }}</span>
        </span>
      </div>
      <transition name="accordion">
        <div v-show="question.isOpen" class="accordion-content">
          <form @submit="submitForm(index, $event)">
            <div class="checkbox-wrapper">
              <div>
                <div v-if="question.answerYasNo" class="checkbox-style">
                  <input
                    type="radio"
                    :name="'question-' + index"
                    :id="'checkbox-yes-' + index"
                    @change="selectOption(index, 'Да')"
                    :checked="question.selectedOption === 'Да'"
                  />
                  <label :for="'checkbox-yes-' + index">{{ $t('QuestionType.answer1') }}</label>
                </div>
                <div v-if="question.answerYasNo" class="checkbox-style">
                  <input
                    type="radio"
                    :name="'question-' + index"
                    :id="'checkbox-no-' + index"
                    @change="selectOption(index, 'Нет')"
                    :checked="question.selectedOption === 'Нет'"
                  />
                  <label :for="'checkbox-no-' + index">{{ $t('QuestionType.answer2') }}</label>
                </div>
              </div>
              <input
                name="file"
                type="file"
                :id="'input__file-' + index"
                class="field field__file"
                multiple
                @change="updateFileLabel(index)"
                accept="image/*,application/pdf,application/msword,
              application/vnd.openxmlformats-officedocument.wordprocessingml.document,
              application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                :ref="'fileInput' + index"
              />
              <label class="field__file-wrapper" :for="'input__file-' + index">
                <div class="field__file-fake">
                  {{
                    question.attachedFiles.length
                      ? $t('QuestionType.ChooseTheFile2', { number: question.attachedFiles.length })
                      : $t('QuestionType.ChooseTheFile1')
                  }}
                </div>
                <div class="field__file-button">{{ $t('QuestionType.Choose') }}</div>
              </label>
            </div>

            <textarea
              name="comments"
              placeholder="Введите комментарии"
              v-model="question.comments"
            ></textarea>
            <div class="textarea-wrapper">
              <button type="submit">{{ $t('QuestionType.Send') }}</button>
            </div>
          </form>
        </div>
      </transition>
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

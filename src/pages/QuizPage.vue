<script>
export default {
  data() {
    return {
      TheLatestQuestions: null,
      themesForQuestions: [
        {
          date: 2023,
          period: [
            {
              quart: 1,
              themes: [
                {
                  time: 15,
                  name: 'тема 1',
                  discription: 'документация на счет безопасноти',
                  id: 1
                },
                {
                  time: 15,
                  name: 'тема 2',
                  discription: 'документация на счет безопасноти ',
                  id: 2
                },
                {
                  time: 15,
                  name: 'тема 3',
                  discription: 'документация на счет безопасноти ',
                  id: 3
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 4
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 5
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 6
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 7
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 8
                }
              ]
            },
            {
              quart: 2,
              themes: [
                {
                  time: 15,
                  name: 'тема 1',
                  discription: 'документация на счет безопасноти',
                  id: 1
                },
                {
                  time: 15,
                  name: 'тема 2',
                  discription: 'документация на счет безопасноти ',
                  id: 2
                },
                {
                  time: 15,
                  name: 'тема 3',
                  discription: 'документация на счет безопасноти ',
                  id: 3
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 4
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 5
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 6
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 7
                },
                {
                  time: 15,
                  name: 'тема 4',
                  discription: 'документация на счет безопасноти ',
                  id: 8
                }
              ]
            }
          ]
        },
        {
          date: 2024,
          quart: 1,
          themes: [
            { time: 15, name: 'тема 1', discription: 'документация на счет безопасноти', id: 1 },
            { time: 15, name: 'тема 2', discription: 'документация на счет безопасноти ', id: 2 },
            { time: 15, name: 'тема 3', discription: 'документация на счет безопасноти ', id: 3 },
            { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 4 },
            { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 5 },
            { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 6 },
            { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 7 },
            { time: 15, name: 'тема 4', discription: 'документация на счет безопасноти ', id: 8 }
          ]
        }
      ]
    }
  },
  methods: {
    filterToTheLastest() {
      let latestItem = null

      for (let i = 0; i < this.themesForQuestions.length; i++) {
        const currentItem = this.themesForQuestions[i]

        if (latestItem === null) {
          latestItem = currentItem
        } else {
          if (
            currentItem.date > latestItem.date ||
            (currentItem.date === latestItem.date && currentItem.quart > latestItem.quart)
          ) {
            latestItem = currentItem
          }
        }
      }
      return [latestItem]
    }
  }
}
</script>

<template>
  <div class="quiz">
    <div class="cards" v-for="theme in filterToTheLastest()" :key="theme.date + '-' + theme.quart">
      <h2>Вопросы для проверки безопасности {{ theme.date }} за {{ theme.quart }} квартал</h2>
      <div class="quiz-card-wrapper">
        <a
          class="card"
          v-for="questionTheme in theme.themes"
          :key="questionTheme.id"
          :href="`/quiz/questionType/${questionTheme.id}`"
        >
          <div class="card-time">
            <p>{{ questionTheme.time }} min</p>
          </div>
          <img class="card-img" src="../assets/icons/123.png" alt="" />
          <div class="card-text">
            <h4>{{ questionTheme.name }}</h4>
            <p>{{ questionTheme.discription }}</p>
          </div>
        </a>
      </div>
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

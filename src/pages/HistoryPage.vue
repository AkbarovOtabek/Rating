<script>
import LastQuantsHistory from './LastQuantsHistory.vue'
export default {
  components: {
    LastQuantsHistory
  },
  data() {
    return {
      history: [
        {
          date: 2024,
          quarts: [
            {
              quart: 1,
              id: 12
            },
            {
              quart: 2,
              id: 11
            },
            {
              quart: 3,
              id: 10
            },
            {
              quart: 4,
              id: 9
            }
          ]
        },
        {
          date: 2023,
          quarts: [
            {
              quart: 1,
              id: 8
            },
            {
              quart: 2,
              id: 7
            },
            {
              quart: 3,
              id: 6
            },
            {
              quart: 4,
              id: 5
            }
          ]
        },
        {
          date: 2022,
          quarts: [
            {
              quart: 1,
              id: 4
            },
            {
              quart: 2,
              id: 3
            },
            {
              quart: 3,
              id: 2
            },
            {
              quart: 4,
              id: 1
            }
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div class="history">
    <div class="history-cards">
      <div class="history-wrapper" v-for="element in history" :key="element.date">
        <h2>{{ element.date }} год</h2>
        <div class="history-quarts">
          <a
            v-for="quart in element.quarts"
            :key="quart.id"
            :href="`/history/lastQuarts/${quart.id}`"
            class="history-card"
          >
            {{ quart.quart }} - четверть
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history {
  width: 100%;
}
.history-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.history-wrapper {
  padding: 30px;
  width: 100%;
  border-radius: 17px;
  background-color: var(--sidebar-color);
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
.history-wrapper h2 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
}
.history-quarts {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
}
.history-card {
  font-size: 24px;
  color: white;
  border-radius: 17px;
  width: 300px;
  height: 255px;
  border: 5px solid transparent;
  display: flex;
  align-items: center;
  background-color: rgb(196, 193, 193);
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  transition: var(--tran-02);
}
.history-card:hover {
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  border-color: var(--sidebar-color);
}
</style>

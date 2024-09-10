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
      history: API
    }
  }
}
</script>

<template>
  <div class="history" :class="{ darktheme: !ModeisActive }">
    <div class="history-cards">
      <div class="history-wrapper" v-for="element in history" :key="element.year">
        <h2>{{ element.year }} год</h2>
        <div class="history-quarts">
          <router-link
            v-for="quant in element.quants"
            :key="quant.id"
            :to="{ name: 'lastQuantsHistory', params: { id: quant.id } }"
            class="history-card"
          >
            {{ quant.quant }} - четверть
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.history {
  width: 98%;
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
  width: 82%;
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
.history.darktheme .history-wrapper {
  background: var(--primary-color-light-dark);
  color: var(--primary-color-light);
}
.history.darktheme .history-wrapper .history-card {
  background-color: var(--body-sidebar-color-dark);
}
.history.darktheme .history-wrapper .history-card:hover {
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  border-color: var(--sidebar-color);
}
</style>

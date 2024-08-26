<script>
import LastQuantsHistory from './LastQuantsHistory.vue'
export default {
  components: {
    LastQuantsHistory
  },
  data() {
    return {
      history: [
        { quarter: 1, id: 1 },
        { quarter: 2, id: 2 },
        { quarter: 3, id: 3 },
        { quarter: 4, id: 4 }
      ]
    }
  }
}
</script>

<template>
  <div class="history">
    <div class="history-cards">
      <a
        :href="`/history/lastQuarts/${element.id}`"
        class="history-card"
        v-for="element in history"
        :key="element.id"
      >
        <h2>{{ element.quarter }} - четверть</h2>
      </a>
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
.history-card {
  display: inline-block;
  border-radius: 17px;
  width: 540px;
  height: 475px;
  border: 5px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  background-color: var(--sidebar-color);
  transition: var(--tran-02);
}
.history-card:hover {
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  border-color: var(--sidebar-color);
}
</style>

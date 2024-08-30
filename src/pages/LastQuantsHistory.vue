<script>
export default {}
</script>

<template>
  <div class="historyQuant">
    <h3>За 1 четверть</h3>
    <div class="historyQuant-wrapper">
      <div class="historyQuant-table">
        <div class="table-header">
          <h3>Место в рейтинге</h3>
          <h3>Название банка</h3>
          <h3>Накопленные очки</h3>
        </div>

        <div class="table-body" v-for="(bank, number) in sortedRatingBanks" :key="bank.id">
          <p>{{ number + 1 }}</p>
          <p>{{ bank.nameOfBank }}</p>
          <p>{{ bank.elo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.historyQuant > h3 {
  font-size: 24px;
  font-weight: 600;

  text-align: center;
  margin-bottom: 35px;
}
.historyQuant-wrapper {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.historyQuant-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}
.historyQuant-table .table-header {
  height: 74px;
  margin-bottom: 10px;
  width: inherit;
  border: 1px solid #e6edff;
  position: relative;
  border-radius: 12px;
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
.historyQuant-table .table-body {
  margin-bottom: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  width: inherit;
  border: 1px solid #e6edff;
  position: relative;
  border-radius: 12px;
  background: var(--sidebar-color);
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
.historyQuant-table .table-body > p,
.historyQuant-table .table-header > h3 {
  width: 27%;
  text-align: center;
}
</style>

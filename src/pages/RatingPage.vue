<script>
export default {
  data() {
    return {
      ratingBanks: [
        { nameOfBank: 'NBU', elo: 340, id: 1 },
        { nameOfBank: 'Asaka bank', elo: 740, id: 2 },
        { nameOfBank: 'Agro bank', elo: 800, id: 3 },
        { nameOfBank: 'TBC bank', elo: 600, id: 4 },
        { nameOfBank: 'Anor bank', elo: 500, id: 5 },
        { nameOfBank: 'SQB', elo: 479, id: 6 },
        { nameOfBank: 'BRB', elo: 578, id: 7 },
        { nameOfBank: 'AVO', elo: 295, id: 8 }
      ]
    }
  },
  computed: {
    sortedRatingBanks() {
      return this.ratingBanks.sort((a, b) => b.elo - a.elo)
    }
  }
}
</script>

<template>
  <div class="rating">
    <div class="rating-table">
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
</template>
<style scoped>
.rating {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rating-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}
.rating-table .table-header {
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
.rating-table .table-body {
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
.rating-table .table-body > p,
.rating-table .table-header > h3 {
  width: 27%;
  text-align: center;
}
</style>

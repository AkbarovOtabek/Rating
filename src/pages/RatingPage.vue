<script>
export default {
  data() {
    return {
      selectedYear: null,
      selectedQuarter: null,
      historyRating: [
        {
          date: 2024,
          quarts: [
            {
              quart: 1,
              ratingBanks: [
                { nameOfBank: 'NBUкен', elo: 340, id: 1 },
                { nameOfBank: 'Asaka bank', elo: 740, id: 2 },
                { nameOfBank: 'Agro bank', elo: 800, id: 3 },
                { nameOfBank: 'TBC bank', elo: 600, id: 4 },
                { nameOfBank: 'Anor bank', elo: 500, id: 5 },
                { nameOfBank: 'SQB', elo: 479, id: 6 },
                { nameOfBank: 'BRBкен', elo: 578, id: 7 },
                { nameOfBank: 'AVO', elo: 295, id: 8 }
              ]
            },
            {
              quart: 2,
              ratingBanks: [
                { nameOfBank: 'NBU', elo: 990, id: 1 },
                { nameOfBank: 'Asaka bank', elo: 740, id: 2 },
                { nameOfBank: 'Agro bank', elo: 800, id: 3 },
                { nameOfBank: 'TBC bank', elo: 600, id: 4 },
                { nameOfBank: 'Anorкен bank', elo: 500, id: 5 },
                { nameOfBank: 'SQB', elo: 479, id: 6 },
                { nameOfBank: 'BRBкен', elo: 578, id: 7 },
                { nameOfBank: 'AVO', elo: 295, id: 8 }
              ]
            },
            {
              quart: 3,
              ratingBanks: [
                { nameOfBank: 'NBU', elo: 340, id: 1 },
                { nameOfBank: 'Asaka bank', elo: 740, id: 2 },
                { nameOfBank: 'Agro bank', elo: 800, id: 3 },
                { nameOfBank: 'TBC bank', elo: 600, id: 4 },
                { nameOfBank: 'Anor bank', elo: 500, id: 5 },
                { nameOfBank: 'SQBееееееее', elo: 479, id: 6 },
                { nameOfBank: 'BRB', elo: 578, id: 7 },
                { nameOfBank: 'AVO', elo: 295, id: 8 }
              ]
            },
            {
              quart: 4,
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
          ]
        },
        {
          date: 2023,
          quarts: [
            {
              quart: 1,
              ratingBanks: [
                { nameOfBank: 'NBU', elo: 340, id: 1 },
                { nameOfBank: 'Asaka bank', elo: 740, id: 2 },
                { nameOfBank: 'Agro bank', elo: 800, id: 3 },
                { nameOfBank: 'TBC bank', elo: 600, id: 4 },
                { nameOfBank: 'Anor bank', elo: 500, id: 5 },
                { nameOfBank: 'SQBWWWWW', elo: 479, id: 6 },
                { nameOfBank: 'BRB', elo: 578, id: 7 },
                { nameOfBank: 'AVO', elo: 295, id: 8 }
              ]
            },
            {
              quart: 2,
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
            },
            {
              quart: 3,
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
            },
            {
              quart: 4,
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
          ]
        },
        {
          date: 2022,
          quarts: [
            {
              quart: 1,
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
            },
            {
              quart: 2,
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
            },
            {
              quart: 3,
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
            },
            {
              quart: 4,
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
          ]
        },
        {
          date: 2021,
          quarts: [
            {
              quart: 1,
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
            },
            {
              quart: 2,
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
            },
            {
              quart: 3,
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
            },
            {
              quart: 4,
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
          ]
        }
      ]
    }
  },
  computed: {
    filteredRatingBanks() {
      const selectedYearData = this.historyRating.find(
        (item) => item.date === parseInt(this.selectedYear)
      )

      if (selectedYearData) {
        const selectedQuarterData = selectedYearData.quarts.find(
          (quart) => quart.quart === parseInt(this.selectedQuarter)
        )

        if (selectedQuarterData) {
          return selectedQuarterData.ratingBanks.sort((a, b) => b.elo - a.elo)
        }
      }
      return []
    },

    availableQuarters() {
      const selectedYearData = this.historyRating.find(
        (item) => item.date === parseInt(this.selectedYear)
      )
      return selectedYearData ? selectedYearData.quarts.map((q) => q.quart) : []
    }
  },
  methods: {
    setDefaultYearAndQuarter() {
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      const currentQuarter = Math.ceil((currentDate.getMonth() + 1) / 3)

      let defaultYear = currentYear
      let defaultQuarter = currentQuarter

      const currentYearData = this.historyRating.find((item) => item.date === currentYear)
      if (!currentYearData || !currentYearData.quarts.find((q) => q.quart === currentQuarter)) {
        if (currentYearData) {
          defaultQuarter = currentYearData.quarts[currentYearData.quarts.length - 1].quart
        } else {
          const latestYearData = this.historyRating[0]
          defaultYear = latestYearData.date
          defaultQuarter = latestYearData.quarts[latestYearData.quarts.length - 1].quart
        }
      }

      this.selectedYear = defaultYear
      this.selectedQuarter = defaultQuarter
    }
  },
  mounted() {
    this.setDefaultYearAndQuarter()
  }
}
</script>

<template>
  <div class="rating">
    <div class="filter-and-header-rating">
      <h3>Таблица ретинга за {{ selectedYear }}</h3>
      <form action="" class="filter-rating">
        <select v-model="selectedYear">
          <option v-for="year in historyRating.map((item) => item.date)" :key="year" :value="year">
            {{ year }} год
          </option>
        </select>
        <select v-model="selectedQuarter">
          <option v-for="quarter in availableQuarters" :key="quarter" :value="quarter">
            {{ quarter }} - квартал
          </option>
        </select>
      </form>
    </div>
    <div class="rating-table">
      <div class="table-header">
        <h3>Место в рейтинге</h3>
        <h3>Название банка</h3>
        <h3>Накопленные очки</h3>
      </div>

      <div class="table-body" v-for="(bank, number) in filteredRatingBanks" :key="bank.id">
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.filter-and-header-rating {
  width: 64%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.filter-and-header-rating .filter-rating,
.filter-and-header-rating h3 {
  border-radius: 12px;
  height: 60px;
  background-color: var(--sidebar-color);
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  padding: 0px 20px;

  display: flex;
  align-items: center;
}
.filter-and-header-rating .filter-rating {
  justify-content: space-between;
  width: 400px;
  text-align: center;
}
.filter-and-header-rating .filter-rating select {
  border-radius: 5px;
  height: 40px;
  padding: 0px 15px;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  outline: none;
}
.filter-and-header-rating .filter-rating select:focus option {
  color: black; /* Цвет текста в option */
  background-color: white; /* Цвет фона в option */
}

.filter-and-header-rating h3 {
  justify-content: center;
  color: var(--primary-color);
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

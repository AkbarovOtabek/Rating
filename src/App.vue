<script>
import TheNavBar from '@/components/TheNavBar.vue'
import SearchAndProfileBar from '@/components/SearchAndProfileBar.vue'

export default {
  components: { TheNavBar, SearchAndProfileBar },
  data() {
    return {
      ModeisActive: JSON.parse(localStorage.getItem('ModeisActive')) ?? true, // Загружаем состояние
      longBar: false
    }
  },
  computed: {
    showNavBar() {
      return this.$route.path !== '/login'
    }
  },
  watch: {
    ModeisActive(newVal) {
      this.updateBodyBackground(newVal)
    }
  },
  mounted() {
    this.updateBodyBackground(this.ModeisActive)
  },
  methods: {
    toggleClass() {
      this.ModeisActive = !this.ModeisActive
      localStorage.setItem('ModeisActive', JSON.stringify(this.ModeisActive)) // Сохраняем состояние
      this.updateBodyBackground(this.ModeisActive)
    },
    toggleLongBar() {
      this.longBar = !this.longBar
    },
    updateBodyBackground(isActive) {
      document.body.style.backgroundColor = isActive
        ? getComputedStyle(document.documentElement).getPropertyValue('--body-color').trim()
        : getComputedStyle(document.documentElement).getPropertyValue('--body-color-dark').trim()
      // Используем переменную CSS --body-color-dark
    }
  }
}
</script>

<template>
  <div class="body" :class="{ 'body-dark': !ModeisActive }">
    <div class="none" :class="{ container: showNavBar }">
      <TheNavBar
        :toggleClass="toggleClass"
        :toggleLongBar="toggleLongBar"
        :ModeisActive="ModeisActive"
        :longBar="longBar"
        :showNavBar="showNavBar"
      />
      <SearchAndProfileBar :showNavBar="showNavBar" :ModeisActive="ModeisActive" />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.body.body-dark {
  width: 100%;
  height: 100vh;
  background-color: var(--body-color-dark) !important;
}
</style>

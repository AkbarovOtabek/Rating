<script>
import TheNavBar from '@/components/TheNavBar.vue'
import SearchAndProfileBar from '@/components/SearchAndProfileBar.vue'

export default {
  components: { TheNavBar, SearchAndProfileBar },
  data() {
    return {
      ModeisActive: JSON.parse(localStorage.getItem('ModeisActive')) ?? true,
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
      localStorage.setItem('ModeisActive', JSON.stringify(this.ModeisActive))
      this.updateBodyBackground(this.ModeisActive)
    },
    toggleLongBar() {
      this.longBar = !this.longBar
    },
    updateBodyBackground(isActive) {
      document.body.style.backgroundColor = isActive
        ? getComputedStyle(document.documentElement).getPropertyValue('--body-color').trim()
        : getComputedStyle(document.documentElement).getPropertyValue('--body-color-dark').trim()
    }
  }
}
</script>

<template>
  <div class="body" :class="{ 'body-dark': !ModeisActive }">
    <TheNavBar
      :toggleClass="toggleClass"
      :toggleLongBar="toggleLongBar"
      :ModeisActive="ModeisActive"
      :longBar="longBar"
      :showNavBar="showNavBar"
    />

    <div class="none" :class="{ container: showNavBar, width: longBar }">
      <SearchAndProfileBar :showNavBar="showNavBar" :ModeisActive="ModeisActive" />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  min-height: 100%;
}

.none.container {
  position: relative;
  margin: 0 auto;
  margin-left: 125px;
  width: calc(100% - 125px);
  flex-grow: 1;
  transition: var(--tran-03);
}
.none.container.width {
  width: calc(100% - 225px);
  margin-left: 325px;
}
.body.body-dark {
  width: 100%;
  height: 100%;
  background-color: var(--body-color-dark) !important;
}
</style>

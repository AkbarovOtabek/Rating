<script>
import TheNavBar from '@/components/TheNavBar.vue'
import SearchAndProfileBar from '@/components/SearchAndProfileBar.vue'

export default {
  components: { TheNavBar, SearchAndProfileBar },
  data() {
    return {
      ModeisActive: JSON.parse(localStorage.getItem('ModeisActive')) ?? true,
      longBar: JSON.parse(localStorage.getItem('longBar')) ?? false,
      langRU: JSON.parse(localStorage.getItem('langRU')) ?? true
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
      localStorage.setItem('ModeisActive', JSON.stringify(newVal))
    },
    longBar(newVal) {
      localStorage.setItem('longBar', JSON.stringify(newVal))
    }
  },
  mounted() {
    this.updateBodyBackground(this.ModeisActive)
  },
  methods: {
    toggleClass() {
      this.ModeisActive = !this.ModeisActive
    },
    toggleLongBar() {
      this.longBar = !this.longBar
    },
    updateBodyBackground(isActive) {
      document.body.style.backgroundColor = isActive
        ? getComputedStyle(document.documentElement).getPropertyValue('--body-color').trim()
        : getComputedStyle(document.documentElement).getPropertyValue('--body-color-dark').trim()
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.langRU = !this.langRU
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
      :langRU="langRU"
    />

    <div class="none" :class="{ container: showNavBar, width: longBar }">
      <SearchAndProfileBar
        :showNavBar="showNavBar"
        :ModeisActive="ModeisActive"
        :changeLanguage="changeLanguage"
        :langRU="langRU"
      />
      <router-view :ModeisActive="ModeisActive"></router-view>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  min-height: 100%;
}
.none.width {
  width: 100%;
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
  margin-left: 305px;
}
.body.body-dark {
  width: 100%;
  height: 100%;
  background-color: var(--body-color-dark) !important;
}
@media (min-width: 1440px) {
  .none.container {
    width: 1440px;
    padding-left: calc((100% - 1440px) / 2);
    padding-right: calc((100% - 1440px) / 2);
    margin: 0 auto;
  }
  .none.container.width {
    width: calc(100% - 225px);
    margin-left: 0;
  }
}
</style>

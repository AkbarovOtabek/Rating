<script>
import TheNavBar from '@/components/TheNavBar.vue'
import SearchAndProfileBar from '@/components/SearchAndProfileBar.vue'
export default {
  components: { TheNavBar, SearchAndProfileBar },
  data() {
    return {
      ModeisActive: true,
      longBar: false,
      ModeText: ''
    }
  },
  computed: {
    showNavBar() {
      return this.$route.path !== '/login'
    }
  },
  methods: {
    toggleClass() {
      this.ModeisActive = !this.ModeisActive
    },
    toggleLongBar() {
      this.longBar = !this.longBar
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
  background-color: var(--body-color-dark);
}
</style>

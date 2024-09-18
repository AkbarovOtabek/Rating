<script>
import ListPageItems from './ListPageItems.vue'

export default {
  components: { ListPageItems },
  props: {
    ModeisActive: {
      type: Boolean,
      required: true
    },
    longBar: {
      type: Boolean,
      required: true
    },
    toggleClass: {
      type: Function,
      required: true
    },
    toggleLongBar: {
      type: Function,
      required: true
    },
    showNavBar: {
      type: Boolean,
      required: true
    },
    langRU: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      pageList: [
        { page: '/home', pageName: this.$t('navbar.home'), icon: 'home' },
        { page: '/quiz', pageName: this.$t('navbar.quiz'), icon: 'message-alt-detail' },
        { page: '/history', pageName: this.$t('navbar.history'), icon: 'food-menu' },
        { page: '/notification', pageName: this.$t('navbar.notification'), icon: 'bell' },
        { page: '/rating', pageName: this.$t('navbar.rating'), icon: 'bar-chart-square' }
      ],
      showModeText: false // Переменная для отображения текста режима
    }
  },
  mounted() {
    // Инициализируем showModeText при загрузке в зависимости от longBar
    this.showModeText = this.longBar
  },
  methods: {
    isActievPage(page) {
      return this.$route.path === page
    },
    updatePageList() {
      // Обновляем названия страниц при смене языка
      this.pageList = [
        { page: '/home', pageName: this.$t('navbar.home'), icon: 'home' },
        { page: '/quiz', pageName: this.$t('navbar.quiz'), icon: 'message-alt-detail' },
        { page: '/history', pageName: this.$t('navbar.history'), icon: 'food-menu' },
        { page: '/notification', pageName: this.$t('navbar.notification'), icon: 'bell' },
        { page: '/rating', pageName: this.$t('navbar.rating'), icon: 'bar-chart-square' }
      ]
    }
  },
  watch: {
    longBar(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.showModeText = true
        }, 180)
      } else {
        this.showModeText = false
      }
    },
    langRU(newVal) {
      this.updatePageList()
    }
  }
}
</script>

<template>
  <nav
    class="sidebar"
    :class="{ close: !longBar, 'switch-active': !ModeisActive }"
    v-if="showNavBar"
  >
    <header>
      <a href="/home" class="image-text">
        <span class="image">
          <img v-if="ModeisActive" src="../assets/icons/BrandForWhite.png" alt="logo" />
          <img v-else src="../assets/icons/BrandForDark.png" alt="logo" />
        </span>

        <div class="text header-text">
          <span class="name">CERT-CBU</span>
          <span class="profession">Cyber Securety</span>
        </div>
      </a>
      <i @click="toggleLongBar" class="bx bx-chevron-right toggle"></i>
    </header>
    <div class="menu-bar">
      <div class="menu">
        <ul class="menu-links">
          <ListPageItems
            v-for="pageInfo in pageList"
            :key="pageInfo.page"
            :pageInfo="pageInfo"
            :isActievPage="isActievPage(pageInfo.page)"
          />
        </ul>
      </div>
      <div class="bottom-content">
        <li class="mode">
          <div class="moon-sun">
            <i v-if="ModeisActive" class="bx bx-moon icon moon"></i>
            <i v-else class="bx bx-sun icon sun"></i>
          </div>
          <!-- Показ текста после задержки в 1 секунду -->
          <span v-if="showModeText" class="mode-text text">{{
            ModeisActive ? $t('navbar.DarkTheme') : $t('navbar.lightTheme')
          }}</span>

          <div @click="toggleClass" class="toggle-switch">
            <span class="switch"></span>
          </div>
        </li>
        <li class="">
          <a href="/login">
            <i class="bx bx-log-out icon"></i>
            <span class="text nav-text">{{ $t('navbar.exit') }}</span>
          </a>
        </li>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sidebar .text {
  white-space: nowrap;
  color: var(--text-color);
  font-weight: 500;
}
.sidebar .image {
  margin-right: 10px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.514);
  margin-right: 40px;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  padding: 40px 14px 10px;
  width: 270px;
  height: 100vh;
  transition: var(--tran-03);
  background: var(--sidebar-color);
  z-index: 999;
}
.sidebar.close {
  width: 87px;
}

.sidebar.close .text,
.sidebar.close .bottom-content .mode .switch {
  display: none;
}
.sidebar header {
  position: relative;
}
.sidebar .image-text img {
  width: 40px;
  border-radius: 6px;
}
.sidebar header .image-text {
  display: flex;
  align-items: center;
}
header .image-text .header-text {
  display: flex;
  flex-direction: column;
}
.header-text .name {
  font-weight: 600;
}
.header-text .profession {
  margin-top: -2px;
}
.sidebar header .toggle {
  cursor: pointer;
  position: absolute;
  top: 51%;
  right: -40px;
  transform: translateY(-52%) rotate(180deg);
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  color: var(--sidebar-color);
  font-size: 22px;
  transition: var(--tran-02);
}
.sidebar.close header .toggle {
  transform: translateY(-52%) rotate(0deg);
}
.sidebar .menu-bar {
  padding: 60px 0px;
  height: calc(100% - 34px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-bar .mode {
  border-radius: 10px;
  display: flex;
  background: var(--primary-color-light);
}
.menu-bar .mode .moon-sun {
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
}
.menu-bar .mode i {
  position: absolute;
}

.menu-bar .mode .toggle-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  cursor: pointer;
  min-width: 60px;
}

.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: var(--toggle-color);
}
.sidebar.close .toggle-switch {
  position: absolute;
  right: 10px;
}
.switch::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  height: 15px;
  width: 15px;
  background: var(--sidebar-color);
  transition: var(--tran-02);
}
.switch-active .switch::before {
  left: 24px;
}

.switch-active {
  background: var(--body-sidebar-color-dark);
  color: var(--toggle-color-dark);
}

.switch-active .bottom-content .mode i,
.switch-active .bottom-content .mode .mode-text,
.switch-active .header-text,
.search-box form .long-short {
  color: var(--toggle-color-dark);
}
.switch-active .search-box,
.switch-active .search-box input,
.switch-active .mode {
  background: var(--primary-color-light-dark);
}
.switch-active .mode .switch::before {
  background: var(--body-color-dark);
}
.switch-active header .toggle {
  transition: var(--tran-03);
  color: var(--body-color-dark);
  background-color: var(--text-color-dark);
}
.switch-active header .toggle:hover {
  background: var(--toggle-color-dark);
}
</style>

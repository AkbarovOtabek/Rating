<script>
export default {
  data() {
    return {
      ModeisActive: true,
      longBar: true,
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
    <nav
      class="sidebar"
      :class="{ close: !longBar, 'switch-active': !ModeisActive }"
      v-if="showNavBar"
    >
      <header>
        <div class="image-text">
          <span class="image">
            <img v-if="ModeisActive" src="./assets/icons/BrandForWhite.png" alt="logo" />
            <img v-else src="./assets/icons/BrandForDark.png" alt="logo" />
          </span>

          <div class="text header-text">
            <span class="name">CERT-CBU</span>
            <span class="profession">Cyber Securety</span>
          </div>
        </div>
        <i @click="toggleLongBar" class="bx bx-chevron-right toggle"></i>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li class="nav-links">
              <a href="/home">
                <i class="bx bx-home icon"></i>
                <span class="text nav-text">Домой</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="/quiz">
                <i class="bx bx-message-alt-detail icon"></i>
                <span class="text nav-text">Опросник</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="/history">
                <i class="bx bx-food-menu icon"></i>
                <span class="text nav-text">История</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="/notification">
                <i class="bx bx-bell icon"></i>
                <span class="text nav-text">Уведомление</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="/rating">
                <i class="bx bx-bar-chart-square icon"></i>
                <span class="text nav-text">Рейтинг</span>
              </a>
            </li>
            <li class="nav-links">
              <a href="/settings">
                <i class="bx bx-cog icon"></i>
                <span class="text nav-text">Настройки</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="bottom-content">
          <li class="mode">
            <div class="moon-sun">
              <i v-if="ModeisActive" class="bx bx-moon icon moon"></i>
              <i v-else class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text"
              >{{ ModeisActive ? 'Темный режим' : 'Светлый режим' }}
            </span>

            <div @click="toggleClass" class="toggle-switch">
              <span class="switch"></span>
            </div>
          </li>
          <li class="">
            <a href="/login">
              <i class="bx bx-log-out icon"></i>
              <span class="text nav-text">Выход</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
    <div class="none" :class="{ container: showNavBar }">
      <div class="search-and-profile" v-if="showNavBar">
        <div class="search-header">
          <form>
            <button type="submit">
              <i
                :style="{
                  color: ModeisActive ? 'var(--text-color)' : 'var(--toggle-color-dark)'
                }"
                class="bx bx-search icon long-short"
              ></i>
            </button>
            <input type="search" placeholder="Поиск..." />
          </form>
        </div>
        <div class="profile-header">
          <img src="./assets/icons/BrandForDark.png" alt="" />
          <h4>Michael Clifford</h4>
        </div>
      </div>
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
/* NavBar */
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 40px 14px 10px;
  width: 270px;
  transition: var(--tran-03);
  background: var(--sidebar-color);
  z-index: 999;
}
.sidebar.close {
  width: 85px;
}
.sidebar.close .text,
.sidebar.close .bottom-content .mode .switch {
  opacity: 0;
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
  transform: translateY(-52%);
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  color: var(--sidebar-color);
  font-size: 22px;
}
.sidebar li {
  height: 50px;
  margin-top: 10px;
  list-style: none;
  align-items: center;
}
.sidebar li .icon {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  font-size: 20px;
}
.sidebar li .icon,
.sidebar li .text {
  color: var(--text-color);
  transition: var(--tran-02);
}
.sidebar li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 6px;
  transition: var(--tran-04);
}
.sidebar li a:hover {
  background: var(--primary-color);
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--sidebar-color);
}

/* top - search and profile */
.search-and-profile {
  display: flex;
  justify-content: space-between;
  width: 1440px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.search-header {
  width: 84%;
  background: var(--sidebar-color);
  border-radius: 10px;
}
.profile-header {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile-header img {
  width: 60px;
  height: 50px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid transparent;
}
.search-header form {
  height: 100%;
  display: flex;
}
.search-header form button {
  width: 60px;
  background: none;
  border: none;
  cursor: pointer;
}
.search-header input {
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  background: var(--sidebar-color);
}
.sidebar .menu-bar {
  padding: 60px 0px;
  height: calc(100% - 25px);
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
  height: 100%;
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
.switch-active .menu .menu-links li a span,
.switch-active .menu .menu-links li a i,
.switch-active .bottom-content li a span,
.switch-active .bottom-content li a i,
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

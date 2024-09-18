<script>
export default {
  props: {
    ModeisActive: {
      type: Boolean,
      required: true
    },
    showNavBar: {
      type: Boolean,
      required: true
    },
    changeLanguage: {
      type: Function,
      required: true
    },
    langRU: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<template>
  <div class="search-and-profile" v-if="showNavBar" :class="{ darktheme: !ModeisActive }">
    <div class="header">
      <h2>{{ $t('searchAndprofile.headTitle') }}</h2>
      <p>Tel: <span>(71)212-73-82</span></p>
      <ul class="languages">
        <li :class="{ 'active-language': langRU }">
          <button @click="langRU ? null : changeLanguage('ru')">RU</button>
        </li>
        <li :class="{ 'active-language': !langRU }">
          <button @click="langRU ? changeLanguage('en') : null">EN</button>
        </li>
      </ul>
    </div>
    <a href="/home" class="profile-header">
      <img src="../assets/icons/UserIcon.png" alt="" />
      <h4>Michael Clifford</h4>
    </a>
  </div>
</template>

<style scoped>
.search-and-profile {
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin: 0px 0px 50px;
  padding-top: 30px;
}
.header {
  box-shadow: 0px 0px 5px rgba(124, 141, 181, 0.22);
  padding: 0px 30px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 83%;
  background: var(--sidebar-color);
  border-radius: 10px;
}
.header h2 {
  font-size: 22px;
}
.profile-header {
  box-shadow: 0px 0px 5px rgba(124, 141, 181, 0.22);
  border-radius: 10px;
  width: 230px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--sidebar-color);
}

.languages li button {
  width: 100%;

  border-radius: 4px;
  height: 100%;
  border: 1px solid transparent;
  box-shadow: 0px 0px 5px rgba(124, 141, 181, 0.22);
  background-color: transparent;
  border: 1px solid var(--sidebar-color);
  font-size: 20px;
  cursor: pointer;
}
.profile-header img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid transparent;
}
.languages {
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
}
.languages li {
  box-shadow: 0px 0px 5px rgba(124, 141, 181, 0.22);
  display: flex;

  align-items: center;
  justify-content: center;
  width: 54px;
  height: 50px;
}
.languages .active-language button {
  color: var(--sidebar-color);
  background-color: var(--primary-color);
  border: 1px solid transparent;
}

.search-and-profile.darktheme .header,
.search-and-profile.darktheme .profile-header {
  color: var(--primary-color-light);
  background: var(--primary-color-light-dark);
}
.search-and-profile.darktheme .languages li button {
  color: var(--sidebar-color);
}
</style>

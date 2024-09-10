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
    }
  }
}
</script>

<template>
  <div class="search-and-profile" v-if="showNavBar">
    <div class="header">
      <h2>Система мониторинга информационной и кибербезопасности</h2>
      <p>Tel: <span>(71)212-73-82</span></p>
      <ul class="languages">
        <li class="active-language">RU</li>
        <li>UZ</li>
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
.profile-header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 50px;
  border-radius: 4px;
}
.languages .active-language {
  color: var(--sidebar-color);
  background-color: var(--primary-color);
}
</style>

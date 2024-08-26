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
    <div class="search-header">
      <form>
        <input type="search" placeholder="Поиск..." />
        <button type="submit" class="search-header-button">
          <i
            :style="{
              color: ModeisActive ? 'var(--text-color)' : 'var(--toggle-color-dark)'
            }"
            class="bx bx-search icon long-short"
          ></i>
        </button>
      </form>
    </div>
    <div class="profile-header">
      <img src="../assets/icons/UserIcon.png" alt="" />
      <h4>Michael Clifford</h4>
    </div>
  </div>
</template>

<style scoped>
.search-and-profile {
  display: flex;
  justify-content: space-between;
  width: 1440px;
  margin: 30px 0px 50px;
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
.search-header form .search-header-button {
  height: 60px;
  width: 60px;
  background: none;
  border: none;
  cursor: pointer;
}
.search-header input {
  padding-left: 15px;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  background: var(--sidebar-color);
}
</style>

<script>
export default {
  props: {
    element: {
      required: true,
      type: Object
    },
    ModeisActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<template>
  <div class="notifications-card" :class="{ darktheme: !ModeisActive }">
    <img v-bind:src="element.image" alt="" />
    <div class="notifications-card-text">
      <h4>{{ element.title }}</h4>
      <p>{{ element.descriptions }}</p>
      <span>{{ element.date }}</span>
    </div>
    <a :href="element.url" class="notifications-card-links"
      ><i class="bx bx-chevron-right toggle"></i
    ></a>
  </div>
</template>
<style scoped>
.notifications-card {
  position: relative;
  background-color: var(--sidebar-color);
  padding: 20px 34px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: var(--tran-03);
}
.notifications-card:hover {
  background-color: var(--primary-color);
  color: var(--sidebar-color);
}
.notifications-card:hover .notifications-card-text span {
  color: var(--sidebar-color);
}
.notifications-card img {
  background-color: var(--sidebar-color);
  padding: 2px;
  margin-right: 34px;
  width: 102px;
  height: 102px;
  border-radius: 50%;
}
.notifications-card-text h4 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
}
.notifications-card-text p {
  font-size: 16px;
  width: 92%;
  margin-bottom: 15px;
}
.notifications-card-text span {
  color: var(--text-color);
}
.notifications-card .toggle {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  border-left: 1px solid rgb(221, 220, 220);
  width: 120px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  transition: var(--tran-02);
}
.notifications-card:hover .toggle {
  color: var(--sidebar-color);
}
.notifications-card.darktheme {
  background-color: var(--primary-color-light-dark);
  color: var(--primary-color-light);
}
.notifications-card.darktheme .notifications-card-links {
  color: var(--primary-color-light);
}
.notifications-card.darktheme:hover {
  background-color: var(--primary-color);
  color: var(--sidebar-color);
}
</style>

<script setup>
const props = defineProps({
  theme: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div class="card">
    <div class="card-time">
      <p>{{ props.theme.time }} min</p>
    </div>
    <img class="card-img" src="../assets/icons/123.png" alt="" />
    <div class="card-text">
      <h4>{{ props.theme.name }}</h4>
      <p>{{ props.theme.discription }}</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  cursor: pointer;
  position: relative;
  width: 442px;
  height: 346px;
  border-radius: 10px;
  border: 1px solid #7c8db5;
  text-align: center;
  overflow: hidden;
  text-align: start;
  font-size: 16px;
}
.card-text {
  padding: 15px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.671);
  border-radius: 5px;
  width: 70%;
  color: white;
}
.card-time {
  position: absolute;
  background: #ededed;
  color: blue;
  padding: 8px;
  border-radius: 12px;
  left: 10px;
  top: 10px;
}
</style>

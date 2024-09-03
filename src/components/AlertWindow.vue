<script>
export default {
  props: {
    changeFinishButton: {
      required: true,
      type: Function
    },
    startButton: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      finishButton: false
    }
  },
  methods: {
    sendFinishButton() {
      this.finishButton = !this.finishButton
    }
  }
}
</script>

<template>
  <div class="alert-wrapper">
    <div class="alert">
      <h3>?</h3>
      <p>Are you Sure you want to submit Quiz?</p>
      <div class="alert-btn">
        <button @click="props.changeFinishButton" type="submit" class="button_no">Нет</button>
        <button @click="sendFinishButton" type="submit" class="button_yes">Да</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.alert-wrapper {
  background-color: rgba(0, 0, 0, 0.473);
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
}
.alert {
  width: 456px;
  height: 429px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 65px;
  background-color: var(--sidebar-color);
  gap: 40px;
}
.alert h3 {
  border-radius: 50%;
  width: 116px;
  height: 108px;
  display: flex;
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  align-items: center;
  justify-content: center;
  font-size: 70px;
  padding-left: 6px;
  font-weight: 600;
  box-shadow: 0px 0px 10px rgba(124, 141, 181, 0.22);
}
.alert p {
  width: 241px;
  text-align: center;
}
.alert .alert-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button_yes,
.button_no {
  cursor: pointer;
  width: 96px;
  height: 66px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-size: 20px;
}
.button_no {
  background-color: var(--sidebar-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}
.button_yes {
  background-color: var(--primary-color);
  color: var(--sidebar-color);
  border: 1px solid transparent;
}
</style>

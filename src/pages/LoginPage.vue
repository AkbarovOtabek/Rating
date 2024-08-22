<script>
export default {
  data() {
    return {
      UserLog: {
        login: 'sht0rm',
        password: '123wqe'
      },
      UserInput: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    InputText(login) {
      this.UserInput.login = login
    },
    InputPassword(password) {
      this.UserInput.password = password
    },
    matchingUserLogWithInput() {
      if (
        this.UserLog.login === this.UserInput.login ||
        this.UserLog.password === this.UserInput.password
      ) {
        console.log('успешный ход')
        this.$router.push('/home')
      } else {
        console.log('Неправильный логин или пароль')
      }
    }
  }
}
</script>

<template>
  <div class="container-login">
    <div class="login-image">
      <img src="../assets/icons/loginImage.png" alt="" />
      <div class="image-blur">
        <div class="login-image-text">
          <span>’’</span>
          <p>
            Those people who develop the ability to continuously acquire new and better forms of
            knowledge that they can apply to their work and to their lives will be the movers and
            shakers in our society for the indefinite future
          </p>
          <h3>Brian Tracy</h3>
        </div>
      </div>
    </div>
    <div class="login-text">
      <div class="login-logo">
        <img src="../assets/icons/BrandForWhite.png" alt="" />
        <div class="login-logo-text">
          <h3>"CERT-CBU"</h3>
          <h3>Cyber securety</h3>
        </div>
      </div>
      <div class="login-input-section">
        <h3>Войдите в свою учетную запись</h3>
        <p>с вашим зарегестрированным логином</p>
        <form action="">
          <label for="login">Логин *</label>
          <input
            @input="InputText($event.target.value)"
            type="text"
            name="login"
            placeholder="Введете вашу учетную запись"
          />
          <label for="password">Пароль *</label>
          <input
            @input="InputPassword($event.target.value)"
            type="password"
            name="password"
            placeholder="Введете ваш пароль"
          />

          <button type="submit" @click.prevent="matchingUserLogWithInput">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-login {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}
.login-image,
.login-text {
  position: relative;
  width: 50%;
  height: inherit;
}
.login-image {
  position: relative;
}
.login-image img {
  width: 100%;
  height: inherit;
  filter: blur(5px);
}
.login-image span {
  z-index: 999;
  color: white;
  left: -30px;
  top: -50px;
  font-size: 44px;
  display: inline-block;
  position: absolute;
}
.login-image .image-blur {
  background-color: rgba(25, 53, 202, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-image .image-blur .login-image-text {
  padding: 15px;
  position: relative;
  color: white;
  font-size: 22px;
  width: 430px;
  height: 400px;
}
.login-image-text::before {
  position: absolute;
  content: '';
  width: 40px;
  height: 15px;
  right: 0;
  bottom: 0;
  background: white;
}

.login-image-text::after {
  position: absolute;
  content: '';
  width: 15px;
  height: 40px;
  right: 0;
  bottom: 0px;
  background: white;
}

.login-image-text h3 {
  margin-top: 70px;
  text-align: left;
}

.login-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-logo {
  top: 3%;
  left: 6%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: start;
}
.login-logo img {
  margin-right: 14px;
}
.login-logo .login-logo-text {
  font-size: 18px;
}
.login-input-section h3 {
  color: var(--primary-color);
  font-weight: 900;
  font-size: 25px;
}
.login-input-section p {
  color: var(--primary-color);
  margin-bottom: 26px;
  font-size: 18px;
}
.login-input-section form {
  display: flex;
  flex-direction: column;
}
.login-input-section form label {
  color: var(--text-color);
  font-size: 20px;
  margin-bottom: 12px;
}
.login-input-section form input,
.login-input-section form button {
  outline: none;
  border: 1px solid transparent;
  height: 64px;
  width: 426px;
  font-size: 20px;
  border-radius: 10px;
}
.login-input-section form input {
  padding-left: 20px;
  margin-bottom: 21px;
  box-shadow: 0px 2px 10px #00000054;
}
.login-input-section form input::placeholder {
  color: var(--primary-color);
}
.login-input-section form button {
  margin-top: 40px;
  cursor: pointer;
  color: var(--sidebar-color);
  background-color: var(--primary-color);
  transition: var(--tran-03);
}
.login-input-section form button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  background-color: var(--sidebar-color);
}
</style>

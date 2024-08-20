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
        <div>
          <h3>"CERT-CBU"</h3>
          <h3>Cyber securety</h3>
        </div>
      </div>
      <div class="login-input-section">
        <h3>Войдите в свою учетную запись</h3>
        <p>с вашим зарегестрированным логином</p>
        <form action="">
          <label for="login">Логин</label>
          <input type="text" name="login" />
          <label for="password">Пароль</label>
          <input type="password" name="password" />

          <button>Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-login {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}
.login-image,
.login-text {
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
}
.login-logo {
  margin: 40px 0px 0px 40px;
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>

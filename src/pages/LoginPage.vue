<template>
  <div class="login-page">
    <div class="login-logo">
      <img src="../assets/icons/BrandForDark.png" class="logo" alt="" />
      <div class="login-logo-text">
        <h4>CERT-CBU</h4>
        <p>kiberxavfsizlik markaz</p>
      </div>
    </div>
    <h3 class="login-page_header">Войдите в учутную запись</h3>
    <form class="login-page_form">
      <label for="login">Имя пользователя</label>
      <input name="login" type="text" />
      <label for="password">Пароль</label>
      <input name="password" type="password" />
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<style scoped>
.login-page {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 550px;
  height: 786px;
  background: rgba(0, 0, 0, 0.589);
  border-radius: 20px;
}
.login-page .login-logo,
.login-page h3,
.login-page .login-page_form {
  margin: 0 auto;
}
.login-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-page .logo {
  margin-right: 20px;
  width: 81px;
  height: 81px;
}

.login-page .login-page_form {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login-page .login-page_form input,
.login-page .login-page_form button {
  outline: none;
  border: none;
  border-radius: 10px;
  width: 393px;
  height: 46px;
}
.login-page_form button {
  margin-top: 25px;
  cursor: pointer;
  margin-top: 71px;
  background: #a12424;
  font-size: 20px;
}
.login-page_header {
  margin-top: 50px;
  font-size: 30px;
  max-height: 100px;
}
.login-logo-text,
.login-page_form label,
.login-page_header,
.login-page_form button {
  color: white;
}
</style>

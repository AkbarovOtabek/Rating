<script>
export default {
  props: {
    pageInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <li class="nav-links">
    <a :href="pageInfo.page">
      <i :class="`bx bx-${pageInfo.icon} icon`"></i>
      <span class="text nav-text">{{ pageInfo.pageName }}</span>
    </a>
  </li>
</template>
<style>
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
.switch-active .menu .menu-links li a span,
.switch-active .menu .menu-links li a i,
.switch-active .bottom-content li a span,
.switch-active .bottom-content li a i {
  color: var(--toggle-color-dark);
}
.sidebar.close li .text {
  display: none;
}
</style>

<template>
  <div id="app">
    <div class="topbar" id="top">
      <a href="/" class="logo">
        <img alt="Vue logo" src="../src/assets/logo.png">
        <h1>聖煒國際有限公司</h1>
      </a>
      <div id="nav">
        <router-link to="/">關於聖煒</router-link> |
        <router-link to="/solution">產業方案</router-link> |
        <router-link to="/software">軟體開發</router-link> |
        <router-link to="/contact">聯絡我們</router-link>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <ul>
        <li>營業時間：週一至週五 09:00~18:00</li>
        <li>公司地址：高雄市仁武區仁勇西巷9號</li>
        <li>聯絡電話：0910-868-737</li>
        <li>電子郵件：CK.Lee@saint-way.com</li>
        <li>統一編號：42790809</li>
        <li>Copyright © 2021 聖煒國際有限公司 Saint Way International Co., Ltd</li>
      </ul>
    </div>
    <img  @click="scrollTop" class="scrollTop" src="../src/assets/scrollTop.png" alt="">
  </div>
</template>
<script>
export default {
  methods: {
    // 置頂按鈕
    scrollTop () {
      document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="scss">
/* #E87C19 夕陽橘 */
/* #F4C18C 皮膚色 */
/* #30405A 藏青色 */
/* #7C8494 青灰色 */
/* #DFDAD4 杏仁白 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #30405A;
}
#nav {
  padding: 30px;
  a {
    font-size: 20px;
    font-weight: bold;
    color: #30405A;
    text-decoration: none;

    &.router-link-exact-active {
      color: #E87C19;
    }
  }
}
.topbar{
  display: flex;
  justify-content: space-around;
}
.topbar a{
  color: #30405A;
  text-decoration:none;
}
.topbar img{
  width: 50px;
  height: 50px;
}
.logo{
  display: flex;
  align-items: center;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #30405A;
  color: #DFDAD4;
  li{
    list-style: none;
  }
}
.scrollTop{
  position: fixed;
  right: 0;
  bottom: 0;
  border: none;
  cursor: pointer;
  width: 50px;
}
</style>

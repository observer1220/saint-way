<template>
  <div class="softwareDev">
    <div class="banner">
      <img src="../assets/software_banner.jpg" alt="">
      <h1>軟體開發</h1>
    </div>
    <div class="title">
      <h2>開發方法</h2>
      <p>因應專案型態與需求，採用敏捷式與瀑布式軟體開發方法，依據專案狀態與客戶產業特質，採取最適方法，以最佳化精神取得精確有效的方法。</p>
    </div>

    <div class="software_main">
      <div class="item">
        <h2>專案管理</h2>
        <ul>
          <li>文件管理</li>
          <ul>
            <li>使用情境與流程企劃</li>
            <li>系統分析 / 系統設計</li>
          </ul>
          <li>專案管理</li>
          <ul>
            <li>時程控管</li>
            <li>定時版本更新</li>
            <li>錯誤修正追蹤</li>
          </ul>
          <li>關鍵控管</li>
          <ul>
            <li>定期檢核會議</li>
            <li>Unit Test導入</li>
            <li>關鍵功能確認</li>
          </ul>
        </ul>
      </div>

      <div class="item">
        <h2>開發平台</h2>
        <ul>
          <li>iOS / Android 行動APP</li>
          <ul>
            <li>原生式：Objective-C, Swift, Java, Kotlin</li>
            <li>混合式：Cordova, Flutter</li>
          </ul>
          <li>網站前台</li>
          <ul>
            <li>Vue.js</li>
            <li>JavaScript / jQuery</li>
            <li>Bootstrap / Element UI</li>
          </ul>
          <li>應用軟體</li>
          <ul>
            <li>Java, C/C++, C#, Python, Ruby</li>
          </ul>
          <li>資料庫</li>
          <ul>
            <li>MySQL, MS-SQL, MariaDB, Oracle, PostgreSQL, MongoDB, Firebase</li>
          </ul>
        </ul>
      </div>

      <div class="item">
        <h2>軟硬體整合應用</h2>
        <ul>
          <li>RFID 管理應用系統</li>
          <li>IoT 物聯網應用系統</li>
          <li>RFID、藍芽、Beacon 相關應用整合</li>
        </ul>
      </div>

      <div class="item">
        <h2>協助企業軟體系統佈署</h2>
        <ul>
          <li>資訊安全規劃</li>
          <ul>
            <li>弱點掃描、滲透掃描的漏洞修復</li>
          </ul>
          <li>雲端服務：AWS, AZURE</li>
          <ul>
            <li>協助客戶將軟體移植、部署到雲端</li>
          </ul>
          <li>效能測試與調校</li>
          <ul>
            <li>壓力測試與關鍵效能測試</li>
            <li>目標導向的效能調校</li>
          </ul>
        </ul>
      </div>
      <div class="item">
        <h2>協助客戶整合資訊系統</h2>
        <ul>
          <li>串連客戶現有系統</li>
          <ul>
            <li>ERP, CRM, MES, WMS, ...etc.</li>
          </ul>
          <li>串接客戶現有資料庫</li>
          <ul>
            <li>MySQL, MariaDB, MS SQL Oracle, PostgreSQL</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.softwareDev{
  max-width: 940px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  .banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 940px;
      height: 300px;
      object-fit: cover;
    }
  }
}
.software_main{
  .item{
    display: flex;
    flex-direction: column;
  }
  .item ul{
    line-height: 1.8;
  }
}
</style>

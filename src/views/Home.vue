<template>
  <div class="about">
    <div class="banner">
      <img src="../assets/about_banner.jpg" alt="">
      <h1>關於聖煒</h1>
    </div>
    <div class="main">
      <h2>公司簡介</h2>
      <img src="" alt="">
      <p>聖煒國際有限公司成立於2015年，主要營業項目為軟體開發及進出口貿易。
        合作夥伴皆擁有多年科技業及製造業相關系統經驗。我們不追求做最好的系統，
        只做最符合使用者需求的系統。使用者體驗比起各種高深的技術，更能讓使用者享受系統帶來的便利性!</p>
      <h2>核心能力</h2>
      <div class="item">
        <ul>
          <li>客製化系統專家</li>
          <ul>
            <li>各種客製系統服務，我們有最專業的顧問團隊，能針對你們的客製需求，給予最精準的建議，並提供最符合您需求的方案，有任何燒腦殼的需求，儘管交給我們吧！</li>
          </ul>
        </ul>
      </div>
      <div class="item">
        <ul>
          <li>專業軟體代理</li>
          <ul>
            <li>除了我們擅長的系統整合，我們也代理了國內外專業軟體，舉凡企業資訊入口(EIP)、工作流程(BPM)、
              文管系統(DMS)、商業智慧(BI)等多項熱門軟體，可有效提升您的工作效率與業績掌握。</li>
          </ul>
        </ul>
      </div>
      <div class="item">
        <ul>
          <li>資訊外包服務</li>
          <ul>
            <li>許多傳統產業並無IT配置，但在無論任何產業都脫離不了資訊系統，建置IT團隊需要時間和成本，
              我們團隊成員來自各種產業的老師傅，我們知道您的需求，將你的資訊需求放心交給我們。</li>
          </ul>
        </ul>
      </div>
      <h2>合作夥伴</h2>
      <div class="logo_area">
        <img src="https://3711cdn.r.worldssl.net/pic/content/ch/images/index/thumbnail_ase.png" alt="">
        <img src="https://lh3.googleusercontent.com/proxy/ilWtH2bJtyDb4lvdcl1kBkIC7acRHOEkzVJgaCN9IIypEQ0QYNDW2dAFtKaAxwYP-OlHsWnpe_gTm9KoyJzyGhxp17MX90_Y9b6tRKIOOVd2yU_alx5HyjurJS0zu2UI6k-4tg" alt="">
        <img src="https://www.edetw.com/wp-content/uploads/logo_o-ta.gif" alt="">
        <img src="https://vlsicad2020.conf.tw/site/userdata/1342/logo/09.jpg" alt="">
        <img src="https://www.china-chuwei.com/cw_pic/kangfule/2018718/2018718101637593.png" alt="">
        <img src="https://campustalent.careercenter.ncu.edu.tw/storage/company_logo/42771985_logo.jpeg" alt="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDde87Gc5ERBqrH_mrPp2c22h9_MjM8U8ry_mmPSjX19CEii44RpOa2-uUXGyy12uIi5w&usqp=CAU" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.about{
  max-width: 940px;
  margin:0 auto;
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
.main{
  display: flex;
  flex-direction: column;
  justify-content: start;
}
ul{
    line-height: 1.8;
}
.logo_area{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  img{
    width: 200px;

  }
}
</style>

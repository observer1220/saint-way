<template>
  <div class="about">
    <div class="banner">
      <img src="../assets/about_banner.jpg" alt="">
      <h1>關於我們</h1>
    </div>
    <div class="main">
      <h2>公司簡介</h2>
      <img src="" alt="">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, assumenda natus culpa nesciunt nemo, odit repudiandae voluptatum repellat, maiores qui autem! Eius, provident. Suscipit quasi rerum accusantium, nihil optio excepturi.</p>
      <h2>核心能力</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ad saepe. Sit eveniet accusamus ut culpa odio cupiditate perferendis dolor tenetur, facere ipsum similique assumenda iure neque esse repudiandae est!</p>
      <h2>合作夥伴</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis porro fugiat facilis ad. Minima odio, dolore expedita hic voluptatum ab temporibus molestias quod. Et a animi ad nobis earum!</p>
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
</style>

<template>
  <div id="detail" v-if="user && blog">
    <section class="top">
      <router-link :to="{name:'user',params:{userId:user.objectId},query:{page:1}}">
        <img :src="user.avatar" alt="头像" width="60" height="60">
        <div>
          <h2>{{blog.title}}</h2>
          <p><span class="user-link">{{user.username}}</span> 发表于 {{blog.createdAt | formatDate}}</p>
        </div>
      </router-link>
    </section>
    <section class="content">
      <h3>正文内容：</h3>
      <div v-html="content"></div>
    </section>
  </div>
</template>
<style src="./detail.css" scoped></style>
<script src="./detail.js"></script>

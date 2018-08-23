<!-- 首页 -->
<template>
  <div id="index" v-if="blogs.length">
    <section v-for="blog in blogs" :key="blog.id">
        <router-link :to="{name:'user',params:{userId:blog.user.id},query:{page:1}}">
        <figure>
          <img :src="blog.user.avatar" :title="blog.user.username" alt="头像" width="60" height="60">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
      </router-link>
      <router-link :to="{name:'detail',params:{blogId:blog.id}}">
        <h2>{{blog.title}}
          <span>该文章发布于 {{blog.createdAt | formatDate}}</span>
        </h2>
        <p>{{blog.description || blog.title}}</p>
      </router-link>
    </section>
    <el-pagination :current-page="page" background layout="prev, pager, next" :total="total" @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.css" scoped></style>
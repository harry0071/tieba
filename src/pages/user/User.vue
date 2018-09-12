<template>
  <div id="user">
    <section class="top" v-if="user">
      <img :src="user.avatar" width="60" height="60">
      <p>{{user.username}} 的帖子</p>
    </section>
    
      <section class="content" v-for="blog in blogs" :key="blog.id" v-if="blogs.length">
        <router-link :to="{name:'detail',params:{blogId:blog.id}}" ><div class="date">
          <p class="day">{{blog.createdAt | day}}</p>
          <p>{{blog.createdAt | month}}月</p>
          <p>{{blog.createdAt | year}}年</p>
        </div>
        <div class="blog">
          <h3>{{blog.title || ''}}</h3>
          <p>{{blog.description || ''}}</p>
        </div></router-link>
      </section>
    
    <section v-else class="content">
    	<h3>暂无帖子</h3>
    </section>
    <el-pagination :current-page="page" background layout="prev, pager, next" :total="total" @current-change="changePage">
    </el-pagination>
  </div>
</template>
<style src="./user.css" scoped></style>
<script src="./user.js"></script>

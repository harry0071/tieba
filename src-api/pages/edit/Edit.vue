<template>
  <div id="create">
  	<el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="帖子标题" prop="title">
    <el-input v-model="ruleForm.title"></el-input>
  </el-form-item>
    <el-form-item label="内容摘要" prop="desc">
    <el-input :rows="2" type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="详细内容" prop="content">
    <el-input :rows="6" type="textarea" v-model="ruleForm.content" placeholder="支持 markdown 语法"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<style src="./edit.css" scoped></style>

<script src="./edit.js"></script>

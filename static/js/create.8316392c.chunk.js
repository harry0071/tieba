webpackJsonp([2],{"3tc2":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"create"}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-position":"top",model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"帖子标题",prop:"title"}},[r("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"内容摘要",prop:"desc"}},[r("el-input",{attrs:{rows:2,type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"详细内容",prop:"content"}},[r("el-input",{attrs:{rows:6,type:"textarea",placeholder:"支持 markdown 语法"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("发帖")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")({data:function(){return{ruleForm:{title:"",desc:"",content:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:3,max:16,message:"长度在 3 到 16 个字符",trigger:"blur"}],desc:[{required:!0,message:"请输入帖子内容摘要",trigger:"blur"},{min:3,max:80,message:"内容摘要需要在 3 ~ 80 个字符之间"}],content:[{required:!0,message:"请填写帖子详细内容",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var r=new(t.AV.Object.extend("Blogs")),o=t.AV.User.current();r.save({title:t.ruleForm.title,description:t.ruleForm.desc,content:t.ruleForm.content,user:o,userId:o.toJSON().objectId}).then(function(e){t.$notify({title:"成功",message:'发帖成功 ヾ(๑╹◡╹)ﾉ"',type:"success",offset:100}),t.$router.push({name:"index",query:{page:1}})})})},resetForm:function(e){this.$refs[e].resetFields()}}},o,!1,function(e){r("97SE")},"data-v-891824f4",null);t.default=l.exports},"97SE":function(e,t){}});
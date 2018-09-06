# 轻贴吧 -- 发表你的所思所想

> 一个基于vue.js + element-ui的在线贴吧，注册登录后可发表帖子、编辑帖子、删除帖子等功能。       
如果你喜欢此项目，欢迎点右上角 "star"一下，非常感谢！ 🤞

## 预览图
![1.png](https://i.loli.net/2018/09/06/5b90e53ab42d6.png)


## 预览链接
👉 [点击预览](https://harry0071.github.io/tieba)

## 技术栈
vue + vue-router + vuex + element-ui + leancloud

## 问题汇总
<details>
<summary>计算属性不能使用箭头函数！</summary>
```
watch: {
	number: function (newNum, oldNum) {
	  console.log(this);
	}
}
```
下面这种写法是错误的，如果使用箭头函数，会导致this的指向发生错误     
```
//错误写法
watch: {
	number: (newNum, oldNum) => {
	  console.log(this);
	}
}
```
</details>



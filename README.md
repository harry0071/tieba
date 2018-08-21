# vue-spa

> A Vue.js project

## 用法
将项目clone到本地。然后执行下面的命令

``` bash
# 首先安装依赖
npm i

# 然后运行项目
npm start

# 发布打包
npm run build

# 或者
# 发布打包并查看分析报告
npm run build --report
```

## 自定义路径说明
```
'@': resolve('src'),
'cp': '@/components',
'css': '@/assets/css',
'js': '@/assets/js',
'imgs': '@/assets/imgs'
```

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



//后台接口地址
const url = {
	register:'/auth/register',//注册
	login:'/auth/login',//登录
	auth:'/auth',//判断用户是否登录
	logout:'/auth/logout',//退出登录
	getBlog:'/blog',//get，获取博客列表
	createBlog:'/blog',//post,创建博客
	blogId:'/blog/',//获取id为123的博客详情/blog/123
	deleteBlog:'/blog/',//删除id为123的博客/blog/123


};

const host = 'http://blog-server.hunger-valley.com';

for (let key in url) {
	url[key] = host + url[key];
}

export default url;
import mixin from '@/utils/mixin.js';
export default {
	data(){
		return {
			blogs:[],
			total:0,//总共有多少条
			page:1,
		}
	},
	created(){
		this.page = this.$route.query.page-0 || 1;
		this.getTotal();
		this.getBlog(this.page);
	},
	mixins:[mixin],
	watch:{
		'$route.query.page':function(newVal){
			if (!newVal) {
				this.getBlog(1);
			}
		}
	},
	methods:{
		getTotal(){
			let query = new this.AV.Query('Blogs');
			query.count().then(count => {
				this.total = count;
			});
		},
		getBlog(page){
			this.page = page;
			let query = new this.AV.Query('Blogs');
			query.include('user');
			query.descending('createdAt');//从最新的开始返回
			query.limit(10);// 每页 10 条结果
			query.skip((page-1)*10);
			query.find().then(blogs =>{
				this.blogs = [];
				blogs.forEach( (blog, index) => {
					this.blogs.push({
						id:blog.id,
						title:blog.attributes.title,
						description:blog.attributes.description,
						createdAt:blog.createdAt,
						updatedAt:blog.updatedAt,
						user:{
							id:blog.attributes.userId,
							username:blog.attributes.user.attributes.username,
							avatar:blog.attributes.user.attributes.avatar
						}
					});
				});
			})
		},
		changePage(newPage){
			this.getBlog(newPage);
			this.$router.push({name:'index',query:{page:newPage}});
		}
	},
}
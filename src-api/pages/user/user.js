import url from '@/utils/api.js';
import mixin from '@/utils/mixin.js';
export default {
	data(){
		return {
			blogs:[],
			user:null,
			page:1,
			total:0
		}
	},
	created(){
		this.page = this.$route.query.page || 1;
		this.getUserBlog(this.page);
	},
	mixins:[mixin],
	methods:{
		getUserBlog(page){
			this.$request(url.getBlog,{userId:this.$route.params.userId, page})
			.then(res=>{
				this.page = res.page;
				this.total = res.total;
				this.blogs = res.data;
				if (!this.blogs.length) {
					this.user = {avatar:'//blog-server.hunger-valley.com/avatar/5.jpg',username:'匿名',id:12345}
				}else {
					this.user = res.data[0].user;
				}
				this.$router.push({name:'user',query:{page}});
				
			});
		},
		changePage(page){
			this.getUserBlog(page);
		}
	},
}
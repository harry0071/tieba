import url from '@/utils/api.js';
import mixin from '@/utils/mixin.js';
export default {
	data(){
		return {
			blogs:[],
			total:0,
			page:1,
			totalPage:1,
		}
	},
	computed:{
		httpPage(){
			return this.totalPage+1-this.page || 1;
		}
	},
	created(){
		this.page = this.$route.query.page-0 || 1;
		this.getTotalPage().then(()=>{
			this.getBlog(this.page);
		});
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
		getTotalPage(){
			return this.$request(url.getBlog)
			.then(res=>{
				this.totalPage = res.totalPage;
			});
		},
		getBlog(page){
			this.page = page;
			this.$request(url.getBlog,{page})
			.then(res=>{
				this.blogs = res.data;
				this.blogs.forEach( (blog, index) => {
					if(!blog.user){
						blog.user={avatar:"//blog-server.hunger-valley.com/avatar/5.jpg",id:12345,username:'匿名'}
					}
				});
				this.total = res.total;
			});
		},
		changePage(newPage){
			this.getBlog(newPage);
			this.$router.push({name:'index',query:{page:newPage}});
		}
	},
}
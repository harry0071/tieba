import url from '@/utils/api.js';
import marked from 'marked';
import mixin from '@/utils/mixin.js';
export default {
	data(){
		return {
			blog:null,
			user:null,

		}
	},
	computed:{
		content(){
			return marked(this.blog.content);
		},
	},
	created(){
		this.getBlogDetail();
	},
	mixins:[mixin],
	methods:{
		getBlogDetail(){
			this.$request(url.blogId+this.$route.params.blogId)
			.then(res=>{
				this.blog = res.data;
				this.user = res.data.user;
			});
		},
	},
}
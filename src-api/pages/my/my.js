import url from '@/utils/api.js';
import mixin from '@/utils/mixin.js';
import {
	mapState
} from 'vuex';
export default {
	data() {
		return {
			blogs: [],
			page: 1,
			total: 0
		}
	},
	computed: {
		...mapState({
			user: state => state.auth.userInfo,
		}),
	},
	created() {
		this.page = this.$route.query.page - 0 || 1;
		this.getUserBlog(this.page);
	},
	mixins: [mixin],
	methods: {
		getUserBlog(page) {
			this.$request(url.getBlog, {
					userId: this.user.id,
					page
				})
				.then(res => {
					this.page = res.page;
					this.total = res.total;
					this.blogs = res.data;
					this.$router.push({
						name: 'my',
						query: {
							page
						}
					});

				});
		},
		changePage(page) {
			this.getUserBlog(page);
		},
		deleteBlog(blogId) {
			this.$confirm('此操作将永久删除该帖, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$request(url.deleteBlog + blogId, null, 'delete')
					.then(() => {
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						this.getUserBlog(1);
					})
			})
		},
	},
}

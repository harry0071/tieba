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
			var query = new this.AV.Query('Blogs');
			query.descending('createdAt');
			query.equalTo('userId', this.user.objectId);
			query.count().then(count => {
				this.total = count;
			});
			query.limit(10); // 每页返回 10 条结果
			query.skip((page - 1) * 10);
			query.find().then(blogs => {
				this.blogs = [];
				blogs.forEach((blog, index) => {
					this.blogs.push({
						id: blog.id,
						title: blog.attributes.title,
						description: blog.attributes.description,
						createdAt: blog.createdAt,
						updatedAt: blog.updatedAt,
					});
				});
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
				var blog = this.AV.Object.createWithoutData('Blogs', blogId);
				blog.destroy().then(success => {
					this.$notify({
						title: '成功',
						message: '删除成功 ヾ(✿ﾟ▽ﾟ)ノ',
						type: 'success',
						offset: 100
					});
					this.getUserBlog(1);
				}, err => {
					this.$notify.error({
						title: '错误',
						message: '操作失败，请稍后重试 ╮(╯﹏╰）╭',
						offset: 100
					});
				});
			})
		},
	},
}

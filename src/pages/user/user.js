import mixin from '@/utils/mixin.js';
export default {
	data() {
		return {
			blogs: [],
			user: null,
			page: 1,
			total: 0
		}
	},
	created() {
		this.page = this.$route.query.page-0 || 1;
		this.getUserBlog(this.page);
	},
	mixins: [mixin],
	methods: {
		getUserBlog(page) {
			var query = new this.AV.Query('Blogs');
			query.descending('createdAt');
			query.include('user');
			query.equalTo('userId', this.$route.params.userId);
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
				this.user = {
					id: blogs[0].attributes.userId,
					username: blogs[0].attributes.user.attributes.username,
					avatar: blogs[0].attributes.user.attributes.avatar
				};
				this.$router.push({
					name: 'user',
					query: {
						page
					}
				});
			})
		},
		changePage(page) {
			this.getUserBlog(page);
		}
	},
}

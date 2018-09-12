export default{
	filters:{
		formatDate(val){
			let createDate = new Date(val);
			let now = Date.now();
			let time = (now - createDate)/1000;
			if (time<60) {//小于60秒
				return '刚刚';
			} else if (time<3600) {
				return parseInt(time/60) + '分钟前';
			} else if (time<86400) {
				return parseInt(time/3600) + '小时前';
			} else {
				return parseInt(time/86400) +'天前';
			}
		},
		year(val){
			return new Date(val).getFullYear();
		},
		month(val){
			return new Date(val).getMonth()+1;
		},
		day(val){
			return new Date(val).getDate();
		}
	},
}
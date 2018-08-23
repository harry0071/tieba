//接口规范
//需要返回状态status,成功为ok，失败为fail
/*
{
  "status": "ok",
  "msg": "注册成功",
  "data": {
    "id": 1,
    "username": "hunger",
    "avatar": "http://avatar.com/1.png",
    "updatedAt": "2017-12-27T07:40:09.697Z",
    "createdAt": "2017-12-27T07:40:09.697Z"
  }
}
*/

import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

function request(url,data={},method='get') {
	return new Promise((resolve,reject) => {
		let config = {
			withCredentials: true,//将cookie发送给第三方服务器
			url,
			method,
		};
		if (method.toLowerCase() == 'get') {
			config.params = data;
		} else {
			config.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
			config.data = qs.stringify(data);
		}
		axios(config).then(({data}) => {
			if (data.status === 'ok') {
				resolve(data);
			} else {
				Message({
					message:data.msg,
					type:'error',
					duration:3000
				});
				reject(data);
			}
		}).catch(err => {
			console.dir(err);
			document.write(err);
		});
	});
}

export default request;

//使用方法：
// request('/user', {name:'stage', age:24}, 'get').then(data => console.log(data));
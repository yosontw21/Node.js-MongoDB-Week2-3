const mongoose = require('mongoose');

const postScheam = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'user',
			required: [true, '無法找到使用者']
		},
		content: {
			type: String,
			required: [true, '內容 未填寫']
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		image: {
			type: String,
			default: ''
		},
		likes: [
			{
				type: mongoose.Schema.ObjectId,
				ref: 'user'
			}
		],
		// comments: {
		// 	type: Number,
		// 	default: 0
		// }

		// tags: [
		// 	{
		// 		type: String,
		// 		required: [ true, '貼文標籤 tags 未填寫' ]
		// 	}
		// ],
		// type: {
		// 	type: String,
		// 	enum: [ 'group', 'person' ],
		// 	required: [ true, '貼文類型 type 未填寫，或請輸入 group 或是 person' ]
		// },
	},
	{
		versionKey: false
	}
);

const Post = mongoose.model('post', postScheam);

module.exports = Post;

const AWS = require('aws-sdk')
const uuidv4 = require('node-uuid')
const dynamo = require('dynamodb')

// console.log(uuidv4())

const Account = dynamo.define('Account', {
	hashKey: 'email',
	timestamps: true,

	schema: {
		email: Joi.string().email(),
		name: Joi.string(),
		age: Joi.number(),
	}
})

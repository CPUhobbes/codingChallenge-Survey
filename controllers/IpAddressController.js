const IpAddress = require('../models').IpAddress;
const Question = require('../models').Question;
const Answer = require('../models').Answer;
Question.hasMany(Answer, IpAddress, { onDelete: 'cascade' });

module.exports = {
	create(req, res) {
		
		//Get IP Address of Client
		let ipAddr = req.headers['x-forwarded-for'] || 
			req.connection.remoteAddress || 
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress;
		return IpAddress
			.create({
				ip: ipAddr,
                questionId: req.body.data.questionId
			})
			.then(ip => res.status(201).send(ip))
			.catch(error => res.status(400).send(error)
		);
	},
};
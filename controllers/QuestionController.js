const Question = require('../models').Question;
const Answer = require('../models').Answer;
const IpAddress = require('../models').IpAddress;

module.exports = {
	create(req, res) {
		return Question
			.create({
				question: req.body.question,
			})
			.then(question => res.status(201).send(question))
			.catch(error => res.status(400).send(error)
		);
	},

	list(req, res) {
		return Question
			.findAll({
				include:[{
					model: Answer,
					as: 'answers',
				},
				{
					model: IpAddress,
					as: 'ipAddresses',
				}]
				
			})
			.then(questions => res.status(200).send(questions))
			.catch(error => res.status(400).send(error)
		);
	},
};
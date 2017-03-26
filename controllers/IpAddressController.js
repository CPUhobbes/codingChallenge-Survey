const IpAddress = require('../models').IpAddress;

module.exports = {
	create(req, res) {
		return IpAddress
			.create({
				answer: req.body.ipAddress,
                questionId: req.params.questionId
			})
			.then(answer => res.status(201).send(answer))
			.catch(error => res.status(400).send(error)
		);
	},
};
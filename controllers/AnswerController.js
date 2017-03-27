const Answer = require('../models').Answer;

module.exports = {
	create(req, res) {
		return Answer
			.create({
				answer: req.body.answer,
                questionId: req.params.questionId
			})
			.then(answer => res.status(201).send(answer))
			.catch(error => res.status(400).send(error)
		);
	},
	updateCount(req, res){
		return Answer
			.findById(req.body.answerId)
			.then((answer)=>{
				let newCount = answer.dataValues.responses + 1;
				answer.update({responses:newCount})
				.then(() => res.status(201).send(answer))
				.catch((error) => res.status(400).send(error));			
			})
			.catch(error => res.status(400).send(error)
		);
	}
};
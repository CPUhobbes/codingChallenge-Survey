const Question = require('../models').Question;
const Answer = require('../models').Answer;
const IpAddress = require('../models').IpAddress;
Question.hasMany(Answer, IpAddress, { onDelete: 'cascade' });
const sequelize = require('sequelize');
//Answer.belongsTo(Question);

module.exports = {
	
	//Create a new question
	create(req, res) {
		console.log(req.body.answers);
		return Question
			.create({
				question: req.body.question,
				answers: req.body.answers,
				ipAddresses:[{ip:''}]
			},
			{
				include: [{
					model:Answer,
					as:'answers'
				},
				{
					model: IpAddress,
					as: 'ipAddresses',
				}]
			})
			.then(question => res.status(201).send(question))
			.catch(error => res.status(400).send(error)
		);
	},

	//Get all Questions
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

	//Find one question that does not match current IP Address
	getAvaliableQuestions(req, res){
	
		//Get IP Address of Client
		let ipAddr = req.headers['x-forwarded-for'] || 
			req.connection.remoteAddress || 
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress;

		console.log(ipAddr);

		return Question
			.findAll({
				include:[
				{
					model: Answer,
					as: 'answers',
				},
				{
					model: IpAddress,
					as: 'ipAddresses',
					where:{
						ip: {$eq:'::1'}
					}
							
				}]
			}).then(results => {
				let list =[-1];
				results.forEach((val, index)=>{
					list.push(val.dataValues.id)
				})
				return Question.findAll({
					order: [
  						[sequelize.fn('RAND')]
					],
					limit: 1,
					include:[
					{
						model: Answer,
						as: 'answers',
					}],
					where: {
						id:{
							$notIn: list
						}
					}
				})
			})
			.then(questions => res.status(201).send(questions))
			.catch(error => res.status(400).send(error)
		);
	},

	deleteQuestion(req, res){
		console.log(req.body.questionId);
		return Question
			.find({
				where:{
					id: req.body.questionId
				},
			})
			.then(question => {
				if(!question){
					return res.status(404).send({message:"Cannot find Question"});
				}

				return question
					.destroy()
					.then(()=> res.status(202).send({removed:true}))
					.catch(error => res.status(400).send(error));


			})
			.catch(error => res.status(400).send(error));
	}
};